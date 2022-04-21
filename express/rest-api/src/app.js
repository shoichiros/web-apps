const axios = require("axios");

const data = {
  username: "shoichiros",
  email: "shoichirosss",
};

axios
  .post("http://localhost:3001/user", data)
  .then((result) => console.log(result.data))
  .catch((error) => console.log(error));

/* axios
  .get("http://localhost:3001/user")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
 */

/* axios
  .delete("http://localhost:3001/user/5")
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
 */
/* axios
  .put("http://localhost:3001/user/4", data)
  .then((result) => console.log(result))
  .catch((error) => console.log(error)); */
