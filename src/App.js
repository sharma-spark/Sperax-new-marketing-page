import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js'
import Firstpage from './components/Firstpage/Firstpage.js'
import Investors from './components/Investors/Investors.js'
import Secondpage from './components/Secondpage/Secondpage.js'
import Thirdpage from './components/Thirdpage/Thirdpage.js'
import Web3 from 'web3';
import ApplicationConfig from "./ApplicationConfig";
import {
  getSpaBurnt,
  getSPACirculatingSupplyByApI, getSPATotalSupplyByAPI,
  getTotalValueLocked,
  loadAPYFromSubgraph, loadSPABuyBack, loadSPALocked, loadSPARewards
} from "./utils/uilts";
import BigNumber from "bignumber.js";
import {useEffect, useState} from "react";

function App() {

  const [apy, setApy] = useState();
  const [totalValueLocked, setTotalValueLocked] = useState();
  const [totalSupply, setTotalSupply] = useState();
  const [circulate, setCirculate] = useState();
  const [totalApy, setTotalApy] = useState('');
  const [buyBack, setBuyBack] = useState('');
  const [spaLocked, setSpaLocked] = useState('');
  const [burnt, setBurnt] = useState('');
  const [web3, setWeb3] = useState();

  useEffect(() => {
    let web3 = new Web3(ApplicationConfig.arbitrumRpc);
    window.web3 = web3;
    window.BigNumber = BigNumber;
    setWeb3(web3);
  }, [])

  useEffect(() => {
    if (!web3) return;

    loadAPYFromSubgraph().then(res => {
      setApy(res);
    })
    getTotalValueLocked().then(res => {
      setTotalValueLocked(res);
    })
    getSPACirculatingSupplyByApI().then(res => {
      setCirculate(res);
    })
    getSPATotalSupplyByAPI().then(res => {
      setTotalSupply(res);
    })
    loadSPARewards().then(res => {
      setTotalApy(res);
    })
    loadSPABuyBack().then(res => {
      setBuyBack(res);
      console.log(`SPA buyback => ${res}`);
    })
    loadSPALocked().then(res => {
      console.log('spa lock => ' + res)
      setSpaLocked(res);
    })
    getSpaBurnt().then(res => {
      console.log(`SPA burnt => ${res}`);
      setBurnt(res);
    })
  }, [web3])


  return (
    <Router>
    <Navbar/>
    <Firstpage/>
    <Investors/>
    <Secondpage apy={apy} totalValueLocked={totalValueLocked} totalApy={totalApy} circulate={circulate} totalSupply={totalSupply}/>
    <Thirdpage  burnt={burnt} locked={spaLocked} buyBack={buyBack}/>
    </Router>
  );
}

export default App;
