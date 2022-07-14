import { ethers } from "hardhat";
import { upgradeAllContracts, getContractAddresses } from "./upgrade-all";

(async () => {
  const chainId = (await ethers.provider.getNetwork()).chainId;
  console.log(`Upgrading contracts on chain ${chainId}`);
  const contracts = await getContractAddresses(process.env.LOCAL_API_URL as string, chainId);
  console.log(`Contracts: ${JSON.stringify(contracts, null, 2)}`);
  await upgradeAllContracts(contracts);
})();
