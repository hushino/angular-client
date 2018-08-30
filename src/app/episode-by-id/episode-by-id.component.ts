import { Component, OnInit } from '@angular/core';
import { DataService, Anime } from 'src/app/data.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
declare var jwplayer: any;
@Component({
  selector: 'app-episode-by-id',
  templateUrl: './episode-by-id.component.html',
  styleUrls: ['./episode-by-id.component.css']
})
export class EpisodeByIdComponent implements OnInit {

  ids = []
  url = 'https://content.jwplatform.com/libraries/bfIbW5Pe.js';
  //jwplayer: any;
  loadAPI: Promise<any>;
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
   
    /* setTimeout(() => {
      this.loadAPI = new Promise((resolve) => {
        this.loadScript();
      });
    }, 2000); */
  }
  ngAfterViewInit() {
    this.loadAPI = new Promise((resolve) => {
      this.loadScript();
    });
  }
  loadScript() { 
    jwplayer('player').setup({
      title: 'Player Test',
      playlist: 'https://cdn.jwplayer.com/v2/media/8L4m9FJB',
      width: 640,
      height: 360,
      aspectratio: '16:9',
      mute: false,
      autostart: true,
      primary: 'html5',
    });
  }
  /* loadScript() {
    this.url;
    this.jwplayer("myElement").setup({
      "file": "https://www.w3schools.com/html/mov_bbb.mp4",
      "image": "https://cdn.discordapp.com/attachments/423287746547810324/484563946821386240/Dlrp3ypUcAAe26w.png",
      "height": 460,
      "width": 540
    });
  } */
}
