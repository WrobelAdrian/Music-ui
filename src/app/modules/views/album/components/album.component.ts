import { Component, OnInit } from '@angular/core';
import {ColumnLabelsEnum} from '../../../../_enums/column-labels.enum';
import {UsersService} from '../../../../shared/services/users.service';
import {MusicService} from '../../../../shared/services/music.service';
import {CategoryEnum} from '../../../../_enums/category.enum';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  musicList = [];
  columnsToDisplay = Object.values(ColumnLabelsEnum);
  searchInput = '';

  constructor(private usersService: UsersService,
              private musicService: MusicService) {
  }

  async ngOnInit() {
    await this.musicService.search(CategoryEnum.ARTIST, 'queen').subscribe(music => {
      this.musicList = music.data;
    });
  }

  async search() {
    console.log(this.searchInput)
    await this.musicService.search(CategoryEnum.ARTIST, this.searchInput).subscribe(music => {
      this.musicList = music.data;
    });
  }
}
