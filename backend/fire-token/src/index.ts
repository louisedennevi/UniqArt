import * as Express from "express";
import * as Cors from "cors";
import axios from "axios";
import { checkIfAuthenticated } from "./auth.middleware";


const app = Express();
const port = 3000;

app.use(Cors());

app.get("/", (_, res) => {
    return res.send("hello world");
});

app.get("/louise", checkIfAuthenticated, async (_, res: Express.Response ) => {
    const gotVal = await sendRequest();
    return res.json(gotVal.data);

});

const sendRequest = async() => {
    const characters = await axios.get("AIzaSyB3gzVghWYFWdaT_JUt0Bu9p-hYu_xMDzQ")
    return characters;
}

app.listen(port, () => { console.log("working on port" + port )})
