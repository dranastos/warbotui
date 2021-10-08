const MicroMachines = artifacts.require("MicroMachines");
const MicroMachineManufacturingPlant = artifacts.require("MicroMachineManufacturingPlant");
const NanoMachine = artifacts.require("NanoMachine");
const WarBotStatsData = artifacts.require("WarBotStatsData");
const DicesiumBatteries = artifacts.require("DicesiumBatteries");
const WarbotStats = artifacts.require("WarbotStats");

module.exports = async function (deployer) {
  // await deployer.deploy(MicroMachines);
  // await deployer.deploy(MicroMachineManufacturingPlant);
  await deployer.deploy(WarbotStats);
};
