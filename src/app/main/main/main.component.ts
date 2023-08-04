import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {

  myData: { subjectName: string, description: string, thumbnail: string }[] = [];

  receiveDataFromSidebar: any = {
    subjectName: 'Angular',
    description: `Angular is an open framework and
    platform for creating Single Page Applications, written in TypeScript and supported and developed by Google.`,
    thumbnail: 'assets/images/angular.png'
  };

  MainMethod(data: any) {
    this.receiveDataFromSidebar = data;
  }

}
