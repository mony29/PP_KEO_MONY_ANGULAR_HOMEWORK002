import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  myData: { subjectName: string, description: string, thumbnail: string }[] = [];
 
  isLoggedIn : boolean = false;

  receiveDataFromSidebar: any = {
    subjectName: 'Angular',
    description: `Angular is an open framework and
    platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
    // thumbnail: 'aassets/images/angular.png'
    thumbnail : '../../../assets/images/angular.png'
  };

  MainMethod(data: any) {
    this.receiveDataFromSidebar = data;
  }

}
