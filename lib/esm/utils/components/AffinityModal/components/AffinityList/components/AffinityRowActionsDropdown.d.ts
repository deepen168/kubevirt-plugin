import { FC } from 'react';
import { AffinityRowData } from '../../../utils/types';
declare type AffinityRowActionsDropdownProps = {
    affinity: AffinityRowData;
    onDelete: (affinity: AffinityRowData) => void;
    onEdit: (affinity: AffinityRowData) => void;
};
declare const AffinityRowActionsDropdown: FC<AffinityRowActionsDropdownProps>;
export default AffinityRowActionsDropdown;
