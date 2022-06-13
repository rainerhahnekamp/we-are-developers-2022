import { Talk, talks } from "data/talks";

export async function loadTalks(): Promise<Talk[]> {
  return talks;
}
