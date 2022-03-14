import { Role } from "./role";

export class UserAuth {
  id: number;
  email: string;
  roles: Role[];
  lastLogin: Date;
  admin: boolean;
  token?: string;

  constructor (id: number, email: string, roles: Role[], lastLogin: Date, admin: boolean) {
    this.id = id;
    this.email = email;
    this.roles = roles;
    this.lastLogin = lastLogin;
    this.admin = admin;
  }

}
