export interface IDeployment {
    name: string;
    chainId: string;
    contracts
}

export interface IDeployedContract {
    [name: string]: {
        address: string;
        abi: any[];
    }
}