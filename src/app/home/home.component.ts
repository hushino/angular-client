import { Component, OnInit } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  homes = []

  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.dataService.getHome().subscribe(data => {
      this.homes = data
    })
  }

}
