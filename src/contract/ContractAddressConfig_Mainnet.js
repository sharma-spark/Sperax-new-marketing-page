const ContractAddressConfig_Mainnet = {
    etherscan: 'https://etherscan.io',
    uncirculatingTokenHoldersOnL1:[],
    uncirculatingTokenHoldersOnL2:[],
    asset: {
        SPA: '0xB4A3B0Faf0Ab53df58001804DdA5Bfc6a3D59008',
        VESPA: '0xbF82a3212e13b2d407D10f5107b5C8404dE7F403',
        WSPA: '0x2a95FE4c7e64e09856989F9eA0b57B9AB5f770CB',
        WETH: '',
        DAI: '',
        USDT: '',
        USDC: '',
        USDs: '',
    },
    LM: {
        dex: {
            Uniswap: {
                Router: '',
            },
        },
        Spark: '',
    },
    USDs: {
        VaultCore: '',
        VaultCoreLibrary: '',
        Oracle: '',
        TwoPoolStrategy: {
            USDC: '',
            USDT: '',
        }
    },
    USDs_arbUSDV2: {contractAddress: '0x1e35ebF875f8A2185EDf22da02e7dBCa0F5558aB', poolAddress: '0xDCA5b16A96f984ffb2A3022cfF339eb049126101', miniChef: '0x2069043d7556B1207a505eb459D18d908DF29b55'},

    VeSPA:{
        RewardDistribution: '',
    },

    farms: {

    },
};

export default ContractAddressConfig_Mainnet;
