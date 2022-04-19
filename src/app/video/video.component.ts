import {Component, Input, OnInit} from '@angular/core';

/**
 * Create VideoComponent
 */
@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
/**
 * Export VideoComponent
 */
export class VideoComponent implements OnInit {

  //Expose video object to the component display
  @Input() video:any;

  constructor() {
  }

  ngOnInit(){}
}
