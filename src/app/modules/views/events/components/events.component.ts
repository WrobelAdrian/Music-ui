import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import * as moment from 'moment';
import {CalendarDate} from '../interfaces/calendar-date.interface';
import * as _ from 'lodash';
import 'rxjs/add/operator/map';
import {EventsWebsocketService} from '../../services/events-websocket.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input() selectedDates: CalendarDate[] = [];
  @Output() onSelectDate = new EventEmitter<CalendarDate>();

  private currentDate = moment();
  private dayNames = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  private weeks: CalendarDate[][] = [];
  private sortedDates: CalendarDate[] = [];
  private weekNumbers = [1, 2, 3, 4, 5, 6];

  constructor(private eventsWebsocketService: EventsWebsocketService) {
    this.createGrid();
  }

  ngOnInit() {
    this.eventsWebsocketService.getEvent().subscribe(data => {
      console.log('Events', data);
    });
    this.createEvent();
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    console.log('destroyed')
  }

  createEvent() {
    this.eventsWebsocketService.sendEvent({
        title: 'event',
        date: new Date(),
        description: 'description',
        type: 'type'
      }
    );
  }

  createGrid(): void {
    const dates = this.fillDates(this.currentDate);
    const weeks: CalendarDate[][] = [];
    while (dates.length > 0) {
      weeks.push(dates.splice(0, 7));
    }
    this.weeks = weeks;
  }

  private fillDates(currentMoment: moment.Moment): CalendarDate[] {
    const firstOfMonth = moment(currentMoment).startOf('month').day();
    const firstDayOfGrid = moment(currentMoment).startOf('month').subtract(firstOfMonth, 'days');
    const startDate = firstDayOfGrid.date();
    return _.range(startDate, startDate + 42)
      .map((date: number): CalendarDate => {
        const dayDate = moment(firstDayOfGrid).date(date);
        return {
          today: this.isToday(dayDate),
          selected: this.isSelected(dayDate),
          date: dayDate,
        };
      });
  }

  private prevMonth(): void {
    this.currentDate = moment(this.currentDate).subtract(1, 'months');
  }

  private nextMonth(): void {
    this.currentDate = moment(this.currentDate).add(1, 'months');
  }

  private isToday(date: moment.Moment): boolean {
    return moment().isSame(moment(date), 'day');
  }

  private isSelected(date: moment.Moment): boolean {
    return _.findIndex(this.selectedDates, (selectedDate) => {
      return moment(date).isSame(selectedDate.mDate, 'day');
    }) > -1;
  }

  private isSelectedMonth(date: moment.Moment): boolean {
    return moment(date).isSame(this.currentDate, 'month');
  }

  private selectDate(date: CalendarDate): void {
    this.onSelectDate.emit(date);
  }
}
