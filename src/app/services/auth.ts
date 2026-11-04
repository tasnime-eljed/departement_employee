import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class Auth {

  users: User[] = [
    { username: 'admin',  password: '123', roles: ['ADMIN'] },
    { username: 'tasnime', password: '123', roles: ['USER'] }
  ];

  public loggedUser!: string;
  public isloggedIn: boolean = false;
  public roles!: string[];

  constructor(private router: Router) {}

  SignIn(user: User): boolean {
    let validUser = false;

    this.users.forEach(curUser => {
      if (user.username == curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });

    return validUser;
  }

  logout(): void {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }

  isAdmin(): boolean {
    if (!this.roles) return false;
    return this.roles.indexOf('ADMIN') > -1;
  }

  setLoggedUserFromLocalStorage(login: string): void {//login : reçoit le nom de l'utilisateur.
  this.loggedUser = login;
  this.isloggedIn = true;
  this.getUserRoles(login);
}

getUserRoles(username: string): void {
  this.users.forEach(curUser => {
    if (curUser.username == username) {
      this.roles = curUser.roles;
    }
  });
}
}
