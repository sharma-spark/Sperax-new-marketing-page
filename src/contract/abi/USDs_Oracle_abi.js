const USDs_Oracle_abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "previousOwner",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "OwnershipTransferred",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAddr",
                "type": "address"
            }
        ],
        "name": "USDsAddressUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "USDsInOutRatio",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "USDsOutflow_average",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "USDsInflow_average",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "timeStamp",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "USDsInOutRatioUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "oldAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "newAddr",
                "type": "address"
            }
        ],
        "name": "VaultAddressUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "_collateralAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "_supported",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "contract AggregatorV3Interface",
                "name": "_priceFeed",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "_price_prec",
                "type": "uint256"
            }
        ],
        "name": "collateralInfoChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "updatePeriod",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "movingAvgShortPeriod",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "movingAvgLongPeriod",
                "type": "uint32"
            }
        ],
        "name": "periodChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "SPAoracleQuoteTokenAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "USDsOracleQuoteTokenAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "USDsOraclePool",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "SPAoraclePool",
                "type": "address"
            }
        ],
        "name": "poolAddressesUpdated",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "FREQUENCY",
        "outputs": [
            {
                "internalType": "uint8",
                "name": "",
                "type": "uint8"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SPA_prec",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SPAaddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SPAoraclePool",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SPAoracleQuoteTokenAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "SPAprice_prec",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDC_prec",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDCaddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDCprice_prec",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDsAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDsInOutRatio",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDsInOutRatio_prec",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "USDsInflow",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDsOraclePool",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDsOracleQuoteTokenAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "name": "USDsOutflow",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDsPrice_prec",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "USDs_prec",
        "outputs": [
            {
                "internalType": "uint128",
                "name": "",
                "type": "uint128"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "VaultAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint32",
                "name": "_updatePeriod",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_movingAvgShortPeriod",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_movingAvgLongPeriod",
                "type": "uint32"
            }
        ],
        "name": "changePeriod",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collateralAddr",
                "type": "address"
            }
        ],
        "name": "getCollateralPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collateralAddr",
                "type": "address"
            }
        ],
        "name": "getCollateralPrice_prec",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSPAprice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getSPAprice_prec",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUSDCprice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUSDCprice_prec",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUSDsPrice",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUSDsPrice_average",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "getUSDsPrice_prec",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_priceFeedUSDC",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_SPAaddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_USDCaddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_chainlinkFlags",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "lastUpdateTime",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "movingAvgLongPeriod",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "movingAvgShortPeriod",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "owner",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "renounceOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "newOwner",
                "type": "address"
            }
        ],
        "name": "transferOwnership",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collateralAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_supported",
                "type": "bool"
            },
            {
                "internalType": "contract AggregatorV3Interface",
                "name": "_priceFeed",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "_price_prec",
                "type": "uint256"
            }
        ],
        "name": "updateCollateralInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "updateInOutRatio",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "updateNextIndex",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_SPAoracleQuoteTokenAddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_USDsOracleQuoteTokenAddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_USDsOraclePool",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_SPAoraclePool",
                "type": "address"
            }
        ],
        "name": "updateOraclePoolsAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "updatePeriod",
        "outputs": [
            {
                "internalType": "uint32",
                "name": "",
                "type": "uint32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_USDsAddr",
                "type": "address"
            }
        ],
        "name": "updateUSDsAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_VaultAddr",
                "type": "address"
            }
        ],
        "name": "updateVaultAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    }
];
export default USDs_Oracle_abi;
