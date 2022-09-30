import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  trendingMovies:any;
  theatreMovies: any;
  popularMovies: any;

  constructor(private http:HttpClient , private _router:Router) { }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getTheatreMovies();
    this.getPopularMovies();
  }

  getTrendingMovies(){
    this.http.get('http://localhost:4200/assets/Data/Trending-movies.json').subscribe((movies:any)=>{
      this.trendingMovies=movies;
      console.log(this.trendingMovies);
      
    })


  }

  getTheatreMovies(){
    this.http.get('http://localhost:4200/assets/Data/Theatre-movies.json').subscribe((movies:any)=>{
      this.theatreMovies=movies;
      console.log(this.theatreMovies);
    })
  }
  getPopularMovies(){
    this.http.get('http://localhost:4200/assets/Data/Popular-movies.json').subscribe((movies:any)=>{
      this.popularMovies=movies;
      console.log(this.theatreMovies);
    })

  }

  goToMovie(type:string,id:string){
    this._router.navigate(['movie', type, id])

  }

}
