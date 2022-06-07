import axios from "axios";
import BigNumber from "bignumber.js";
import ContractConfig from "../contract/ContractConfig";
import ApplicationConfig from "../ApplicationConfig";
import moment from "moment";
import Web3 from "web3";

export const loadAPYFromSubgraph = () => {
    let url = 'https://api.thegraph.com/subgraphs/name/sperax/sperax-usd';
    let query = {
        query: `{
  rebaseEvents(first: 100, orderBy: blockNumber, orderDirection: desc) {
    id
    distributedUSDs
    blockNumber
    timeStamp
    timeStampUnix
  }
  usdsTotalSupplyRebaseEvents(first: 1, orderBy: blockNumber, orderDirection: desc) {
    id
    rebasingSupply
    totalSupply
    timeStamp
  }
}
`,
    };
    return new Promise((resolve, reject) => {
        axios
            .post(url, query)
            .then((response) => {
                let result = response.data.data;
                if (result.rebaseEvents.length > 1 && result.usdsTotalSupplyRebaseEvents.length > 0) {
                    let big = new BigNumber(result.rebaseEvents[0].distributedUSDs)
                    let dayBetween = (Number(result.rebaseEvents[0].timeStampUnix) - Number(result.rebaseEvents[1].timeStampUnix));
                    let apr = big.div(new BigNumber(result.usdsTotalSupplyRebaseEvents[0].rebasingSupply)).times(365).times(86400).div(dayBetween).toNumber();
                    let apy = ((Math.pow((1 + apr / (365 / 7)), (365 / 7)) - 1) * 100).toFixed(2);
                    return resolve(apy);
                }
            })
            .catch((e) => {
                return reject();
            });
    })
}

export const getTotalValueLocked = () => {
    let contractConfig = ContractConfig.USDs.VaultCore;
    let contractAddress = contractConfig.address();
    let contractAbi = contractConfig.abi;
    let contract = new window.web3.eth.Contract(contractAbi, contractAddress);

    return new Promise((resolve, reject) => {
        contract.methods
            .totalValueLocked()
            .call()
            .then((amount) => {
                resolve(valueToFormat(new BigNumber(amount), 18, 3))
            })
            .catch(error => {
                reject()
            })
    })
}


export const valueToFormat = (resultBigNumber, _showDecimals, showDecimals) => {
    const ROUND_DOWN = 1
    let valueFormat;
    if(resultBigNumber.toNumber() === 0){
        return;
    }

    let bigNumber = resultBigNumber.div(Math.pow(10, _showDecimals));

    let b = new BigNumber('1000000000');
    let m = new BigNumber('1000000');
    let k = new BigNumber('1000');
    let _k = new BigNumber('100000');

    if(bigNumber.comparedTo(b) >= 0){
        let _resultBigNumber=bigNumber.div(b).decimalPlaces(showDecimals, ROUND_DOWN);
        valueFormat=`${_resultBigNumber.toFormat(showDecimals)} B`;
        return valueFormat;
    }

    if(bigNumber.comparedTo(m) >= 0){
        let _resultBigNumber=bigNumber.div(m).decimalPlaces(showDecimals, ROUND_DOWN);
        valueFormat=`${_resultBigNumber.toFormat(showDecimals)} M`;
        return valueFormat;
    }

    if(bigNumber.comparedTo(_k) >= 0){
        let _resultBigNumber=bigNumber.div(k).decimalPlaces(showDecimals, ROUND_DOWN);
        valueFormat=`${_resultBigNumber.toFormat(showDecimals)} K`;
        return valueFormat;
    }

    return bigNumber.toFormat(_showDecimals);
}

export const getSPACirculatingSupplyByApI = () => {
    let getSpaCirculatingSupplyUrl=`https://app.sperax.io/sperax-token-stats-api/getSpaCirculatingSupply`;
    return new Promise((resolve, reject)=> {
        axios
            .get(getSpaCirculatingSupplyUrl)
            .then((response) => {
                // log.debug(`response:`);
                // log.debug(response.request.responseText);

                if (response && response.data) {
                    let data = response.data;
                    if(!data || isNaN(data)){
                        reject('Response is not a number!');
                    }
                    let spaSupply =  valueToFormat(new BigNumber(data), 0, 3)
                    console.log(`SpaCirculatingSupply: responseData => ${spaSupply}`);
                    resolve(spaSupply)
                }
            })
            .catch((e) => {
                reject(e);
            });
    })
}

export const getSPATotalSupplyByAPI =() => {
    let getSpaTotalSupplyUrl=`https://app.sperax.io/sperax-token-stats-api/getSpaTotalSupply`;
    return new Promise((resolve, reject) => {
        axios
            .get(getSpaTotalSupplyUrl)
            .then((response) => {
                if (response && response.data) {
                    let data = response.data;
                    if(!data || isNaN(data)){
                        reject('Response is not a number!');
                    }
                    let spaSupply =  valueToFormat(new BigNumber(data), 0, 3)
                    resolve(spaSupply)
                }
            })
            .catch((e) => {
                reject(e);
            });
    })
}

export const loadSPAPriceByOracle = (callback) => {
    let contractConfig = ContractConfig.USDs.Oracle;
    let contractAddress = contractConfig.address();
    let contractAbi = contractConfig.abi;
    let contract = new window.web3.eth.Contract(contractAbi, contractAddress);

    contract.methods
        .getSPAprice()
        .call()
        .then((price) => {
            contract.methods[`getSPAprice_prec`]
                .call(contract.methods)
                .call()
                .then((precision) => {
                    let p = new BigNumber(price);
                    let pReal = p.div(precision);
                    callback(pReal);
                });
        });
}

export const loadSPARewards =() => {
    let getSPARewardsUrl = `https://app.sperax.io/staking-api/sperax-dapp-staking-last-total-spa-rewards`;
    return new Promise((resolve, reject) => {
        axios
            .get(getSPARewardsUrl)
            .then((response) => {
                // log.debug(`response:`);
                // log.debug(response.request.responseText);
                if (response && response.data) {
                    let data = response.data;
                    if (!data || isNaN(data)) {
                        reject('Response is not a number!');
                    }
                    let lastTotalSPARewards = new BigNumber(data).toFixed(0)
                    loadLastRewardCheckpointTime(ApplicationConfig.defaultChain, (lastRewardCheckpointTime) => {
                        doLoadTotalVeSPAOnL1AndL2((total) => {
                            calculateAPY(365 * 4, lastTotalSPARewards, total, (APY) => {
                               resolve(APY.toFixed(2))
                            });

                        }, lastRewardCheckpointTime);
                    });
                }
            })
            .catch((e) => {
                console.error(e);
            });
    })
}

export const calculateAPY = (lockupInDays, lastTotalSPARewards, totalVeSPA, callback) => {
    let APR = calculateAPR(lockupInDays, lastTotalSPARewards, totalVeSPA);
    let APY = doCalculateARY(APR.toFixed(10));
    callback && callback(APY);
}

export const doCalculateARY = (APR) => {
    let weeksCountInYear = 52;
    let pr = new BigNumber(APR).div(weeksCountInYear);
    let APY = pr.plus(1).pow(weeksCountInYear).minus(1).times(100);
    console.debug(`calculateARY: APR => ${APR}, APY => ${APY.toFixed(10)}`);
    return APY;
}

export const  calculateAPR = (lockupInDays, lastTotalSPARewards, totalVeSPA) => {
    let lockupInWeeks = Math.floor(lockupInDays / 7);
    let bn = new BigNumber(lockupInWeeks).times(lastTotalSPARewards).div(totalVeSPA);
    return bn;
}

export const loadSPALocked = () => {
    return new Promise((resolve) => {
        doLoadSPALocked(ApplicationConfig.defaultChain, (lockedOnL2) => {
            doLoadSPALocked(ApplicationConfig.defaultChainForSwap, (lockedOnL1) => {
                let lockedOnL2Bn = new BigNumber(lockedOnL2),
                    lockedOnL1Bn = new BigNumber(lockedOnL1);
                let locked = lockedOnL1Bn.plus(lockedOnL2Bn);
               resolve(valueToFormat(locked, 18, 3))
            });
        });
    })
}

export const getSpaBurnt = () => {
    let contractConfig = ContractConfig.USDs.VaultCore;
    let contractAddress = contractConfig.address();
    let contractAbi = contractConfig.abi;

    let contract = new window.web3.eth.Contract(contractAbi, contractAddress);

    return new Promise((resolve, reject) => {
        contract.methods.SPAburnt.call(contract.methods)
            .call()
            .then((amount) => {
                resolve(valueToFormat(new BigNumber(amount), 18, 3))
            });
    })
}

export const   doLoadSPALocked = (chainConfig, callback) => {
    console.info(`load SPA locked on chain ${chainConfig.id} ...`);

    let contractConfig = ContractConfig.asset.getAsset('SPA');
    let contractAddress = contractConfig.address('SPA', chainConfig.id);
    let contractAbi = contractConfig.abi;

    let web3Obj = new Web3(chainConfig.rpcUrl);
    let contract = new web3Obj.eth.Contract(contractAbi, contractAddress);

    let veSPAAddress = ContractConfig.asset.getAsset('VESPA').address('VESPA', chainConfig.id);

    contract.methods.balanceOf
        .call(contract.methods, veSPAAddress)
        .call()
        .then((res) => {
            callback(res);
        });
}

export const loadSPABuyBack =() => {

    let contractConfig = ContractConfig.asset.getAsset('SPA');
    let contractAddress = contractConfig.address('SPA', ApplicationConfig.defaultChain.id);
    let contractAbi = contractConfig.abi;

    let web3Obj = new Web3(ApplicationConfig.defaultChain.rpcUrl);
    let contract = new web3Obj.eth.Contract(contractAbi, contractAddress);

    let spaBuyBackHolderAddress = '0xA61a0719e9714c95345e89a2f1C83Fae6f5745ef';

    return new Promise((resolve, reject) => {
        contract.methods.balanceOf
            .call(contract.methods, spaBuyBackHolderAddress)
            .call()
            .then((res) => {
                resolve(valueToFormat(new BigNumber(res), 18, 3));
            });
    })
}

export const loadLastRewardCheckpointTime = (config, callback) => {
    let contractConfig = ContractConfig.VeSPA.RewardDistribution;
    let contractAddress = contractConfig.address(config.id);

    if (!contractAddress) {
        return;
    }

    let contractAbi = contractConfig.abi;
    let contract = new window.web3.eth.Contract(contractAbi, contractAddress);

    contract.methods
        .lastRewardCheckpointTime()
        .call()
        .then((result) => {
            if (result) {
                let lastRewardCheckpointTime = Math.floor(result / 604800) * 604800;

                let date = moment(lastRewardCheckpointTime * 1000);
                let lastLastDistributionDate = date.add(-7, 'days').valueOf() / 1000;

                console.debug(
                    `lastRewardCheckpointTimeResponse => ${result}, lastLastDistributionDate => ${lastLastDistributionDate}`
                );
                callback && callback(lastLastDistributionDate);
            }
        })
        .catch((error) => {
            console.debug(error.message);
        });
}

export const doLoadTotalVeSPAOnL1AndL2 = (callback, timestamp) => {
    doLoadTotalVeSPA(
        ApplicationConfig.defaultChain,
        (totalOnL2) => {
            doLoadTotalVeSPA(
                ApplicationConfig.defaultChainForSwap,
                (totalOnL1) => {
                    let totalOnL2Bn = new BigNumber(totalOnL2),
                        totalOnL1Bn = new BigNumber(totalOnL1);
                    let total = totalOnL1Bn.plus(totalOnL2Bn).toFixed();
                    console.debug(`loadTotalVeSPA: total => ${total}`);
                    callback && callback(total);
                },
                timestamp
            );
        },
        timestamp
    );
}

export const doLoadTotalVeSPA = (chainConfig, callback, timestamp) => {
    let contractConfig = ContractConfig.asset.getAsset('VESPA');
    let contractAddress = contractConfig.address('VESPA', chainConfig.id);
    let contractAbi = contractConfig.abi;

    let web3Obj = new Web3(chainConfig.rpcUrl);
    let contract = new web3Obj.eth.Contract(contractAbi, contractAddress);

    if (timestamp) {
        contract.methods.totalSupply
            .call(contract.methods, timestamp)
            .call()
            .then((res) => {
                callback(res);
            });
    } else {
        contract.methods.totalSupply
            .call(contract.methods)
            .call()
            .then((res) => {
                callback(res);
            });
    }
}