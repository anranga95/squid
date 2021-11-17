import { metamask } from './connectors/metamask';
import { walletConnect } from './connectors/wallet-connect-qr';
import { useWeb3React } from '@web3-react/core';

import { Box, Text, Button, ButtonGroup, Menu, MenuIcon, MenuItem, MenuButton, MenuList, useColorMode } from '@chakra-ui/react';

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
      <Box border="1px" borderColor="gray.200" color="purple.500" p="5rem" textAlign="center">

        <Text as="b" fontSize="3xl"> GET YOUR PLAYER </Text>

        <Text fontSize="md"> Connect your wallet to mint your player card(s) </Text>
        <br/>

        <Menu>
          <MenuButton as={Button} colorScheme="purple">
            {active ? 'Welcome!' : 'Connect your Wallet'}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => connect('metamask')}>Metamask</MenuItem>
            <MenuItem onClick={() => connect('walletConnect')}>WalletConnect QR</MenuItem>
          </MenuList>
        </Menu>

        <Text color={textColor[colorMode]}>{active ? `Address: ${account}` : ''}</Text>
      </Box>
      </>
    )
}