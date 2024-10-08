import { FC, ReactNode } from 'react';
import './VirtualMachineDescriptionItem.scss';
declare type VirtualMachineDescriptionItemProps = {
    bodyContent?: ReactNode;
    breadcrumb?: string;
    className?: string;
    'data-test-id'?: string;
    descriptionData: any;
    descriptionHeader?: ReactNode;
    editOnTitleJustify?: boolean;
    isDisabled?: boolean;
    isEdit?: boolean;
    isPopover?: boolean;
    label?: ReactNode;
    messageOnDisabled?: string;
    moreInfoURL?: string;
    onEditClick?: () => void;
    showEditOnTitle?: boolean;
    subTitle?: string;
};
declare const VirtualMachineDescriptionItem: FC<VirtualMachineDescriptionItemProps>;
export default VirtualMachineDescriptionItem;
