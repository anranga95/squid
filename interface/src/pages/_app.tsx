import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme'
import { AppProps } from 'next/app'

import { Web3ReactProvider } from '@web3-react/core';
import * as ethers from 'ethers';

function getLibrary(provider: any, connector: any) {
  return new ethers.providers.Web3Provider(provider)
}


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </Web3ReactProvider>

  )
}

export default MyApp
