import { FC } from 'react';
import { InterfacesData } from './utils/types';
declare type VirtualMachinesOverviewTabNetworkInterfacesProps = {
    activeColumnIDs: Set<string>;
    obj: InterfacesData;
};
declare const VirtualMachinesOverviewTabInterfacesRow: FC<VirtualMachinesOverviewTabNetworkInterfacesProps>;
export default VirtualMachinesOverviewTabInterfacesRow;
