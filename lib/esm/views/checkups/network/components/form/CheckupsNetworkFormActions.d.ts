import { FC } from 'react';
declare type CheckupsNetworkFormActionsProps = {
    desiredLatency: string;
    isNodesChecked: boolean;
    name: string;
    nodeSource: string;
    nodeTarget: string;
    sampleDuration: string;
    selectedNAD: string;
};
declare const CheckupsNetworkFormActions: FC<CheckupsNetworkFormActionsProps>;
export default CheckupsNetworkFormActions;
