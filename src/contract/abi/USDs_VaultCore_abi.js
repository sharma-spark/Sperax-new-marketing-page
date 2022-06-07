const USDs_VaultCore_abi = [
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bool",
                "name": "permission",
                "type": "bool"
            }
        ],
        "name": "AllocationPermssionChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "collateralAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "addded",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "defaultStrategyAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "allocationAllowed",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "allocatePercentage",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyBackAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "rebaseAllowed",
                "type": "bool"
            }
        ],
        "name": "CollateralAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "collateralAddr",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "depositStrategyAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "allocateAmount",
                "type": "uint256"
            }
        ],
        "name": "CollateralAllocated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "collateralAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "addded",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "defaultStrategyAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "allocationAllowed",
                "type": "bool"
            },
            {
                "indexed": false,
                "internalType": "uint8",
                "name": "allocatePercentage",
                "type": "uint8"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buyBackAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "rebaseAllowed",
                "type": "bool"
            }
        ],
        "name": "CollateralChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "CollateralPrice",
                "type": "uint256"
            }
        ],
        "name": "CollateralPrice",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bool",
                "name": "permission",
                "type": "bool"
            }
        ],
        "name": "MintRedeemPermssionChanged",
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
        "name": "OracleAddressUpdated",
        "type": "event"
    },
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
                "internalType": "uint256",
                "name": "_chiInit",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_chi_beta",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_chi_gamma",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_swapFee_p",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_swapFee_theta",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_swapFee_a",
                "type": "uint32"
            },
            {
                "indexed": false,
                "internalType": "uint32",
                "name": "_swapFee_A",
                "type": "uint32"
            }
        ],
        "name": "ParametersUpdated",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "oldSupply",
                "type": "uint256"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "newSupply",
                "type": "uint256"
            }
        ],
        "name": "Rebase",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "bool",
                "name": "permission",
                "type": "bool"
            }
        ],
        "name": "RebasePermssionChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "previousAdminRole",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "newAdminRole",
                "type": "bytes32"
            }
        ],
        "name": "RoleAdminChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleGranted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "account",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "address",
                "name": "sender",
                "type": "address"
            }
        ],
        "name": "RoleRevoked",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "SPAprice",
                "type": "uint256"
            }
        ],
        "name": "SPAprice",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "strategyAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "bool",
                "name": "added",
                "type": "bool"
            }
        ],
        "name": "StrategyAdded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "address",
                "name": "strategyAddr",
                "type": "address"
            },
            {
                "indexed": false,
                "internalType": "address",
                "name": "buybackAddr",
                "type": "address"
            }
        ],
        "name": "StrategyRwdBuyBackUpdateded",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "bool",
                "name": "swapfeeInAllowed",
                "type": "bool"
            },
            {
                "indexed": true,
                "internalType": "bool",
                "name": "swapfeeOutAllowed",
                "type": "bool"
            }
        ],
        "name": "SwapFeeInOutPermissionChanged",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalValueLocked",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalValueInVault",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "totalValueInStrategies",
                "type": "uint256"
            }
        ],
        "name": "TotalValueLocked",
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
                "indexed": true,
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "USDsAmt",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "collateralAmt",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "SPAsAmt",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "feeAmt",
                "type": "uint256"
            }
        ],
        "name": "USDsMinted",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "USDsPrice",
                "type": "uint256"
            }
        ],
        "name": "USDsPrice",
        "type": "event"
    },
    {
        "anonymous": false,
        "inputs": [
            {
                "indexed": true,
                "internalType": "address",
                "name": "wallet",
                "type": "address"
            },
            {
                "indexed": true,
                "internalType": "uint256",
                "name": "USDsAmt",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "collateralAmt",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "SPAsAmt",
                "type": "uint256"
            },
            {
                "indexed": false,
                "internalType": "uint256",
                "name": "feeAmt",
                "type": "uint256"
            }
        ],
        "name": "USDsRedeemed",
        "type": "event"
    },
    {
        "inputs": [],
        "name": "DEFAULT_ADMIN_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "REBASER_ROLE",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
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
        "name": "SPAburnt",
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
        "name": "SPAminted",
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
        "name": "SPAvault",
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
        "inputs": [
            {
                "internalType": "address",
                "name": "_collateralAddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_defaultStrategyAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_allocationAllowed",
                "type": "bool"
            },
            {
                "internalType": "uint8",
                "name": "_allocatePercentage",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "_buyBackAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_rebaseAllowed",
                "type": "bool"
            }
        ],
        "name": "addCollateral",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_strategyAddr",
                "type": "address"
            }
        ],
        "name": "addStrategy",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allocate",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "allocatePercentage_prec",
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
        "name": "allocationAllowed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "chiInit",
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
        "name": "chi_alpha",
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
        "name": "chi_alpha_prec",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "chi_beta",
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
        "name": "chi_beta_prec",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "chi_gamma",
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
        "name": "chi_gamma_prec",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "chi_prec",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "collateralRatio",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "ratio",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "collateralsInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "collateralAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "added",
                "type": "bool"
            },
            {
                "internalType": "address",
                "name": "defaultStrategyAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "allocationAllowed",
                "type": "bool"
            },
            {
                "internalType": "uint8",
                "name": "allocatePercentage",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "buyBackAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "rebaseAllowed",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "feeVault",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleAdmin",
        "outputs": [
            {
                "internalType": "bytes32",
                "name": "",
                "type": "bytes32"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "uint256",
                "name": "index",
                "type": "uint256"
            }
        ],
        "name": "getRoleMember",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            }
        ],
        "name": "getRoleMemberCount",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "grantRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "hasRole",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_SPAaddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_vaultCoreToolsAddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_feeVault",
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
                "name": "collateralAddr",
                "type": "address"
            },
            {
                "internalType": "uint256",
                "name": "collateralAmtToLock",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minUSDsMinted",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSPAburnt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "mintBySpecifyingCollateralAmt",
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
            },
            {
                "internalType": "uint256",
                "name": "SPAamtToBurn",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "minUSDsMinted",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxCollateralLocked",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "mintBySpecifyingSPAamt",
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
            },
            {
                "internalType": "uint256",
                "name": "USDsAmtToMint",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxCollateralLocked",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "maxSPAburnt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "mintBySpecifyingUSDsAmt",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "mintRedeemAllowed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "oracleAddr",
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
        "name": "rebase",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "rebaseAllowed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
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
            },
            {
                "internalType": "uint256",
                "name": "USDsAmt",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "slippageCollat",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "slippageSPA",
                "type": "uint256"
            },
            {
                "internalType": "uint256",
                "name": "deadline",
                "type": "uint256"
            }
        ],
        "name": "redeem",
        "outputs": [],
        "stateMutability": "nonpayable",
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
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "renounceRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bytes32",
                "name": "role",
                "type": "bytes32"
            },
            {
                "internalType": "address",
                "name": "account",
                "type": "address"
            }
        ],
        "name": "revokeRole",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "startBlockHeight",
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
                "name": "",
                "type": "address"
            }
        ],
        "name": "strategiesInfo",
        "outputs": [
            {
                "internalType": "address",
                "name": "strategyAddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "rewardTokenBuybackAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "added",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapFee_A",
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
        "name": "swapFee_A_prec",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapFee_a",
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
        "name": "swapFee_a_prec",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapFee_p",
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
        "name": "swapFee_p_prec",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapFee_prec",
        "outputs": [
            {
                "internalType": "uint64",
                "name": "",
                "type": "uint64"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapFee_theta",
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
        "name": "swapFee_theta_prec",
        "outputs": [
            {
                "internalType": "uint16",
                "name": "",
                "type": "uint16"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapfeeInAllowed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "swapfeeOutAllowed",
        "outputs": [
            {
                "internalType": "bool",
                "name": "",
                "type": "bool"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalValueInStrategies",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalValueInVault",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "value",
                "type": "uint256"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    },
    {
        "inputs": [],
        "name": "totalValueLocked",
        "outputs": [
            {
                "internalType": "uint256",
                "name": "value",
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
                "internalType": "bool",
                "name": "_allocationAllowed",
                "type": "bool"
            }
        ],
        "name": "updateAllocationPermission",
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
                "internalType": "address",
                "name": "_defaultStrategyAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_allocationAllowed",
                "type": "bool"
            },
            {
                "internalType": "uint8",
                "name": "_allocatePercentage",
                "type": "uint8"
            },
            {
                "internalType": "address",
                "name": "_buyBackAddr",
                "type": "address"
            },
            {
                "internalType": "bool",
                "name": "_rebaseAllowed",
                "type": "bool"
            }
        ],
        "name": "updateCollateralInfo",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_mintRedeemAllowed",
                "type": "bool"
            }
        ],
        "name": "updateMintBurnPermission",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_oracleAddr",
                "type": "address"
            }
        ],
        "name": "updateOracleAddress",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "uint256",
                "name": "_chiInit",
                "type": "uint256"
            },
            {
                "internalType": "uint32",
                "name": "_chi_beta",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_chi_gamma",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_swapFee_p",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_swapFee_theta",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_swapFee_a",
                "type": "uint32"
            },
            {
                "internalType": "uint32",
                "name": "_swapFee_A",
                "type": "uint32"
            }
        ],
        "name": "updateParameters",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_rebaseAllowed",
                "type": "bool"
            }
        ],
        "name": "updateRebasePermission",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "address",
                "name": "_strategyAddr",
                "type": "address"
            },
            {
                "internalType": "address",
                "name": "_buyBackAddr",
                "type": "address"
            }
        ],
        "name": "updateStrategyRwdBuybackAddr",
        "outputs": [],
        "stateMutability": "nonpayable",
        "type": "function"
    },
    {
        "inputs": [
            {
                "internalType": "bool",
                "name": "_swapfeeInAllowed",
                "type": "bool"
            },
            {
                "internalType": "bool",
                "name": "_swapfeeOutAllowed",
                "type": "bool"
            }
        ],
        "name": "updateSwapInOutFeePermission",
        "outputs": [],
        "stateMutability": "nonpayable",
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
        "inputs": [],
        "name": "vaultCoreToolsAddr",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "view",
        "type": "function"
    }
];
export default USDs_VaultCore_abi;
