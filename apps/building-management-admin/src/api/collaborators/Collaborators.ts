import { Buildings } from "../buildings/Buildings";

export type Collaborators = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  role?: "Option1" | null;
  email: string | null;
  building?: Buildings | null;
};
