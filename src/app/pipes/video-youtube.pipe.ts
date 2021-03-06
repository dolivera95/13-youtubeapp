import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'videoYoutube'
})
export class VideoYoutubePipe implements PipeTransform {

  constructor(private _ds:DomSanitizer){}

  transform(value: string): any {
    let url = "https://www.youtube.com/embed/";
    return this._ds.bypassSecurityTrustResourceUrl(url + value);
  }

}
