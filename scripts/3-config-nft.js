import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
    "0xd603Bcc8F99e582B6790012a090e8CE911Ee9f1e",
);

(async () => {
        try{
           await bundleDrop.createBatch([
               {
                name: "pb acess",  
                description: "This NFT will give you access to PbDAO!",
                image: readFileSync("scripts/assets/PointBlank.jpg"),
               },
           ]);
           console.log("✅ Successfully created a new NFT in the drop!");
        }
        catch(err){
            console.log("failed to create the new NFT",err)
        }
    }
)()