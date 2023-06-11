import { getDatabase } from "./notion";

export const databaseId = process.env.NOTION_DATABASE_ID;

export async function fetchInitialData() {
  const database = await getDatabase(databaseId);

  return database;
}
