import { createClient } from "@vercel/postgres";

export default async function handler(req, res) {
  const client = createClient();
  await client.connect();

  const query = "SELECT * FROM webnotes;";

  try {
    const result = await client.query(query);
    res.status(200).json(result.rows);
  } catch (error) {
    console.error("Error fetching data: ", error);
    res.status(500).json({ error: "Failed to fetch data" });
  } finally {
    await client.end();
  }
}
