import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appStoryblok]'
})
export class StoryblokDirective {

  @Input('appStoryblok') appStoryblok: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit() {
    if (typeof this.appStoryblok === 'undefined') {
      return;
    }

    let options = JSON.parse(this.appStoryblok.replace('<!--#storyblok#', '').replace('-->', ''));

    this.el.nativeElement.setAttribute('data-blok-c', JSON.stringify(options));
    this.el.nativeElement.setAttribute('data-blok-uid', options.id + '-' + options.uid);
  }

}
