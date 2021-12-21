import React from "react";
import { ThirdwebWeb3Provider } from '@3rdweb/hooks';
import { useWeb3 } from "@3rdweb/hooks";

function App(){
  const supportedChainIds = [4]
  const connectors = {
  injected: {},
};
 const { connectWallet, address, error, provider } = useWeb3();
  console.log("👋 Address:", address)
  return (
    <div className="landing">
    <ThirdwebWeb3Provider 
    connectors = {connectors}
    supportedChainIds = {supportedChainIds}
    >{
     address
     ?
      <h1>👀 wallet connected, now what!</h1>
     :
     <><h1>Welcome to Point Blank</h1>
     <button onClick={() => connectWallet("injected")} className="btn-hero"> Connect your wallet</button></>
    }
    
        </ThirdwebWeb3Provider >
    </div>
  );
};

export default App;
