require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include clinic tail sugar blame birth office pumpkin grace local equal gather'; 
let testAccounts = [
"0xdc75a7a3d2226d39f62b9d26cd668f0f5f329a3b5a5b64b75ba080db314a0fbe",
"0x7441495c4d6bb9741011c87d910ead2d6f5e3f819935b6e4607dd3dd087fe770",
"0x5f4c6f441ef92671b7446b08e516126c252a2d5ca932bbb106b84c13b634f674",
"0x9e971b541ae0b1e3c3cf9977f52edd05beb21ce4c20ccd8b28b758a5f85a041b",
"0x06c03e976f003d1c1bfc3a677e2f3b62e6dc9d70719c1bc0ff38d1c1fec98d57",
"0x4226a8827398017087d7c5c9ccd4307e99b5025f0dcbe9b68dc4031836e19dd5",
"0xd72cbee11cbb6318005fd6621ccfa14f343099705c86638c1ac0b9f8fdb44b5f",
"0x7e50280b22ae495cf177bf7065cccca73a7a3b1be52f4d43641700bbf79f9ec3",
"0x6a2c6e46aa16baba143badc70b24845198ae4c2621cedab6eb69a474cadb6f46",
"0x7ab4776b610c5fbf674c690f2ca86c671d44c53072fb1213d3aab363579731d4"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

