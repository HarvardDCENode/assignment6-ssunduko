import { Component, OnInit } from '@angular/core';
import { VideoService } from './video.service';

/**
 * Define AppComponent
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ VideoService ]
})
/**
 * Export AppComponent
 */
export class AppComponent {
  constructor(private videoService:VideoService){
  }
  videoList:any = null;

  ngOnInit() {

    //Get list of Videos from VideoService
    this.videoList = this.videoService.listVideos();
  }

}
