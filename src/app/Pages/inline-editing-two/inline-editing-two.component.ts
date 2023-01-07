import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-editing-two',
  templateUrl: './inline-editing-two.component.html',
  styleUrls: ['./inline-editing-two.component.css']
})
export class InlineEditingTwoComponent implements OnInit {
  editFieldName:any;
  userArray = [
    {
      "id": 1,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "editFieldName": ''
    },
    {
      "id": 2,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "editFieldName": ''
    },
    {
      "id": 3,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "editFieldName": ''
    },
    {
      "id": 4,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "editFieldName": ''
    },
    {
      "id": 5,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "editFieldName": ''
    },
    {
      "id": 5,
      "name": 'Varad Kumbhar',
      "username": 'VSK',
      "email": 'varad0024@gmail.com',
      "phone": '8378915080',
      "website": 'vsk.org',
      "editFieldName": ''
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }
  onEdit(item: any,field:string) {
    debugger
    item.editFieldName = field;
  }
  onUpdate() {

  }
  close(item: any){
    item.editFieldName = ''
  }

}
