import { FC } from 'react';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import './DataSourceActions.scss';
declare type DataSourceActionProps = {
    dataSource: V1beta1DataSource;
    isKebabToggle?: boolean;
};
declare const DataSourceActions: FC<DataSourceActionProps>;
export default DataSourceActions;
