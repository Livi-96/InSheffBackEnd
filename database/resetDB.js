import { pool } from "./index.js"


async function resetDatabase(){

    await pool.query(`
    DROP TABLE IF EXISTS inSheff CASCADE;`)

    await pool.query(`
    CREATE TABLE inSheff
    (id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    lable VARCHAR,
    lat VARCHAR,
    lang VARCHAR)`)

    await pool.query(`INSERT INTO inSheff (lable, lat, lang)
    VALUES('Foundry', '123', '123')
    `)

    await pool.end();

}

await resetDatabase()