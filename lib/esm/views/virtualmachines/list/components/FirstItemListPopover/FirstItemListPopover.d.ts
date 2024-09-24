import { FC, ReactNode } from 'react';
import { IpAddresses } from '@virtualmachines/details/tabs/overview/components/VirtualMachinesOverviewTabNetworkInterfaces/utils/types';
declare type FirstItemListPopoverProps = {
    className?: string;
    headerContent?: ReactNode | string;
    includeCopyFirstItem?: boolean;
    items: IpAddresses;
};
declare const FirstItemListPopover: FC<FirstItemListPopoverProps>;
export default FirstItemListPopover;
