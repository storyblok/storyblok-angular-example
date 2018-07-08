import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DynamicModule } from 'ng-dynamic-component';
import { AppComponent } from './app.component';
import { StoryblokService } from './storyblok.service';
import { StoryblokDirective } from './storyblok.directive';
import { TeaserComponent } from './teaser/teaser.component';
import { GridComponent } from './grid/grid.component';
import { PageComponent } from './page/page.component';
import { FeatureComponent } from './feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    StoryblokDirective,
    TeaserComponent,
    GridComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    DynamicModule.withComponents([
      PageComponent,
      TeaserComponent,
      GridComponent,
      FeatureComponent
    ])
  ],
  providers: [
    StoryblokService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
