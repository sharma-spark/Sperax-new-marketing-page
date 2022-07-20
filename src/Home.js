import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
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
import Banner from "./components/Banner/Banner";
import {getDiscordCount} from './socialapi/discordapi'
import {getTwittercount} from './socialapi/twitterapi'
import {getTelegramCount} from './socialapi/telegramapi.js'
import TopBanner from "./components/Firstpage/TopBanner/TopBanner";

const Home = () => {
    const [apy, setApy] = useState();
    const [totalValueLocked, setTotalValueLocked] = useState();
    const [totalSupply, setTotalSupply] = useState();
    const [circulate, setCirculate] = useState();
    const [totalApy, setTotalApy] = useState('');
    const [buyBack, setBuyBack] = useState('');
    const [spaLocked, setSpaLocked] = useState('');
    const [burnt, setBurnt] = useState('');
    const [web3, setWeb3] = useState();
    const [discordCount, setdiscordCount] = useState('');
    const [Twittercount, setTwittercount] = useState('');
    const [Telegramcount, setTelegramcount] = useState('');

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
        getSPATotalSupplyByAPI().then((res) => {
            setTotalSupply(res.spaSupply);
            setBurnt(res.burnt);
        })
        loadSPARewards().then(res => {
            setTotalApy(res);
            console.log(`totalApy=> ${res}`);
        })
        loadSPABuyBack().then(res => {
            setBuyBack(res);
            console.log(`SPA buyback => ${res}`);
        })
        loadSPALocked().then(res => {
            console.log('spa lock => ' + res)
            setSpaLocked(res);
        })
        getDiscordCount().then(res => {
            console.log('discord =>' + res)
            setdiscordCount(res);
        });
        getTwittercount().then(res => {
            console.log('twitter =>' + res)
            setTwittercount(res);
        });
        getTelegramCount().then(res => {
            console.log('telegram =>' + res)
            setTelegramcount(res);
        });

    }, [web3])

    return (
        <>
            <Navbar/>
            <TopBanner/>
            <Firstpage/>
            <Investors/>
            <Secondpage apy={apy} totalValueLocked={totalValueLocked} totalApy={totalApy} circulate={circulate}
                        totalSupply={totalSupply}/>
            <Thirdpage burnt={burnt} locked={spaLocked} buyBack={buyBack} discordCount={discordCount}
                       twittercount={Twittercount} telegramcount={Telegramcount}/>
            <Banner/>
        </>
    )
}

export default Home