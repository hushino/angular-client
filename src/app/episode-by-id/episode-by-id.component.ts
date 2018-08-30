import { Component, OnInit } from '@angular/core';
import { DataService, Anime } from 'src/app/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-episode-by-id',
  templateUrl: './episode-by-id.component.html',
  styleUrls: ['./episode-by-id.component.css']
})
export class EpisodeByIdComponent implements OnInit {

  ids = []

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getUniqueEpisode(params['id'], params['id2']).subscribe(data => {
        this.ids = data
        console.log(data)
      })
    })
  }

}
