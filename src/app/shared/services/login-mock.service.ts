import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginMockService {

  private USUARIOS = [
    {
      "usuario": {
        "id": 23,
        "email": "admin@admin.com",
        "password": "$2a$10$Et6RCka0KVLgYDrEp1dBteUSRher06lnjmKw71ue/fOyvIma3XgoO",
        "roles": [
          {
            "name": "ROLE_ADMIN"
          }
        ],
        "lastLogin": new Date("2022-03-12T21:18:54.419+00:00"),
        "created": new Date("2023-06-11T20:17:18.809+00:00"),
        "updated": new Date("2023-06-11T20:17:18.809+00:00"),
        "admin": true
      },
      "tokenType": "Bearer",
      "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBhZG1pbi5jb20iLCJhdXRoIjpbeyJhdXRob3JpdHkiOiJST0xFX0FETUlOIn1dLCJpYXQiOjE2NDcxMTk5MzMsImV4cCI6MTY0NzU1MTkzM30.-juCaq8skUDia4zTQy4si5NtmsGjW8Q1711OvPOc8l1CAXCcZJqflvcM4T1CYzdmV3_5AvXG7GE2HJ6jTyTwew"
    },
    {
      "usuario": {
        "id": 232,
        "email": "user@user.com",
        "password": "$2a$10$Et6RCka0KVLgYDrEp1dBteUSRher06lnjmKw71ue/fOyvIma3XgoO",
        "roles": [
          {
            "name": "ROLE_USER"
          }
        ],
        "lastLogin": new Date("2022-03-13T21:22:03.682+00:00"),
        "created": new Date("2022-02-06T21:18:15.154+00:00"),
        "updated": new Date("2022-02-06T21:18:15.154+00:00"),
        "admin": false
      },
      "accessToken": "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyQHVzZXIuY29tIiwiYXV0aCI6W3siYXV0aG9yaXR5IjoiUk9MRV9VU0VSIn1dLCJpYXQiOjE2NDcyMDY1MjMsImV4cCI6MTY0NzYzODUyM30.P-GhmE58eLFW394DHo0gCDjXWH0ImU38nFymIJ8x-j48zFTFIxnjKLqxR-aYocsEQQBX-vgutYgT3DR02WV0tQ",
      "tokenType": "Bearer"
    }
  ]

  constructor() { }

  public login(email: string, password: string) {
    return this.USUARIOS.find(u => u.usuario.email === email);
  }

}
