export type Chain = {
  chainId: number
  chainName: string
  isTestChain: boolean
  isLocalChain: boolean
  multicallAddress: string
  rpcUrl?: string
  blockExplorerUrl?: string
  nativeCurrency?: {
    name: string
    symbol: string
    decimals: number
  }
  getExplorerAddressLink: (address: string) => string
  getExplorerTransactionLink: (address: string) => string
}
