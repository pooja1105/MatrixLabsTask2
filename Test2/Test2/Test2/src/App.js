import React, { useState, useEffect } from "react";
import "./styles.css";

import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reports from "./pages/ToDoList";
import Dashboard from "./pages/Dashboard";
import Calculator from "./pages/Calculator";
import Swap from "./pages/Swap";
import ToDoList from "./pages/ToDoList";
import FAQ from "./pages/FAQ";

import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultWallets, RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { configureChains, createClient, WagmiConfig } from "wagmi";
import { bscTestnet } from "wagmi/chains";
import { publicProvider } from "wagmi/providers/public";

export default function App() {
  const [status, setStatus] = useState(false);
  console.log("congigure", configureChains);
  const { chains, provider } = configureChains(
    [bscTestnet],
    [publicProvider()]
  );

  console.log("chains", chains);
  console.log("provider", provider);
  const { connectors } = getDefaultWallets({
    appName: "My RainbowKit App",
    chains,
  });
  console.log("connectors", connectors);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors,
    provider,
  });

  return (
    <div className="App">
      <Router>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Navbar />
          </RainbowKitProvider>
        </WagmiConfig>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/calculator" component={Calculator} />
          <Route path="/swap" component={Swap} />
          <Route path="/todolist" component={ToDoList} />
          <Route path="/faq" component={FAQ} />
        </Switch>
      </Router>
    </div>
  );
}
