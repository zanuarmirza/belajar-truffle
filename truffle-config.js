require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { MUMBAI_API_URL, PRIVATE_KEY } = process.env;
module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks.
  // See details at: https://trufflesuite.com/docs/truffle/reference/configuration
  // on how to specify configuration options!
  //
  networks: {
    mumbai: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, MUMBAI_API_URL),
      network_id: 80001,
      gas: 5500000,
    },
     development: {
      host: "172.20.80.1",
      port: 7545,
      network_id: 5777,
    },
  },
  compilers:{
    solc:{
      version:"^0.8.0"
    }
  }
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};
