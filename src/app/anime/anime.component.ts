import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
<<<<<<< HEAD
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
 
  AnimeList2 = [];
  animes = []
=======
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  AnimeList2 = [];
  animes = [];
>>>>>>> initial commit

  constructor(private dataService: DataService, private activeroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(data => {
<<<<<<< HEAD
      this.animes = data
    })
=======
      this.animes = data;
    });
>>>>>>> initial commit

  }
  onShowAnime(id: number) {
    this.dataService.getAnimeById(id).subscribe(datas => {
      this.AnimeList2 = datas;
     // console.log(data)
<<<<<<< HEAD
    })
    this.router.navigate(['/animes', id])
  }
 
=======
    });
    this.router.navigate(['/animes', id]);
  }

>>>>>>> initial commit
}
