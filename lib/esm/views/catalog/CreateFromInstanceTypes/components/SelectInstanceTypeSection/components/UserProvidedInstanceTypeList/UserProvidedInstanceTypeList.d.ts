import { FC } from 'react';
import { InstanceTypes } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import './UserProvidedInstanceTypeList.scss';
declare type UserProvidedInstanceTypesListProps = {
    userProvidedInstanceTypes: InstanceTypes;
};
declare const UserProvidedInstanceTypesList: FC<UserProvidedInstanceTypesListProps>;
export default UserProvidedInstanceTypesList;
