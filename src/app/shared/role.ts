import { ERole } from "./enum-role";

export interface Role {
  name: ERole.User | ERole.Admin;
}
