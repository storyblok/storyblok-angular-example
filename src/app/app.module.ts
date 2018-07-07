import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PageComponent } from './page/page.component';

import { StoryblokService } from './storyblok.service';
import { StoryblokDirective } from './storyblok.directive';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StoryblokDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    StoryblokService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
