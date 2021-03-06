import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.scss']
})
export class AnimeComponent implements OnInit {

  AnimeList2 = [];
  animes = [];

  constructor(private dataService: DataService, private activeroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(data => {
      this.animes = data;
    });

  }
  onShowAnime(id: number) {
    this.dataService.getAnimeById(id).subscribe(datas => {
      this.AnimeList2 = datas;
     // console.log(data)
    });
    this.router.navigate(['/animes', id]);
  }

}
