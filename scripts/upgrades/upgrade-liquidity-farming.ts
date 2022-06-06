import { upgradeLiquidityFarming } from "./upgrade";
import { verifyImplementation } from "../helpers";
import { ethers } from "hardhat";

(async () => {
  const proxy = process.env.PROXY || "0x62A0521d3F3B75b70fA39926A0c63CBf819870a6";
  const [signer] = await ethers.getSigners();
  console.log("Proxy: ", proxy, " Deployer: ", signer.address);
  console.log("Upgrading Proxy...");
  await upgradeLiquidityFarming(proxy);
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await verifyImplementation(proxy);
})();
