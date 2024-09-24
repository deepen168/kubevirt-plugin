import React, { Dispatch, SetStateAction } from 'react';
declare type CheckupsNetworkFormNodes = {
    isNodesChecked: boolean;
    nodeSource: string;
    nodeTarget: string;
    setIsNodesChecked: Dispatch<SetStateAction<boolean>>;
    setNodeSource: Dispatch<SetStateAction<string>>;
    setNodeTarget: Dispatch<SetStateAction<string>>;
};
declare const CheckupsNetworkFormNodes: ({ isNodesChecked, nodeSource, nodeTarget, setIsNodesChecked, setNodeSource, setNodeTarget, }: {
    isNodesChecked: any;
    nodeSource: any;
    nodeTarget: any;
    setIsNodesChecked: any;
    setNodeSource: any;
    setNodeTarget: any;
}) => React.JSX.Element;
export default CheckupsNetworkFormNodes;
