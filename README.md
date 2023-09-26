# Name Registry
This project is designed to store a person's name against an Ethereum wallet address. This is augmented by a profile image stored on IPFS and the IPFS address is stored with the name and Ethereum address.

Key functionality:
1. Register a name with optionally an IPFS image address for the profile image (must be for a connected wallet address)
2. Deregister a name (also for the connected wallet address)
3. Transfer the name to a new wallet address (receiver address must have no name against it), this also transfers the IPFS address
4. Add an image to IPFS (returns IPFS address)
5. Read the profile details of any address (name and IPFS address)

Wagmi (wagmi.sh) is used for the wallet connection, and the smart contract interactions.Wagmi is part of WalletConnect. Docs: https://wagmi.sh/react/getting-started 
This project also uses Next.js (https://nextjs.org/docs/getting-started/installation).

Infura is used for the IPFS storage (https://www.infura.io/). 

## Design Choices

1. WalletConnect was selected to provide the functionalities to wallets due to wagmi.
2. Nextjs was selected because it fits well with wagmi.
3. Infura was selected because it is well established for IPFS hosting.

## Challenges

1. The main challenge using Nextjs is ensuring the rendering is correct for components. Components can easily be rendered at the wrong time when a state changes and this can cause an infinite loop (which is stopped by Nextjs). The main approach taken to solve this was adding a state which indicated that an update was done.
2. The blockchain updates have a latency which means that when a UI action is completed, it can take some time for the update. This can mean the UI does not show the upadte immediately. Some event management from the solidity contract would help with this. 

# Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Contributing](#contributing)
4. [License](#license)

## Installation
This project needs environment variables as follows stored in .env.local in the root directory:
NEXT_PUBLIC_REACT_APP_PROJECT_ID=...
NEXT_PUBLIC_REACT_APP_INFURA_PROJECT_ID=...
NEXT_PUBLIC_REACT_APP_INFURA_API_KEY=...
NEXT_PUBLIC_REACT_APP_VAR=1

PROJECT_ID: via https://cloud.walletconnect.com/app

INFURA_PROJECT_ID: via https://www.infura.io/

INFURA_API_KEY: via https://www.infura.io/ 

git clone https://github.com/zillerium/ethtest
cd ethtest
add environmental vars
npm install

## Usage

npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Contributing

Fork and contribute or create a new branch

## Licence

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

