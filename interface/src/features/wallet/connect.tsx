import { metamask } from './connectors/metamask';
import { walletConnect } from './connectors/wallet-connect-qr';
import { useWeb3React } from '@web3-react/core';

import { Button, ButtonGroup, Menu, MenuIcon, MenuItem, MenuButton, MenuList, useColorMode, Text } from '@chakra-ui/react';

export const Connect = () => {
    const { active, account, library, connector, activate, deactivate } = useWeb3React();
    const { colorMode } = useColorMode()
    const textColor = { light: 'gray.700', dark: 'gray.50' };

    async function connect(provider: string) {
        try {
          let pro = provider === 'metamask' ? metamask : walletConnect;
          await activate(pro)
          
        } catch (ex) {
          console.log(ex)
        }
      }
    
      async function disconnect() {
        try {
          deactivate()
        } catch (ex) {
          console.log(ex)
        }
      }
    
    return (
      <>
      <Menu>
        <MenuButton as={Button} colorScheme="pink">
          {active ? 'Welcome!' : 'Connect Wallet'}
        </MenuButton>
        <MenuList>
          <MenuItem onClick={() => connect('metamask')}>Metamask</MenuItem>
          <MenuItem onClick={() => connect('walletConnect')}>WalletConnect QR</MenuItem>
        </MenuList>
      </Menu>

      <Text color={textColor[colorMode]}>{active ? `Address: ${account}` : ''}</Text>
      </>
    )
}