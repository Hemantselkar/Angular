import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SignUpService {
  url = 'http://localhost:3000/users';

  constructor(private http: HttpClient) {}

  users: any[] = [];
  addUser(user: any) {
    return this.http.post(this.url,user)
  }

  getUsers() {
    return this.http.get(this.url)
    // return this.users;
  }

  login(email: string, password: string) {
    return this.http.get<any[]>(
      `${this.url}?email=${email}&password=${password}`
    );
  
  }
}
