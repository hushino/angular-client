import { Component, OnInit } from '@angular/core';
import { DataService, Anime } from 'src/app/data.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-anime-by-id',
  templateUrl: './anime-by-id.component.html',
  styleUrls: ['./anime-by-id.component.css']
})
export class AnimeByIdComponent implements OnInit {

  ids = []

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      // console.log(params) //log the entire params object
      // console.log(params['id']) //log the value of id
      this.dataService.getAnimeById(params['id']).subscribe(data => {
        this.ids = data
      })
    });

  }

}
