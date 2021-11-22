import { Injectable } from '@angular/core';
import { User } from '../model/user';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  users: User[] = [];

  constructor() { 
    this.users = [
      {
        userName: 'vcouthard0',
        fullName: 'Vanny Couthard',
        image: './assets/img/3.jpg',
        age: 28,
        gender: 'Female',
        city: 'Phu Loc',
      },
      {
        userName: 'blabbet1',
        fullName: 'Blanche LAbbet',
        image: './assets/img/26.jpg',
        age: 22,
        gender: 'Female',
        city: 'Piskivka',
      },
      {
        userName: 'mmassimob',
        fullName: 'Mikkel Massimo',
        image: './assets/img/64.jpg',
        age: 39,
        gender: 'Male',
        city: 'Lâm Thao',
      },
      {
        userName: 'jgarfitt2',
        fullName: 'Jacklin Garfitt',
        image: './assets/img/68.jpg',
        age: 38,
        gender: 'Female',
        city: 'Padre Nabeto',
      },
      {
        userName: 'cgawn7',
        fullName: 'Colver Gawn',
        image: './assets/img/43.jpg',
        age: 39,
        gender: 'Male',
        city: 'Tai’an',
      },
      {
        userName: 'asloegrave3',
        fullName: 'Adda Sloegrave',
        image: './assets/img/79.jpg',
        age: 21,
        gender: 'Female',
        city: 'Lanpelan',
      },
      {
        userName: 'gdavet6',
        fullName: 'Glenda Davet',
        image: './assets/img/90.jpg',
        age: 31,
        gender: 'Female',
        city: 'Carapicuíba',
      },
      {
        userName: 'srocco9',
        fullName: 'Steve Rocco',
        image: './assets/img/60.jpg',
        age: 50,
        gender: 'Male',
        city: 'Kefang',
      },
    ];
  }

  public getUsers(): User[] {
    return this.users;
  }

  getMan() {
    return this.users.filter(u => u.gender === 'Male');
  }

  getWoman() {
    return this.users.filter(u => u.gender === 'Female');
  }


}
