//bit that send the SQL to the database
import { pool } from "./database/index.js";


export async function getAllQry(){

    const queryText = `SELECT * FROM inSheff`

    const result = await pool.query(queryText)

    return result.rows;
}

export async function addMarkerQuery(newMarker) {
   console.log('model')
   console.log(newMarker)
    // Query the database to create an backend and return the newly created backend
    const queryText =
      "INSERT INTO inSheff (lable, lat, lang) VALUES ($1, $2, $3) RETURNING *";
      //define elements of the request and placeholder values
    const result = await pool.query(queryText, [
    'title',
      newMarker.lat,
      newMarker.lng
    ]);
    //return result
    return result.rows[0] || null;
  }
  