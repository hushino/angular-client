import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
 
 public AnimeList2 = [];
  animes = []
  private selectedId: number;

  constructor(private dataService: DataService, private activeroute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.dataService.getAll().subscribe(data => {
      this.animes = data
    })

  }
  onShowAnime(id: number) {
    this.dataService.getAnimeById(id).subscribe(data => {
      this.AnimeList2 = data;
      console.log(data)
    })
    this.router.navigate(['/animes', id])
  }
 
}
