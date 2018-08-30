import { Component, OnInit } from '@angular/core';
import { DataService, Anime } from 'src/app/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-anime-by-id',
  templateUrl: './anime-by-id.component.html',
  styleUrls: ['./anime-by-id.component.css']
})
export class AnimeByIdComponent implements OnInit {

  ids = []
  episodeId = []
  
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getAnimeById(params['id']).subscribe(data => {
        this.ids = data
      })
    })
    this.route.params.subscribe(params => {
      this.dataService.getEpisodeById(params['id']).subscribe(data => {
        this.episodeId = data
      })
    });
    
  }

}
