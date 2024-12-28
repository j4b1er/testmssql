import sql from "mssql";

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  port: parseInt(process.env.DB_PORT, 10) || 1433,
  options: {
    encrypt: process.env.DB_ENCRYPT === "true", // For Azure or encrypted connections
    trustServerCertificate: true, // Required for local dev
  },
};

let pool;

export async function getDbConnection() {
  if (!pool) {
    pool = await sql.connect(config);
  }
  return pool;
}
