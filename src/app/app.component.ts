import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ VideoService ]
})
export class AppComponent {
  constructor(private videoService:VideoService){
  }

  videoList:any = null;

  ngOnInit() {
    this.videoList = this.videoService.listVideos();
  }

}
