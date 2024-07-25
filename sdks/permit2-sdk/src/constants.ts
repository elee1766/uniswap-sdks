import { BigNumber } from '@ethersproject/bignumber'
import { MAINNET_CHAINS } from '@gfxlabs/oku-chains'

// @deprecated please use permit2Address(chainId: number)
export const PERMIT2_ADDRESS = '0x000000000022D473030F116dDEE9F6B43aC78BA3'

export function permit2Address(chainId?: number): string {
  if (chainId === undefined) {
    return PERMIT2_ADDRESS
  }
  return (MAINNET_CHAINS[chainId].uniswap as { permit2?: string }).permit2 ?? PERMIT2_ADDRESS
}

export const MaxUint48 = BigNumber.from('0xffffffffffff')
export const MaxUint160 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffff')
export const MaxUint256 = BigNumber.from('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

// alias max types for their usages
// allowance transfer types
export const MaxAllowanceTransferAmount = MaxUint160
export const MaxAllowanceExpiration = MaxUint48
export const MaxOrderedNonce = MaxUint48

// signature transfer types
export const MaxSignatureTransferAmount = MaxUint256
export const MaxUnorderedNonce = MaxUint256
export const MaxSigDeadline = MaxUint256

export const InstantExpiration: BigNumber = BigNumber.from(0)
