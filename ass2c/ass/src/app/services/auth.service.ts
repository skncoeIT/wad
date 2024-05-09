import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  // Register
  registerUser(data: any) {
    localStorage.setItem('user', JSON.stringify(data));
    return true;
  }
  // Login
  loginUser(data: any) {
    // extract the data and Run it back
    if (localStorage.getItem('user')) {
      let localData = JSON.parse(localStorage.getItem('user') || '');
      if (localData.email === data.email && localData.password === data.password) {
        return true;
      }
      else {
        return false;
      }
    }
    else {
      return false;
    }
  }

  // getProfile
  getProfile() {
    let localData = JSON.parse(localStorage.getItem('user') || '');
    return localData;
  }
  // Logout

  logout() {
    localStorage.removeItem('user');
    return true;
  }
}
