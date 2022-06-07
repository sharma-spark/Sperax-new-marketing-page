const USDs_VaultCoreLibrary_abi = [
    {
        "inputs": [],
        "name": "BancorInstance",
        "outputs": [
            {
                "internalType": "contract BancorFormula",
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
                "name": "valueType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "USDsAmt",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_VaultCoreContract",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "swapFee",
                "type": "uint256"
            }
        ],
        "name": "SPAAmountCalculator",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "SPABurnAmt",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "valueType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "valueAmt",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_VaultCoreContract",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "collaAddr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "swapFee",
                "type": "uint256"
            }
        ],
        "name": "USDsAmountCalculator",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "USDsAmt",
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
                "name": "_VaultCoreContract",
                "type": "address"
            }
        ],
        "name": "calculateSwapFeeIn",
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
                "name": "_VaultCoreContract",
                "type": "address"
            }
        ],
        "name": "calculateSwapFeeOut",
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
                "name": "_VaultCoreContract",
                "type": "address"
            }
        ],
        "name": "chiMint",
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
                "name": "_VaultCoreContract",
                "type": "address"
            }
        ],
        "name": "chiRedeem",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "chiRedeem_",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "blockPassed",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "priceUSDs",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "precisionUSDs",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_VaultCoreContract",
                "type": "address"
            }
        ],
        "name": "chiTarget",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "chiTarget_",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "valueType",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "USDsAmt",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_VaultCoreContract",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "collaAddr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "swapFee",
                "type": "uint256"
            }
        ],
        "name": "collaDeptAmountCalculator",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "collaDeptAmt",
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
                "name": "_BancorFormulaAddr",
                "type": "address"
            }
        ],
        "name": "initialize",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "collaAddr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "valueAmt",
                "type": "uint256"
            },
            {
                "internalType": "uint8",
                "name": "valueType",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "_VaultCoreContract",
                "type": "address"
            }
        ],
        "name": "mintView",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "SPABurnAmt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "collaDeptAmt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "USDsAmt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "swapFeeAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "original",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "price",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "precision",
                "type": "uint256"
            }
        ],
        "name": "multiplier",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_collaAddr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "USDsAmt",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "_VaultCoreContract",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_oracleAddr",
                "type": "address"
            }
        ],
        "name": "redeemView",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "SPAMintAmt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "collaUnlockAmt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "USDsBurntAmt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "swapFeeAmount",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
export default USDs_VaultCoreLibrary_abi;
