import { useAppKitAccount, useAppKitProvider } from "@reown/appkit/react";
import { BrowserProvider, Eip1193Provider } from "ethers";
import { useCallback, useEffect } from "react";

export const Page = () => {

  const { address, isConnected } = useAppKitAccount();
  const { walletProvider } = useAppKitProvider('eip155');


  const signSomething = useCallback(async (walletProvider: Eip1193Provider) => {
    if ( address && walletProvider ) {
      // const provider = new BrowserProvider(walletProvider);
      // const signer = new JsonRpcSigner(provider, address);
      // const signature = await signer.signMessage("Sign in at UTU");

      // const addressCalledDirect = await walletProvider.request({ method: "eth_accounts" });
      // console.log(`addressCalledDirect: ${addressCalledDirect}`);

      const provider = new BrowserProvider(walletProvider as Eip1193Provider) 
      console.log('provider:', provider);

      const signer = await provider.getSigner();
      console.log('signer:', signer);

      const address = await signer.getAddress();
      console.log('addresss', address);

      const signature = await signer.signMessage("Sign This");
      console.log('signature', signature);
      
    }
  }, [address]);

  useEffect(() => {
    if ( walletProvider && address && isConnected ) {

      signSomething(walletProvider as Eip1193Provider);
    }
  }, [address,  walletProvider, isConnected]);

  return (
    <div>
      <appkit-button label='Login / Connect'/>
    </div>
  );
}