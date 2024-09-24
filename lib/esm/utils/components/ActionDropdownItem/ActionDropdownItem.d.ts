import { Dispatch, FC, SetStateAction } from 'react';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
import './action-dropdown-item.scss';
declare type ActionDropdownItemProps = {
    action: Action;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};
declare const ActionDropdownItem: FC<ActionDropdownItemProps>;
export default ActionDropdownItem;
