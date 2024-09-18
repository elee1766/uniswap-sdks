import { Token } from './token'
import { MAINNET_CHAINS as chains } from '@gfxlabs/oku-chains'

export const CHAINS_LIST = Object.values(chains)
/**
 * Known WETH9 implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH9: { [chainId: number]: Token } = {}
for (const chain of CHAINS_LIST) {
  WETH9[chain.id] = new Token(
    chain.id,
    chain.uniswap.wrappedNativeAddress,
    chain.uniswap.wrappedNativeDecimals,
    chain.uniswap.wrappedNativeSymbol,
    chain.uniswap.wrappedNativeName,
  )
}
