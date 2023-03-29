
// import { Timer10Outlined, Window } from '@mui/icons-material';
import React, { useState , useEffect } from 'react'
const { ethers } = require("ethers");
const abi = require("./erc20.json");



export default function Dashboard() {
  const [accounts, setAccount] = useState("");
  const [chainID, setChainID] = useState("");
  const [contract, setContract] = useState("");
  const [total, setTotal] = useState("");
  const [bal, setBal] = useState("");




 
  const check =async ()=>{
    const [accounts] = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    setAccount(accounts); 
    const chainID1 = await window.ethereum.request({ method: "eth_chainId" });
    console.log("chainid", chainID1);
    setChainID(chainID1);
    let contractAddress = "0x54d8dD271186349fE250F7a3065258BD5090b134";
    setContract(contractAddress);
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const ERC20 = new ethers.Contract(contractAddress, abi, signer);
    const t1 = await ERC20.totalSupply()
    const user = localStorage.getItem("wallet")    
    const bal = await ERC20.balanceOf("0xc949C0d4b7D2535B2D34125E9bF7c1d8a38bB8fe");
    
    setTotal((t1/10**18).toString());
    setBal(bal.toString());
   
  } 
  
useEffect(() => {
  check();
}, []);


  return (

   <div style={{paddingLeft: "300px", paddingTop: "20px"}}>
   <h1>Wallet Address -  {accounts} </h1>
   <h1> Depolyed contract Address - {contract}</h1>
   {console.log(total)}
   <h1>Total supply - {total}</h1>
   <h1>MY BAL - {bal}</h1>
   <h1>Current Price - $ 0.5</h1>
   <h1> Market Volume (USD)- $4 M</h1>
   <h1>Token Burned- 3654</h1>
   <h1>Total Token Value- 354343$</h1>
 

   </div>

  )
}

