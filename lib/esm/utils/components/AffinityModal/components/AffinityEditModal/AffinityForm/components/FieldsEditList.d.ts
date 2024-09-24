import { FC, ReactNode } from 'react';
import { useIDEntitiesValue } from '../AffinityForm';
declare type FieldsEditListProps = {
    errorHelperText: ReactNode;
    fields: useIDEntitiesValue;
    helperText: ReactNode;
    label: string;
};
declare const FieldsEditList: FC<FieldsEditListProps>;
export default FieldsEditList;
