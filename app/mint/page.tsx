"use client";

import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

const CONTRACT_ADDRESS = "0x15545833cFCe7579D967D02A1183114d7e554889";

const ABI = [
  "function mintOracleVision() payable",
  "function MINT_PRICE() view returns (uint256)",
  "function name() view returns (string)"
];

function shortAddr(a?: string) {
  if (!a) return "";
  return `${a.slice(0,6)}...${a.slice(-4)}`;
}

export default function MintPage() {

  const [account,setAccount] = useState("");
  const [price,setPrice] = useState<bigint>(0n);
  const [status,setStatus] = useState("");
  const [busy,setBusy] = useState(false);

  useEffect(() => {
    if(!(window as any).ethereum) return;

    const eth = (window as any).ethereum;

    eth.request({method:"eth_accounts"}).then((a:string[])=>{
      if(a[0]) setAccount(a[0]);
    });

  },[]);

  async function connectWallet(){
    try{
      setBusy(true);
      const eth = (window as any).ethereum;

      const accs = await eth.request({
        method:"eth_requestAccounts"
      });

      setAccount(accs[0]);
      setStatus("Wallet connected");

    }catch(e:any){
      setStatus(e.message);
    }finally{
      setBusy(false);
    }
  }

  async function loadPrice(){
    try{
      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,provider);

      const p = await contract.MINT_PRICE();
      setPrice(p);

    }catch{
      setStatus("Could not load mint price");
    }
  }

  async function mint(){
    try{
      setBusy(true);

      const provider = new ethers.BrowserProvider((window as any).ethereum);
      const signer = await provider.getSigner();

      const contract = new ethers.Contract(CONTRACT_ADDRESS,ABI,signer);

      setStatus("Sending mint transaction...");

      const tx = await contract.mintOracleVision({
        value: price
      });

      await tx.wait();

      setStatus("Mint successful ✅");

    }catch(e:any){
      setStatus(e.message);
    }finally{
      setBusy(false);
    }
  }

  useEffect(()=>{
    if(account) loadPrice();
  },[account]);

  return (
    <main className="shell">
      <section className="card mintCard">

        <h1 className="title">OracleVision Mint</h1>

        <p className="sub">
          Contract Price: {price ? ethers.formatEther(price) : "..."} ETH
        </p>

        {!account ? (
          <button className="btn primary" onClick={connectWallet}>
            Connect MetaMask
          </button>
        ):(
          <>
            <p className="mono">Wallet: {shortAddr(account)}</p>

            <button
              className="btn primary big"
              disabled={busy}
              onClick={mint}
            >
              {busy ? "Processing..." : "Mint OracleVision"}
            </button>
          </>
        )}

        {status && <p className="status">{status}</p>}

      </section>
    </main>
  );
}
