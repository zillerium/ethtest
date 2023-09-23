// wagmiConfig.js
import { createConfig, mainnet, goerli } from 'wagmi'; // Adjust the import path
import { createPublicClient, http } from 'viem'; // Adjust the import path

const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const config = createConfig({
  autoConnect: true,
  publicClient,
  // Add other config options as needed based on the specific library
  // You may need to refer to the library's documentation for additional configuration.
});

export default config;

