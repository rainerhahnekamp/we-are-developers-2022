import { Workshop, workshops } from "../../data/workshops";

export async function findWorkshops(): Promise<Workshop[]> {
  return workshops;
}
