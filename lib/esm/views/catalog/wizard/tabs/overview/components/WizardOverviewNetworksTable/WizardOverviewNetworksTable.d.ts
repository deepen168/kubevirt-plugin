import * as React from 'react';
import { V1Interface, V1Network } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const interfacesTypes: {
    bridge: string;
    masquerade: string;
    sriov: string;
};
export declare const WizardOverviewNetworksTable: React.FC<{
    interfaces: V1Interface[];
    isInlineGrid?: boolean;
    networks: V1Network[];
}>;
