const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.use(require("./Develop/routes/apiRoutes"))
app.use(require("./Develop/routes/htmlRoutes"))

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });

  