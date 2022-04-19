import { Injectable } from '@angular/core';

/**
 * VideoService containing three hardcoded videos
 */
@Injectable()
export class VideoService {

  //Hardcoded Video List
  videoList = [
    {
      _id: 1,
      title:'First Video',
      description:'This is my first video',
      averageRating: 3,
      reviews: [ {rating: 3, review: 'This is my first review'}]

    },
    {
      _id: 2,
      title:'Second Video',
      description:'This is my second video',
      averageRating: 4,
      reviews: [ {rating: 4, review: 'This is my second review'}]
    },
    {
      _id: 3,
      title:'Third Video',
      description:'This is my third video',
      averageRating: 5,
      reviews: [ {rating: 5, review: 'This is my third review'}]
    }
  ];

  /**
   * Default Constructor
   */
  constructor() { }

  /**
   * Method for getting Video List
   */
  listVideos():any[]{
    return this.videoList;
  }
}
