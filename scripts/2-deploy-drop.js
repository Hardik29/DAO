import ethers from "ethers";
import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const app = sdk.getAppModule("0xbb56A2AB32f495cCC2E10b47F73FA736e406604B"); 

(async () => {
  try{
      const bundleDropModule = await app.deployBundleDropModule({
        name: "PbDAO Memebership",
        description: "A DAO for fans of Point Blank",
        image: readFileSync("scripts/assets/PointBlank.jpg"),
        primarySaleRecipientAddress: ethers.constants.AddressZero,
      });
      console.log(
        "✅ Successfully deployed bundleDrop module, address:",
        bundleDropModule.address,
      );
      console.log(
        "✅ bundleDrop metadata:",
        await bundleDropModule.getMetadata(),
      );
  }
  catch(err){
     console.error("Failed",err)
  }
})()