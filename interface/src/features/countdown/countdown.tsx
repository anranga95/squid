import Countdown from 'react-countdown';
import { Text } from '@chakra-ui/react';

export const CountDown = () => {
    return (
        <>
        <Text>The game begins in </Text>
        <Countdown date={Date.now() + 10000000} />
        </>
    )
}