import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'gutenberg';
  appshow = true;
  cards : any[] = [{}];
  data : any[] = [];
  id : string[] = [];
  name : string[] = [];
  pagination:number[] = [];
  page = 1;
  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get("https://data.cityofnewyork.us/resource/h9gi-nx95.json").subscribe((data)=>{
      var info = JSON.parse(JSON.stringify(data));

      for(let i=1; i<info.length && i<10; i++){
        if(info[i].contributing_factor_vehicle_1)
          this.cards.push(JSON.stringify(info[i]));
      }
      for(let i=10; i<=this.cards.length; i+=10){
        this.pagination.push(i/10);
      }

      /*for(let i=0; i< JSON.parse(this.cards).results.length; i++){
        if(JSON.parse(this.books).results[i].authors[0].name)
          this.id.push(JSON.parse(this.books).results[i].authors[0].name);
          this.name.push(JSON.parse(this.books).results[i].title);
      }*/
    })
  }

  show(){
    this.appshow = false;
  }

}
