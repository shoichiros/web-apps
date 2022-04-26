require("dotenv").config();
const odbc = require("odbc");

/* Data lists sql query. */
const queryGetDataExample = async () => {
  const pool = await odbc.pool(process.env.CONNECTION_STRING);
  const result = await pool.query("SELECT * FROM user");
  return result;
};

queryGetDataExample().then((result) => {
  for (let i = 0; i < result.count; i++) {
    console.log(result[i]);
  }
});

/* Data insert, update and delete sql query. */
const queryExcuteExample = async () => {
  const connection = await odbc.connect(process.env.CONNECTION_STRING);
  const statement = await connection.createStatement();

  await statement.prepare("INSERT INTO user (username, email) VALUES(?, ?)");
  await statement.bind(["name", "name@name.com"]);
  const result = await statement.execute();
  console.log(result);
  console.log("Done");
  await statement.close();
};

queryExcuteExample();
