import { FC } from 'react';
import { ColumnLayout } from '@openshift-console/dynamic-plugin-sdk';
declare type ColumnManagementProps = {
    columnLayout: ColumnLayout;
    hideColumnManagement?: boolean;
};
declare const ColumnManagement: FC<ColumnManagementProps>;
export default ColumnManagement;
