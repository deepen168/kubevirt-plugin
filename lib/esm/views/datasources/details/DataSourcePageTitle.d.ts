import * as React from 'react';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
declare type DataSourcePageTitleProps = {
    dataSource: V1beta1DataSource;
    name: string;
    namespace: string;
};
declare const DataSourcePageTitle: React.FC<DataSourcePageTitleProps>;
export default DataSourcePageTitle;
