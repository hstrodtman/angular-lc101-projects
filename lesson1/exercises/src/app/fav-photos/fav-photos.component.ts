import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Favorite Photos';
  image1 = 'https://www.launchcode.org/assets/icons/trophy-95e8cbe9bfda44123422302951deb1c92a237d39052669b8fbfafec00cb4f608.png';
  image2 = 'https://i.pinimg.com/originals/30/9e/c6/309ec688553bd7e06beb111904c9a71a.jpg';
  image3 = 'http://earthporm.com/wp-content/uploads/2015/05/bulldog-puppy-cute-dog-photography-36__605.jpg';

  constructor() { }

  ngOnInit() {
  }

}