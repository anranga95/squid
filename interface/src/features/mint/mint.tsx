import { ethers } from "ethers";
import { useEffect, useState } from "react"
import { useWeb3React } from "@web3-react/core";
import { useGreeterContract } from "../../contracts/useContract";

import { Text, Button, Box } from "@chakra-ui/react";

export const Mint = () => {
    const [startBlockNumber, setStartBlockNumber] = useState(0);
    const [totalSupply, setTotalSupply] = useState(0);
    const [userBalance, setUserBalance] = useState(0);
    const [userTokenIds, setUserTokenIds] = useState([]);
    const { account, active } = useWeb3React();
    const instance = useGreeterContract(active);

    useEffect(() => {
        if (instance) {
            getTotalSupply();
            updateStartBlockNumber();
        }
        if(instance && instance.signer) {
            setupListeners();
        }
    }, [instance]);
    
    useEffect(() => {
        if(!account) return
        getUserTokenCount();
    }, [account]);
 
    const updateStartBlockNumber = async () => {
        const startBlockNumber = await ethers.getDefaultProvider("http://localhost:8545").getBlockNumber();
        setStartBlockNumber(startBlockNumber);
    }

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
            const result = (await instance.balanceOf(account)).toNumber();
            setUserBalance(result);
            if(result > 0) {
                await getUserTokenIds();
            }
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

    const setupListeners = async () => {
        instance.on(instance.filters.NewCard(account), handleNewCard);

        const events = await instance.queryFilter(instance.filters.NewCard(account));
        console.log('past NewCard events from address', events);
    }

    const handleNewCard = (...args: any) => {
        console.log(args);
        const ev = args[2];
            if(ev.blockNumber > startBlockNumber) { // >= off local?
                const newId = args[1].toNumber();
                setUserTokenIds((arr) => [...arr, newId]);
                setUserBalance((value) => value + 1);
                setTotalSupply((value) => value - 1);
            }
    }

    return (
        <>
        {active && account && <Text>You have {userBalance} cards</Text>}
        {active && userBalance > 0 && userTokenIds.length > 0 && <Box as="button" onClick={getUserTokenIds}>{JSON.stringify(userTokenIds)}</Box>}
        <br/>
        {instance && <Text>There are {totalSupply} cards remaining</Text>}
        <br/>
        {instance && account && <Button colorScheme="purple" size="lg" onClick={mintToken}>Mint</Button>}
        </>
    )
}