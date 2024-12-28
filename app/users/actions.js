"use server";

import { getDbConnection } from "../db";

export async function fetchUsers() {
  try {
    const db = await getDbConnection();
    const result = await db.request().query("SELECT * FROM Character");
    return result.recordset;
  } catch (error) {
    console.error("Database query failed:", error);
    throw new Error("Failed to fetch users");
  }
}
