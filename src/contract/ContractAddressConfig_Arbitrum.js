const ContractAddressConfig_Arbitrum = {
    etherscan: 'https://arbiscan.io',
    uncirculatingTokenHoldersOnL1:[
        '0x2Fc8d8BCf4b2c0fc6594475E44c473AC3E844B6a',
        '0x483fE01ED80aB597e7941B5C925739A396555d27',
        '0xD95791bcab484C0552833cB558d18d4D3F198AF9',
        '0x8B65CE3b4Eaa8958346096C3a9303b73f2012aCc',
        '0xCD1B1ce6ce877a9315E73E2E4Ba3137228068A59',
        '0x4a692fD139259a5b94Cad7753E3C96350b7F2B9f',
        '0xc28c6970D8A345988e8335b1C229dEA3c802e0a6',
    ],
    uncirculatingTokenHoldersOnL2:[
        '0xc28c6970D8A345988e8335b1C229dEA3c802e0a6',
        // Farm Rewarders
        '0x1733c5bc884090C73D89303467461693c54Ba58B',
        '0x136C218Ff8E87eD68f851433685960819F06b1fE',
        '0x36033594EC23E0f0B187f767889Eb4C539F4aE03',
    ],
    asset: {
        SPA: '0x5575552988A3A80504bBaeB1311674fCFd40aD4B',
        VESPA: '0x2e2071180682Ce6C247B1eF93d382D509F5F6A17',
        WSPA: '',
        WETH: '',
        DAI: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
        USDT: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
        USDC: '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8',
        USDs: '0xD74f5255D557944cf7Dd0E45FF521520002D5748',
    },
    USDs: {
        VaultCore: '0xF783DD830A4650D2A8594423F123250652340E3f',
        VaultCoreLibrary: '0x0390C6c7c320e41fCe0e6F0b982D20A88660F473',
        Oracle: '0xf3f98086f7B61a32be4EdF8d8A4b964eC886BBcd',
        TwoPoolStrategy: {
            USDC: '0xbF82a3212e13b2d407D10f5107b5C8404dE7F403',
            USDT: '0xdc118F2F00812326Fe0De5c9c74c1c0c609d1eB4',
        }
    },
    USDs_arbUSDV2: {saddleWithdraw: '0xdca5b16a96f984ffb2a3022cff339eb049126101', usdsTokenAddress: '0xa815b134294580692482E321dD1A191aC1454192', contractAddress: '0x1e35ebF875f8A2185EDf22da02e7dBCa0F5558aB', poolAddress: '0x5dd186f8809147f96d3ffc4508f3c82694e58c9c', miniChef: '0x2069043d7556B1207a505eb459D18d908DF29b55'},

    VeSPA:{
        RewardDistribution: '0x2c07bc934974BbF413a4a4CeDA98713DCb8d9e16',
    },

    farms: {
        'SPA-USDs@Uniswap_1':{
            dex: {
                PositionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
                Pool: '0x08e0b47588e1aC22Bc0f8B4afAa017aAf273f85e',
            },
            stake: {
                // LP Vesting
                lock: '0x03b35477cFD400dEdfAc06f40422491500cbc663',
                // LP Staking
                withOutLock: '0xD0497F22e55bd457cDA2712379883C678e61c370',
            },
            initialBudget: '15000000000000000000000000',
            displayArr: ['SPA', 'USDs']
        },
        'SPA-USDs@Uniswap_2':{
            dex: {
                PositionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
                Pool: '0x08e0b47588e1aC22Bc0f8B4afAa017aAf273f85e',
            },
            stake: {
                // LP Vesting
                lock: '0xC0F0484a216AfF20E0ead1a1513cE40fe0AFe0fe',
                // LP Staking
                withOutLock: '0xB38629b476ECBB6eb2d767cB6b4CAD0b17B68944',
            },
            initialBudget: '15000000000000000000000000',
            displayArr: ['SPA', 'USDs']
        },
        'USDC-USDs@Uniswap_1':{
            dex: {
                PositionManager: '0xC36442b4a4522E871399CD717aBDD847Ab11FE88',
                Pool: '0x50450351517117Cb58189edBa6bbaD6284D45902',
            },
            stake: {
                // LP Vesting
                lock: '0x638d76763dE9492b609b0d8830D8F626C5933A4D',
                // LP Staking
                withOutLock: '0xb74401CE681fC619c334a8DFD2e0CB99d5b9b4a4',
            },
            initialBudget: '10000000000000000000000000',
            displayArr: ['USDC', 'USDs']
        },
        'SPA_Optimizer_1': {
            stake: {
                lock: '0xc150cbdDC5932258fAc768bEB4d2352D127039fd',
            },
            initialBudget: '1000000000000000000000000',
        }
    },
};

export default ContractAddressConfig_Arbitrum;
