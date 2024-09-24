import { Dispatch, FC, SetStateAction } from 'react';
import { InstanceTypes } from '@catalog/CreateFromInstanceTypes/state/utils/types';
declare type UserInstanceTypeMenuProps = {
    allInstanceTypes: InstanceTypes;
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
};
declare const UserInstanceTypeMenu: FC<UserInstanceTypeMenuProps>;
export default UserInstanceTypeMenu;
