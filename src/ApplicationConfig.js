export default {
    arbitrumRpc: 'https://arbitrum-mainnet.infura.io/v3/4a299cdad2594043aa7523d2399e7035',
    etherumRpc: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
    firstRebaseTime: 'Mar 11 2022',
    defaultChain:{
        id: 42161,
        code:'0xa4b1',
        name: 'Arbitrum Mainnet',
        rpcUrl: 'https://arbitrum-mainnet.infura.io/v3/4a299cdad2594043aa7523d2399e7035',
        nativeCurrency: {
            name: 'Arbitrum ETH',
            symbol: 'ETH',
            decimals: 18,
        },
        blockExplorerUrls: ['https://arbiscan.io/'],
        provider: 'https://arbitrum-mainnet.infura.io/v3/4a299cdad2594043aa7523d2399e7035',
        partnerChainID: 1,
    },
    defaultChainForSwap: {
        id: 1,
        code: '0x1',
        name: 'Ethereum Mainnet',
        rpcUrl: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        nativeCurrency: {
            name: 'ETH',
            symbol: 'ETH',
            decimals: 18,
        },
        blockExplorerUrls: ['https://etherscan.io'],
        provider: 'https://mainnet.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
        partnerChainID: 42161,
    },
}