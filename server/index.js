const express = require('express');
const colors = require('colors');
const cors = require('cors');
// require('dotenv').config();
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema/schema');
const port = process.env.PORT || 5000;

const app = express();

app.use(cors());

app.get("/",(req,res)=>{
  res.json("server start")
})

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
