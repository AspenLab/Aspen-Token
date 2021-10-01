require("@nomiclabs/hardhat-etherscan");

const mnemonic =

    module.exports = {
        defaultNetwork: "mainnet",
        networks: {
            localhost: {
                url: "http://127.0.0.1:8545"
            },
            hardhat: {},
            testnet: {
                url: "https://data-seed-prebsc-1-s1.binance.org:8545",
                chainId: 97,
                gasPrice: 20000000000,
                accounts: { mnemonic: mnemonic }
            },
            mainnet: {
                url: "https://bsc-dataseed.binance.org/",
                chainId: 56,
                gasPrice: 20000000000,
                accounts: { mnemonic: mnemonic }
            }
        },
        etherscan: {
            // Your API key for Etherscan
            // Obtain one at https://etherscan.io/
            apiKey: "FCPNRJCUCCRPQG8VSMTK93WVZ1RQQYKIF3"
        },
        solidity: {
            version: "0.8.7",
            settings: {
                optimizer: {
                    enabled: true
                }
            }
        },
        paths: {
            sources: "./contracts",
            tests: "./test",
            cache: "./cache",
            artifacts: "./artifacts"
        },
        mocha: {
            timeout: 20000
        }
    };