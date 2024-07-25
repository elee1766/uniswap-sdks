import { MAINNET_CHAINS } from '@gfxlabs/oku-chains'
import { BigNumber } from 'ethers'

type ChainConfig = {
  router: string
  creationBlock: number
  permit2?: string
  weth: string
}

const WETH_NOT_SUPPORTED_ON_CHAIN = '0x0000000000000000000000000000000000000000'

const CHAIN_CONFIGS: { [key: number]: ChainConfig } = {}
MAINNET_CHAINS.forEach((chain) => {
  if (!chain.uniswap.universalRouter) return
  if (!chain.uniswap.deployBlock) return
  CHAIN_CONFIGS[chain.id] = {
    router: chain.uniswap.universalRouter,
    creationBlock: chain.uniswap.deployBlock,
    weth: chain.contracts.weth9.address,
    permit2: (chain.uniswap as { permit2?: string }).permit2,
  }
})

export const UNIVERSAL_ROUTER_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return CHAIN_CONFIGS[chainId].router
}

export const UNIVERSAL_ROUTER_CREATION_BLOCK = (chainId: number): number => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)
  return CHAIN_CONFIGS[chainId].creationBlock
}

export const WETH_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) throw new Error(`Universal Router not deployed on chain ${chainId}`)

  if (CHAIN_CONFIGS[chainId].weth == WETH_NOT_SUPPORTED_ON_CHAIN) throw new Error(`Chain ${chainId} does not have WETH`)

  return CHAIN_CONFIGS[chainId].weth
}

export const RESOLVE_PERMIT2_ADDRESS = (chainId: number): string => {
  if (!(chainId in CHAIN_CONFIGS)) return PERMIT2_ADDRESS
  if (CHAIN_CONFIGS[chainId].permit2 === undefined) return PERMIT2_ADDRESS
  return CHAIN_CONFIGS[chainId].permit2!
}

export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export const CONTRACT_BALANCE = BigNumber.from(2).pow(255)
export const ETH_ADDRESS = '0x0000000000000000000000000000000000000000'
export const E_ETH_ADDRESS = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee'
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'
export const MAX_UINT256 = BigNumber.from(2).pow(256).sub(1)
export const MAX_UINT160 = BigNumber.from(2).pow(160).sub(1)

export const SENDER_AS_RECIPIENT = '0x0000000000000000000000000000000000000001'
export const ROUTER_AS_RECIPIENT = '0x0000000000000000000000000000000000000002'

export const OPENSEA_CONDUIT_SPENDER_ID = 0
export const SUDOSWAP_SPENDER_ID = 1
