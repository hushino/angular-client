import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
<<<<<<< HEAD
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes = []

  episodeId = []

  AnimeList2 = []
=======
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  homes = [];

  episodeId = [];

  AnimeList2 = [];
>>>>>>> initial commit

  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.dataService.getHome().subscribe(data => {
<<<<<<< HEAD
      this.homes = data
    })
=======
      this.homes = data;
    });
>>>>>>> initial commit
  /*   this.route.params.subscribe(params => {
       this.dataService.getUniqueEpisode(params['id'],params['id']).subscribe(data => {
         this.episodeId = data
       })
     });  */

  }
  onShowEpisode(id: number, id2: number) {
<<<<<<< HEAD
    this.dataService.getUniqueEpisode(id, id2).subscribe(datas => {
      this.AnimeList2 = datas;
      console.log(datas)
    })
    this.router.navigate(['', id, id2])
=======
    /* this.dataService.getUniqueEpisode(id, id2).subscribe(datas => {
      this.AnimeList2 = datas;
      console.log(datas)
    }) */
    this.router.navigate(['', id, id2]);
>>>>>>> initial commit
  }

}
