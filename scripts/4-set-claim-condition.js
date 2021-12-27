import sdk from "./1-initialize-sdk.js";

const bundleDrop = sdk.getBundleDropModule(
    "0xd603Bcc8F99e582B6790012a090e8CE911Ee9f1e",
);
//wrapper acess smart contract on third web 
( async() => {
    try{
        const claimConitionFactory = bundleDrop.getClaimConditionFactory();
        //call the smart contract to claim 
        claimConitionFactory.newClaimPhase({
             startTime: new Date(), //mint kab start hoga
             maxQuantity: 50_000,   //litni quantity mint karni h
             maxQuantityPerTransaction: 1, // ek bar m kitna leng
        });
        await bundleDrop.setClaimCondition(0, claimConitionFactory),//0 id se mint karna erc1155 m aesa jpot ki mulitple log karsakte h ek hi id se mint
        console.log("✅ Sucessfully set claim condition on bundle drop:", bundleDrop.address);

    }
    catch(err){
        console.error("Failed to set claim condition", err);
    }
})()