import { Container, Text, Box, Table, Thead, Tbody, Tr, Td, Th, Center, useColorMode } from '@chakra-ui/react';

export const Players = () => {
    const { colorMode } = useColorMode()
    const textColor = { light: 'gray.50', dark: 'white' };
    return (
        <Box color={textColor[colorMode]} boxShadow="dark-lg" p="6" rounded="lg" bg="black" borderColor="white" border="3px">
            {/* <Center> */}
            <Text>15 Players Joined</Text>
            {/* </Center> */}
            <br/>
            <Table variant="simple">
                <Thead>
                <Tr>
                    <Th>Player Number</Th>
                    {/* <Th>Username</Th> */}
                    <Th>Address</Th>
                    </Tr>
                </Thead>
            <Tbody>
                <Tr>
                    <Td>501</Td>
                    {/* <Td>Jordan</Td> */}
                    <Td>0xab....28db</Td>
                </Tr>
                <Tr>
                    <Td>500</Td>
                    {/* <Td>Mig</Td> */}
                    <Td>0xab....28db</Td>
                </Tr>
                <Tr>
                    <Td>499</Td>
                    {/* <Td>Ranga</Td> */}
                    <Td>0xab....28db</Td>
                </Tr>
            </Tbody>
            </Table>
        </Box>
    )
}