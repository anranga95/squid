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
            await setupListeners();
            const tx = await instance.createCard();
            await tx.wait();
        } catch (e) {
            console.error(e);
        }
    }

    const setupListeners = async () => {
        const startBlockNumber = await ethers.getDefaultProvider("http://localhost:8545").getBlockNumber();
        instance.on(instance.filters.NewCard(account), (...args) => {
            const ev = args[2];
            if(ev.blockNumber > startBlockNumber) { // >= off local?
                const newId = args[1].toNumber();
                const alreadyIn = userTokenIds.find(x => x == newId);
                if(!alreadyIn) {
                    setUserTokenIds((arr) => [...arr, newId]);
                    setUserBalance(userBalance + 1);
                    setTotalSupply(totalSupply - 1);
                }
            }
        })

        const events = await instance.queryFilter(instance.filters.NewCard(account));
        console.log('events', events);
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