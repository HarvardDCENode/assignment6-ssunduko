import { Injectable } from '@angular/core';

@Injectable()
export class VideoService {
  maxId:number = 3;
  videoList = [
    {
      _id: 1,
      title:'First Video',
      description:'this is my first video',
    },
    {
      _id: 2,
      title:'Second Video',
      description:'this is my second video',
    },
    {
      _id: 3,
      title:'Third Video',
      description:'this is my third video',
    }
  ];

  constructor() { }

  listVideos():any[]{
    return this.videoList;
  }

  getVideo(id:number):any{
    return this.videoList.find((el) => {return el._id == id});
  }
  createVideo(videoObject:any){
    if (!videoObject._id){
      videoObject._id = ++this.maxId;
    }
    this.videoList.push(videoObject);
    return this.videoList[videoObject._id];
  }

  updateVideo(id:number, data:any){
    let video = this.getVideo(id);
    if (video){
      video = Object.assign(video, data);
      return video;
    } else {
      return null;
    }
  }

  deleteVideo(id:number){
    let video = this.getVideo(id);
    if (video){
      this.videoList = this.videoList.filter(el => el._id != id);
    }
  }
}
