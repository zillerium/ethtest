// wagmiConfig.js
import { alchemyProvider } from '@wagmi/core/providers/alchemy';
import { publicProvider } from '@wagmi/core/providers/public';
import { InjectedConnector } from '@wagmi/core/connectors/injected';

import { createWalletClient, createConfig, configureChains } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { goerli } from 'wagmi/chains';

//import { chain, configureChains } from 'wagmi'
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [goerli],
  [publicProvider()],
);

const config = createConfig({
  autoConnect: false,
  chains,
  publicClient,
  webSocketPublicClient,
  connectors: [new MetaMaskConnector()],
});
//const { chains, publicClient, webSocketPublicClient } = configureChains(
//  [mainnet],
//  [publicProvider()],
//)
/*
const { chains, publicClient } = configureChains(
  [mainnet, goerli, polygon],
  [publicProvider()],
)

//const { chains, publicClient } = configureChains(
//  [goerli],
//  ...
//)

const config = createConfig({
  autoConnect: true,
  publicClient,
});
*/
export default config;

