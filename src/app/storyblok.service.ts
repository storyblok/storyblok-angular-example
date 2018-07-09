import { Injectable } from '@angular/core';
import Client from 'storyblok-js-client';

@Injectable({
  providedIn: 'root'
})
export class StoryblokService {
  private sbClient = new Client({
    accessToken: 'Q2mIMuV6frKpnmQlOee0rAtt'
  });

  constructor() { }

  getStory(slug: string, params?: object): Promise<any> {
    return this.sbClient.getStory(slug, params)
      .then(res => res.data);
  }

  getStories(params?: object): Promise<any> {
    return this.sbClient.getStories(params)
      .then(res => res.data);
  }
}
