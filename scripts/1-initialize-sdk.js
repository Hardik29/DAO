import {ThirdwebSDK} from "@3rdweb/sdk";
import ethers from "ethers";
import dotenv from "dotenv";


dotenv.config();

if(!process.env.PRIVATE_KEY ||  process.env.PRIVATE_KEY==" "){
   console.log("🛑 Private key not found.")
}
if(!process.env.WALLET_ADDRESS ||  process.env.WALLET_ADDRESS==" "){
    console.log("🛑 WALLET ADDRESS not found.")
 }
 if(!process.env.ALCHEMY_API_URL ||  process.env.ALCHEMY_API_URL==" "){
    console.log("🛑 ALCHEMY API URL not found.")
 }


 const sdk = new ThirdwebSDK(
    new ethers.Wallet(
       process.env.PRIVATE_KEY,
       ethers.getDefaultProvider(process.env.ALCHEMY_API_URL)
    ),
 );

 (
     async () => {
         try{
             const app = await sdk.getApps();
             console.log("Your app adress is",app[0].address)
         }
         catch(err){
            console.error("app not build",err);
            process.exit(1);
         }
     }
 )() 

 export default sdk;