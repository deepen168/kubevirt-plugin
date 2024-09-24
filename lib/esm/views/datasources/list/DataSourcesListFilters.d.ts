import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { RowFilter } from '@openshift-console/dynamic-plugin-sdk';
export declare const getDataImportCronFilter: () => RowFilter<V1beta1DataSource>[];
