require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom process olympic ten fire note pulse color good argue surge struggle'; 
let testAccounts = [
"0xfdc8a8657e1f3a062d183423e49d7859878d1363bf0d65f5815933b7c0966438",
"0x1822be70f48cdb651d1f51321c7c748e07126695e569992cedfe090840ef8dbb",
"0x2c2a8b1c907a556f5da5cc11a206c724d76b88de6b5f2c9ef6189518d4072066",
"0x2fd4a12c656f50a318bc62bdaf17cbc355f21e2ded0049d093c4dec4d7c6ada6",
"0xeeca78bb74013204dd56c9af98b188f2b673c53305fb8a5a2c5aaef4e11e94d3",
"0xe27a6ba2d426132dd8a581f9d79c049f9c8423f069780abd3391788f623eed81",
"0xcec20c7404b1a137ad16ef2ce4cce7552f581489694fa492e7822d2f0d86169d",
"0xb065682ca0fc320a53559da73f6c206d7ac5b3e21f0a744e6d6b943c4175c3a1",
"0x724e1003dfff2c4078e5d40ca7877826065ee0e423a60dee27a22d2a5ce53c78",
"0x11244ac68c9c7ebde9151873b1a3b25dc02f3147ed0969dbb070a856dd6a9fed"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
