import { ChainId } from '@uniswap/sdk-core'

export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

// @deprecated please use poolInitCodeHash(chainId: ChainId)
export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'

export function poolInitCodeHash(chainId?: ChainId): string {
  switch (chainId) {
    case ChainId.ZKSYNC:
      return '0x010013f177ea1fcbc4520f9a3ca7cd2d1d77959e05aa66484027cb38e712aeed'
    default:
      return POOL_INIT_CODE_HASH
  }
}

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  ONE = 100,
  TWO = 200,
  THREE = 300,
  FOUR = 400,
  FIVE = 500,
  THIRTY = 3000,
  ONE_HUNDRED = 10000,
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.ONE]: 1,
  [FeeAmount.TWO]: 4,
  [FeeAmount.THREE]: 6,
  [FeeAmount.FOUR]: 8,
  [FeeAmount.FIVE]: 10,
  [FeeAmount.THIRTY]: 60,
  [FeeAmount.ONE_HUNDRED]: 200,
}
