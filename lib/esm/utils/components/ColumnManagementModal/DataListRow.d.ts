import { FC, FormEvent } from 'react';
import { ManagedColumn } from '@openshift-console/dynamic-plugin-sdk';
declare type DataListRowProps = {
    checkedColumns: Set<string>;
    column: ManagedColumn;
    disableUncheckedRow: boolean;
    inputId: string;
    onChange: (event: FormEvent<HTMLInputElement>, checked: boolean) => void;
};
declare const DataListRow: FC<DataListRowProps>;
export default DataListRow;
