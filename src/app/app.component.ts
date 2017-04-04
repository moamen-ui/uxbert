import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: 'templates/weather.html',
  providers: [AppService]
})
export class AppComponent  { 
  name = 'Angular';
  posts: any;
  weatherItem: any;

  constructor(private __appServ: AppService) {
    
    this.__appServ.getPosts()
                    .subscribe(
                      data => {
                        this.weatherItem = data;
                      }
                    );
  }
}
