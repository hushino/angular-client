import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {

  animes = []

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(data => {
      this.animes = data
    })
  }

}
