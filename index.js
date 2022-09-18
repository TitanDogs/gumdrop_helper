import fs from "fs";
import * as dotenv from 'dotenv';
dotenv.config();

const start = () => {
    try {
        let holderListBuffer = fs.readFileSync("./json/holderList.json");
        let holderList = JSON.parse(holderListBuffer);
        if (!holderList || holderList.length === 0) {
            throw "Error - No holder list found";
        }

        let gumdropHolderList = [];
        for (let holderAddress of holderList) {
            gumdropHolderList.push({
                handle: holderAddress,
                amount: process.env.TOKEN_AMOUNT,
            })
        }

        if (gumdropHolderList && gumdropHolderList.length > 0) {
            if (!fs.existsSync(".cache")) {
                fs.mkdirSync(".cache");
            }
            fs.writeFileSync(".cache/gumdropList.json", JSON.stringify(gumdropHolderList, null, "\t"));
        }
    } catch (err) {
        console.log(err);
    }
}

start();