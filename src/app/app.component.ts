import { Component, OnInit } from '@angular/core';
import { StoryblokService } from './storyblok.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'apps';
  story = '';

  constructor(private storyblokService: StoryblokService) {
    (<any>window).storyblok.init();
    (<any>window).storyblok.on(['change', 'published'], function() {
      location.reload(true)
    });
  }

  ngOnInit() {
    this.storyblokService.getStory('home', {version: 'draft'})
      .then(data => this.story = data.story);
  }
}
