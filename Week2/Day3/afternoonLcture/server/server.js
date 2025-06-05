//in order to use express
// the keyword 'import' =>  after the add of "type": "module"  in package.json (an ES6 syntax)
import express from "express";

import router from "./routes/language.routes.js"
const app = express();
const port = 8000;
//! make sure these lines are above any app.get or app.post code blocks
app.use(express.json()); //middleware

app.use("/api", router)
//! this needs to be below the other code blocks
app.listen( port, () => console.log(`Server running on port: ${port}`) );
