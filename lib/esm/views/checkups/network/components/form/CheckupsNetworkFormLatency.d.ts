import { Dispatch, FC, SetStateAction } from 'react';
declare type CheckupsNetworkFormLatencyProps = {
    desiredLatency: string;
    isDesiredLatency: boolean;
    setDesiredLatency: Dispatch<SetStateAction<string>>;
    setIsDesiredLatency: Dispatch<SetStateAction<boolean>>;
};
declare const CheckupsNetworkFormLatency: FC<CheckupsNetworkFormLatencyProps>;
export default CheckupsNetworkFormLatency;
