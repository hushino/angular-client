import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AnimeComponent } from './anime/anime.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AnimeByIdComponent } from './anime-by-id/anime-by-id.component';
import { EpisodeByIdComponent } from './episode-by-id/episode-by-id.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'animes', component: AnimeComponent },
  { path: 'animes/:id', component: AnimeByIdComponent },
  { path: ':id/:id2', component: EpisodeByIdComponent },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AnimeComponent,
    HomeComponent,
    PagenotfoundComponent,
    AnimeByIdComponent,
    EpisodeByIdComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
     // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
