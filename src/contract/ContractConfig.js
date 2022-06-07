/**
 * @Author: Sperax
 * @Date:   2021-06-17 15:43:43
 * @Last Modified by:   Sperax
 * @Last Modified time: 2021-07-12 21:05:43
 */
import SperaxToken_abi from './abi/SperaxToken_abi';
import ApplicationConfig from "../ApplicationConfig";
import ContractAddressConfig_Mainnet from './ContractAddressConfig_Mainnet';
import ContractAddressConfig_Arbitrum from "./ContractAddressConfig_Arbitrum";
import USDTToken_abi from './abi/USDTToken_abi';
import USDCToken_abi from "./abi/USDCToken_abi";
import USDs_VaultCore_abi from "./abi/USDs_VaultCore_abi";
import USDs_VaultCoreLibrary_abi from "./abi/USDs_VaultCoreLibrary_abi";
import USDsToken_abi from "./abi/USDsToken_abi";
import USDs_Oracle_abi from "./abi/USDs_Oracle_abi";
import VeSPARewardsDistribution_abi from "./abi/VeSPARewardsDistribution_abi";
import VeSPAToken_abi from "./abi/VeSPAToken_abi";


const ChainAddressMap = {
    0: {
        name: 'Mainnet',
        addressConfig: ContractAddressConfig_Mainnet,
    },
    1: {
        name: 'Mainnet',
        addressConfig: ContractAddressConfig_Mainnet,
    },
    42161: {
        name: 'Arbitrum',
        addressConfig: ContractAddressConfig_Arbitrum,
    },
};

const ContractConfig = {
    etherscan: () => {
        return (
            ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] && ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.etherscan
        );
    },
    uncirculatingTokenHoldersOnL1: () => {
        return (
            ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] && ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.uncirculatingTokenHoldersOnL1
        );
    },
    uncirculatingTokenHoldersOnL2: () => {
        return (
            ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] && ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.uncirculatingTokenHoldersOnL2
        );
    },
    asset: {
        /**
         * get asset config. e.g.:
         *      ContractConfig.asset.getAsset('SPA')
         *      ContractConfig.asset.getAsset('ETH-SPA@Uniswap')
         * @param name
         */
        getAsset: (name) => {
            if (name.indexOf('@') > 0) {
                let dexName = name.split('@')[1];
                return ContractConfig.asset[`LP_${dexName}`];
            } else {
                return ContractConfig.asset[name];
            }
        },
        VESPA: {
            name: 'VeSPA',
            decimals: 18,
            abi: VeSPAToken_abi,
            getCoinUrl: 'https://www.coingecko.com/en/coins/sperax#markets',
            address(asset, chainId) {
                return (
                    ChainAddressMap[chainId || window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[chainId || window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.asset
                        .VESPA
                );
            },
        },
        ETH: {
            name: 'ETHToken',
            decimals: 18,
            getCoinUrl: 'https://www.coingecko.com/en/coins/ethereum#markets',
        },
        SPA: {
            name: 'SperaxToken',
            decimals: 18,
            abi: SperaxToken_abi,
            coinLogo:'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0wIDE2QzAgNy4xNjM0NCA3LjE2MzQ0IDAgMTYgMFYwQzI0LjgzNjYgMCAzMiA3LjE2MzQ0IDMyIDE2VjE2QzMyIDI0LjgzNjYgMjQuODM2NiAzMiAxNiAzMlYzMkM3LjE2MzQ0IDMyIDAgMjQuODM2NiAwIDE2VjE2WiIgZmlsbD0idXJsKCNwYWludDBfbGluZWFyKSIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC4yMTQ1IDE3LjMxQzE3LjE1ODYgMTcuMzEgMTQuNjgyIDE0LjgzNDEgMTQuNjgyIDExLjc4MjNDMTQuNjgyIDEwLjE4NDUgMTMuMzkzMSA4Ljg4ODkyIDExLjc4NTUgOC44ODg5MkMxMC4xOTIzIDguODg4OTIgOC44ODg4OSAxMC4xODQ1IDguODg4ODkgMTEuNzgyM0M4Ljg4ODg5IDEzLjM4MDIgMTAuMTc3OCAxNC42NzU3IDExLjc4NTUgMTQuNjc1N0gxMS43OTk5QzE0Ljg0MTMgMTQuNjc1NyAxNy4zMDM1IDE3LjE1MTYgMTcuMzE3OSAyMC4yMDM0VjIwLjIxNzhDMTcuMzE3OSAyMS44MTU2IDE4LjYwNjkgMjMuMTExMSAyMC4yMTQ1IDIzLjExMTFDMjEuODIyMiAyMy4xMTExIDIzLjExMTEgMjEuODE1NiAyMy4xMTExIDIwLjIxNzhDMjMuMDk2NiAxOC42MDU1IDIxLjgwNzcgMTcuMzEgMjAuMjE0NSAxNy4zMVoiIGZpbGw9InVybCgjcGFpbnQxX2xpbmVhcikiLz4KICAgIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTEuOCAxNy4zMTAxQzEwLjIwNjggMTcuMzEwMSA4LjkwMzM4IDE4LjYwNTYgOC45MDMzOCAyMC4yMDM0QzguOTAzMzggMjEuODAxMyAxMC4xOTIzIDIzLjA5NjggMTEuOCAyMy4wOTY4QzEzLjQwNzYgMjMuMDk2OCAxNC42OTY2IDIxLjgwMTMgMTQuNjk2NiAyMC4yMDM0QzE0LjY4MjEgMTguNjA1NiAxMy4zOTMxIDE3LjMxMDEgMTEuOCAxNy4zMTAxWiIgZmlsbD0idXJsKCNwYWludDJfbGluZWFyKSIvPgogICAgPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yMC4yMTQ1IDguODg4OTJDMjEuODE0MyA4Ljg4ODkyIDIzLjExMTEgMTAuMTg0MyAyMy4xMTExIDExLjc4MjNDMjMuMTExMSAxMy4zODAzIDIxLjgxNDMgMTQuNjc1NyAyMC4yMTQ1IDE0LjY3NTdDMTguNjE0OCAxNC42NzU3IDE3LjMxNzkgMTMuMzgwMyAxNy4zMTc5IDExLjc4MjNDMTcuMzE3OSAxMC4xODQzIDE4LjYxNDggOC44ODg5MiAyMC4yMTQ1IDguODg4OTJaIiBmaWxsPSJ1cmwoI3BhaW50M19saW5lYXIpIi8+CiAgICA8ZGVmcz4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MF9saW5lYXIiIHgxPSIxNiIgeTE9IjAiIHgyPSIxNiIgeTI9IjMyIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CiAgICAgICAgICAgIDxzdG9wIHN0b3AtY29sb3I9IiMyRTJFMkUiLz4KICAgICAgICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDIwMzAzIi8+CiAgICAgICAgPC9saW5lYXJHcmFkaWVudD4KICAgICAgICA8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50MV9saW5lYXIiIHgxPSIxNiIgeTE9IjguODg4OTIiIHgyPSIxNiIgeTI9IjIzLjExMTEiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ2RDVDRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NUQ2RDAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhciIgeDE9IjExLjgiIHkxPSIxNy4zMTAxIiB4Mj0iMTEuOCIgeTI9IjIzLjA5NjgiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ2RDVDRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NUQ2RDAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgICAgIDxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQzX2xpbmVhciIgeDE9IjIwLjIxNDUiIHkxPSI4Ljg4ODkyIiB4Mj0iMjAuMjE0NSIgeTI9IjE0LjY3NTciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KICAgICAgICAgICAgPHN0b3Agc3RvcC1jb2xvcj0iIzQ2RDVDRiIvPgogICAgICAgICAgICA8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM0NUQ2RDAiLz4KICAgICAgICA8L2xpbmVhckdyYWRpZW50PgogICAgPC9kZWZzPgo8L3N2Zz4K',
            getCoinUrl: 'https://www.coingecko.com/en/coins/sperax#markets',
            address(asset, chainId) {
                return (
                    ChainAddressMap[chainId || window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[chainId || window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.asset.SPA
                );
            },
        },
        USDT: {
            name: 'USDT',
            decimals: 6,
            abi: USDTToken_abi,
            increaseAllowanceMethod: 'approve',
            isStableCoin:true,
            getCoinUrl: 'https://www.coingecko.com/en/coins/tether#markets',
            address() {
                return (
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.asset.USDT
                );
            },
        },
        USDC: {
            name: 'USDC',
            decimals: 6,
            abi: USDCToken_abi,
            increaseAllowanceMethod: 'approve',
            isStableCoin:true,
            getCoinUrl: 'https://www.coingecko.com/en/coins/usd-coin#markets',
            address() {
                return (
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.asset.USDC
                );
            },
        },
        USDs: {
            name: 'USDs',
            decimals: 18,
            abi: USDsToken_abi,
            increaseAllowanceMethod: 'approve',
            isStableCoin:true,
            coinLogo:'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik00OCAyMy45OTk2QzQ4IDMwLjM2NDkgNDUuNDcxNCAzNi40Njk1IDQwLjk3MDQgNDAuOTcwNEMzNi40Njk1IDQ1LjQ3MTQgMzAuMzY0OSA0OCAyMy45OTk2IDQ4QzE3LjYzNDYgNDcuOTk5OCAxMS41MzAzIDQ1LjQ3MTIgNy4wMjk1NiA0MC45NzA0QzIuNTI4ODEgMzYuNDY5NyAwLjAwMDIxODk1OSAzMC4zNjU0IDAgMjQuMDAwNEMtMy43NjYzMWUtMDkgMTcuNjM1MyAyLjUyODUgMTEuNTMwOCA3LjAyOTI3IDcuMDI5ODVDMTEuNTMgMi41Mjg5MyAxNy42MzQ0IDAuMDAwMjE4OTY3IDIzLjk5OTYgMEMzMC4zNjQ3IC0zLjc2NjMzZS0wOSAzNi40NjkyIDIuNTI4NDkgNDAuOTcwMSA3LjAyOTI3QzQ1LjQ3MTEgMTEuNTMgNDcuOTk5OCAxNy42MzQ0IDQ4IDIzLjk5OTZaIiBmaWxsPSIjMTExQzIzIi8+CiAgICA8cGF0aCBkPSJNMjcuMjgyNCAzOS4yMDY5QzI3LjA5OTIgMzkuMjA3IDI2LjkyMTggMzkuMTQyNyAyNi43ODEyIDM5LjAyNTJDMjYuNjkzMyAzOC45NTE5IDI2LjYyMjYgMzguODYwMSAyNi41NzQxIDM4Ljc1NjNDMjYuNTI1NiAzOC42NTI2IDI2LjUwMDUgMzguNTM5NSAyNi41MDA1IDM4LjQyNVYzMS45NzAyQzI2LjUwMDYgMzEuNzg3IDI2LjU2NDkgMzEuNjA5NyAyNi42ODIzIDMxLjQ2OTFDMjYuNzk5NyAzMS4zMjg1IDI2Ljk2MjYgMzEuMjMzNSAyNy4xNDI4IDMxLjIwMDdDMjguOTE2MyAzMC44NzU4IDMwLjU1MTEgMzAuMDI1MiAzMS44MzQ5IDI4Ljc1OTNDMzIuMDg4NCAyOC41MDY1IDMyLjMyNCAyOC4yMzY0IDMyLjU0IDI3Ljk1MUMzMC4yOTU5IDI1LjcxNTIgMjcuNzEzMyAyNi42Nzg3IDI0LjcyMjkgMjcuNzkzM0wyMy44MjQ2IDI4LjEyMzVDMjAuNzY5NyAyOS4yNjI5IDE3LjMwMjEgMzAuNTU0MiAxNC4zNDcxIDI3LjU5ODRDMTMuMzk1NiAyNi42MjYgMTIuNzk4MyAyNS4zNjIxIDEyLjY1MDkgMjQuMDA5NUMxMi41MDM2IDIyLjY1NyAxMi44MTQ4IDIxLjI5NDIgMTMuNTM0NyAyMC4xMzk2QzExLjkyNjMgMTcuNjM3MSAxMi40NzcgMTQuMjYxOSAxNS4wNjA1IDExLjY3NzdDMTYuNTY5NyAxMC4xODc4IDE4LjQ5MjIgOS4xODYzNCAyMC41NzgyIDguODAzNjdDMjAuNjkwOSA4Ljc4MzEzIDIwLjgwNjcgOC43ODc2NCAyMC45MTc0IDguODE2ODlDMjEuMDI4MSA4Ljg0NjE1IDIxLjEzMTEgOC44OTk0MSAyMS4yMTg5IDguOTcyOTJDMjEuMzA2OCA5LjA0NjI3IDIxLjM3NzUgOS4xMzgwNyAyMS40MjYgOS4yNDE3OUMyMS40NzQ2IDkuMzQ1NTIgMjEuNDk5NyA5LjQ1ODY1IDIxLjQ5OTYgOS41NzMxNlYxNi4wMzU0QzIxLjQ5OTUgMTYuMjE4NCAyMS40MzUzIDE2LjM5NTcgMjEuMzE4MSAxNi41MzYyQzIxLjIwMDkgMTYuNjc2OCAyMS4wMzgxIDE2Ljc3MTkgMjAuODU4MSAxNi44MDQ5QzE5LjA4NDYgMTcuMTI5OCAxNy40NDk4IDE3Ljk4MDQgMTYuMTY2IDE5LjI0NjNDMTUuOTEyNyAxOS40OTkzIDE1LjY3NzEgMTkuNzY5MyAxNS40NjA5IDIwLjA1NDZDMTcuNzA1IDIyLjI4OTYgMjAuMjg3NiAyMS4zMjY5IDIzLjI3OCAyMC4yMTE1TDI0LjE3NjMgMTkuODgxMkMyNy4yMzEyIDE4Ljc0MSAzMC42OTg4IDE3LjQ0OTcgMzMuNjUzOCAyMC40MDYzQzM0LjI1NzggMjEuMDA1MyAzNC43MjIgMjEuNzMwNCAzNS4wMTMyIDIyLjUyOTdDMzUuMzA0MyAyMy4zMjkgMzUuNDE1MyAyNC4xODI3IDM1LjMzODEgMjUuMDI5OUMzNS4yNDc4IDI2LjAyMjkgMzQuOTQ5NiAyNi45ODU4IDM0LjQ2MjkgMjcuODU2QzM2LjA3NDYgMzAuMzU1MiAzNS41MjYzIDMzLjczNDYgMzIuOTM3MSAzNi4zMjA1QzMxLjQyODYgMzcuODEgMjkuNTA3IDM4LjgxMTQgMjcuNDIxOSAzOS4xOTQ1QzI3LjM3NTYgMzkuMjAyOSAyNy4zMjg2IDM5LjIwNzEgMjcuMjgxNSAzOS4yMDY5SDI3LjI4MjRaTTI4LjA2MzQgMzIuNjAxOFYzNy40MzUxQzI5LjQ4NTIgMzcuMDIwMyAzMC43ODEgMzYuMjU3MiAzMS44MzMzIDM1LjIxNDlDMzMuNjQ5NyAzMy4zOTg1IDM0LjIyMzUgMzEuMTE3MyAzMy40NTczIDI5LjMwNUMzMy4yOTIyIDI5LjQ5NzEgMzMuMTE5NiAyOS42ODQ1IDMyLjkzOTYgMjkuODY3M0MzMS41OTEgMzEuMjAwOSAyOS45MDcxIDMyLjE0NTQgMjguMDY1OSAzMi42MDFMMjguMDYzNCAzMi42MDE4Wk0xNC42NDkzIDIxLjQzNTlDMTQuMjQ1NiAyMi4yNTkzIDE0LjEwNiAyMy4xODczIDE0LjI0OTYgMjQuMDkzMUMxNC4zOTMzIDI0Ljk5ODggMTQuODEzMSAyNS44MzgxIDE1LjQ1MTggMjYuNDk2MkMxNy42OTc1IDI4Ljc0MTkgMjAuMjgyNiAyNy43Nzc2IDIzLjI3NjQgMjYuNjYxM0wyNC4xNzQ3IDI2LjMzMTFDMjcuMTI4IDI1LjIzMDUgMzAuNDYxOSAyMy45ODc5IDMzLjM1IDI2LjU3MDVDMzMuNTgxNyAyNi4wNDExIDMzLjcyNTkgMjUuNDc3NiAzMy43NzY4IDI0LjkwMTlDMzMuODM0NCAyNC4yODA3IDMzLjc1MzkgMjMuNjU0NCAzMy41NDEgMjMuMDY3OEMzMy4zMjgyIDIyLjQ4MTMgMzIuOTg4NCAyMS45NDkyIDMyLjU0NTggMjEuNTA5NEMzMC4zMDAxIDE5LjI2MzYgMjcuNzE1IDIwLjIyOCAyNC43MjEyIDIxLjM0NDJMMjMuODIyOSAyMS42NzQ1QzIwLjg3MDUgMjIuNzc1MSAxNy41MzY1IDI0LjAxODUgMTQuNjQ4NSAyMS40MzY3TDE0LjY0OTMgMjEuNDM1OVpNMTkuOTMyNSAxMC41Njg5QzE4LjUxMDggMTAuOTgzOSAxNy4yMTUxIDExLjc0NjkgMTYuMTYyNyAxMi43ODlDMTQuMzQ2MyAxNC42MDU0IDEzLjc3MjUgMTYuODg1OCAxNC41Mzc4IDE4LjY5NzNDMTQuNzAzIDE4LjUwNjggMTQuODc2MSAxOC4zMTk3IDE1LjA1NzIgMTguMTM1OEMxNi40MDU5IDE2LjgwMTMgMTguMDkwNSAxNS44NTY0IDE5LjkzMjUgMTUuNDAxM1YxMC41Njg5WiIgZmlsbD0iIzAwRkZCOSIvPgo8L3N2Zz4K',
            address() {
                return (
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.asset.USDs
                );
            },
        },
    },

    USDs:{
        VaultCore: {
            name: 'VaultCore',
            abi: USDs_VaultCore_abi,
            decimals: 18,
            address() {
                return (
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.USDs.VaultCore
                );
            },
        },
        VaultCoreLibrary: {
            name: 'VaultCoreLibrary',
            abi: USDs_VaultCoreLibrary_abi,
            address() {
                return (
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.USDs.VaultCoreLibrary
                );
            },
        },
        Oracle: {
            name: 'Oracle',
            abi: USDs_Oracle_abi,
            address(asset, chainId) {
                return (
                    ChainAddressMap[chainId || window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[chainId || window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.USDs.Oracle
                );
            },
        },
    },
    VeSPA:{
        RewardDistribution: {
            name: 'Reward Distribution',
            abi: VeSPARewardsDistribution_abi,
            address(chainId) {
                return (
                    ChainAddressMap[chainId || window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id] &&
                    ChainAddressMap[chainId || window?.web3?.currentProvider?.networkVersion || ApplicationConfig.defaultChain.id].addressConfig.VeSPA.RewardDistribution
                );
            },
        },
    },
};

export default ContractConfig;
