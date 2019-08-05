import * as moment from 'moment';

export interface CalendarDate {
  date: moment.Moment;
  selected?: boolean;
  today?: boolean;
}
