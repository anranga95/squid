import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Heading,
  SimpleGrid,
  Box,
  Divider
} from '@chakra-ui/react'
import { CheckCircleIcon, LinkIcon } from '@chakra-ui/icons'

import { Hero } from '../chakra-components/Hero'
import { Container } from '../chakra-components/Container'
import { Main } from '../chakra-components/Main'
import { DarkModeSwitch } from '../chakra-components/DarkModeSwitch'
import { CTA } from '../chakra-components/CTA'
import { Footer } from '../chakra-components/Footer'

import { Connect } from '../features/wallet/connect';
import { Prize } from '../features/prize/prize';
import { Players } from '../features/players/players';
import { Mint } from '../features/mint/mint'

const Index = () => (
  <Container>
    <Hero title='Crypto Squid Games'/>
    <br/><br/>
    <Connect />
    <br/>
    <br/>
    <Mint/>
    <br/>
    <Divider />    
    <br/>
    <Prize/>
    <Players />
    <br/>
    <Footer>
      <Text>🔺 🟦 🟣</Text>
      <br/><hr/>
      <DarkModeSwitch />
    </Footer>
    {/* <CTA /> */}
  </Container>
)

export default Index
