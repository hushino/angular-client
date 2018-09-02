import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { DataService, Anime } from 'src/app/data.service';
=======
import { DataService } from 'src/app/data.service';
>>>>>>> initial commit
import { ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-anime-by-id',
  templateUrl: './anime-by-id.component.html',
<<<<<<< HEAD
  styleUrls: ['./anime-by-id.component.css']
})
export class AnimeByIdComponent implements OnInit {

  ids = []
  episodeId = []
  
=======
  styleUrls: ['./anime-by-id.component.scss']
})
export class AnimeByIdComponent implements OnInit {

  ids = [];
  episodeId = [];

>>>>>>> initial commit
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.dataService.getAnimeById(params['id']).subscribe(data => {
<<<<<<< HEAD
        this.ids = data
      })
    })
    this.route.params.subscribe(params => {
      this.dataService.getEpisodeById(params['id']).subscribe(data => {
        this.episodeId = data
      })
    });
    
=======
        this.ids = data;
      });
    });
    this.route.params.subscribe(params => {
      this.dataService.getEpisodeById(params['id']).subscribe(data => {
        this.episodeId = data;
      });
    });

>>>>>>> initial commit
  }

}
