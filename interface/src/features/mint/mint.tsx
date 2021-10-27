import { ethers } from "ethers";
import { useEffect, useState } from "react"
import { useWeb3React } from "@web3-react/core";
import { useGreeterContract } from "../../contracts/useContract";

import { Text, Button, Box } from "@chakra-ui/react";

export const Mint = () => {
    const [totalSupply, setTotalSupply] = useState(0);
    const [userBalance, setUserBalance] = useState(0);
    const [userTokenIds, setUserTokenIds] = useState([]);
    const { account, active } = useWeb3React();
    const instance = useGreeterContract(active);

    useEffect(() => {
        if(!instance) return;
        getTotalSupply();
    }, [instance]);

    useEffect(() => {
        if(!account) return
        getUserTokenCount();
    }, [account]);

    const getTotalSupply = async () => {
        try {
            const result = await instance.totalSupply();
            setTotalSupply(result.toNumber())
        } catch (e) {
            console.error(e);
        }
    }

    const getUserTokenCount = async () => {
        try {
            const result = await instance.balanceOf(account);
            setUserBalance(result.toNumber())

        } catch (e) {
            console.error(e);
        }
    }

    const getUserTokenIds = async () => {
        try {
            const result = await instance.tokensOfOwner(account);
            const mappedIds = result.map(x => x.toNumber());
            setUserTokenIds(mappedIds);
        } catch (e) {
            console.error(e);
        }
    }

    const mintToken = async () => {
        try {
            const tx = await instance.createCard();
            await tx.wait();
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
        {active && account && <Text>You have {userBalance} cards</Text>}
        {active && userBalance > 0 && !userTokenIds.length && 
            <Box as="button" onClick={getUserTokenIds}>Click to see Ids</Box>}
        <br/>
        {active && userBalance > 0 && userTokenIds.length > 0 && <Text>{JSON.stringify(userTokenIds)}</Text>}
        <br/>
        {instance && <Text>There are {totalSupply} cards remaining</Text>}
        <br/>
        {instance && account && <Button colorScheme="purple" size="lg" onClick={mintToken}>Mint</Button>}
        </>
    )
}