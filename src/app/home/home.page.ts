import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { ListService } from '../services/list.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  arrayFiltrado: User[] = this.listService.getUsers();
  min: number;
  max: number;

  constructor(public listService: ListService) {}

  ngOnInit() {
    
  }

  getArrayFiltrado(value: string) {
    
    if (value == 'all') {
      if(this.min == null || this.max == null) {
        this.arrayFiltrado = this.listService.getUsers();
      } else {
        this.getUsersAge();
      }
    }
    if (value == 'man') {
      if(this.min == null || this.max == null) {
        this.arrayFiltrado = this.listService.getMan();
      } else {
        this.getUsersAge();
        this.getUserGender('man');
      }
      
    }
    if (value == 'woman') {
      if(this.min == null || this.max == null) {
        this.arrayFiltrado = this.listService.getWoman();
      } else {
        this.getUsersAge();
        this.getUserGender('woman');
      }
    }

  }

  getUsersAge() {
    this.arrayFiltrado = this.listService.getUsers().filter(u => (u.age >= this.min && u.age <= this.max ));
    
  }

  getUserGender(gender: string) {
    if(gender == 'man') {
      this.arrayFiltrado = this.listService.getMan();
      this.arrayFiltrado = this.arrayFiltrado.filter(u => (u.age >= this.min && u.age <= this.max ));
    } 
    if(gender == 'woman') {
      this.arrayFiltrado = this.listService.getWoman();
      this.arrayFiltrado = this.arrayFiltrado.filter(u => (u.age >= this.min && u.age <= this.max ));
    }
  }
 
}
