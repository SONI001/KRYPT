require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/F_YSgc06Wgx_Ik3gESY2GyhlSWfriI8j',
      accounts: ['fe3e3c4511740def26cbac0198056d1d0a409782700f99340c3618e3b0290a05'],
    },
  },
};