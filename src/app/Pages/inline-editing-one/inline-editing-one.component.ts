import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-editing-one',
  templateUrl: './inline-editing-one.component.html',
  styleUrls: ['./inline-editing-one.component.css']
})
export class InlineEditingOneComponent implements OnInit {



  userArray = [
    {
      "id": 1,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "isEdit": false
    },
    {
      "id": 2,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "isEdit": false
    },
    {
      "id": 3,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "isEdit": false
    },
    {
      "id": 4,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "isEdit": false
    },
    {
      "id": 5,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "isEdit": false
    },
    {
      "id": 5,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "isEdit": false
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onEdit(item: any) {
    debugger
    this.userArray.forEach(element => {
      element.isEdit = false;
    });
    item.isEdit = true;
  }
  onUpdate() {

  }


}
