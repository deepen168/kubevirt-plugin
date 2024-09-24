import { V1beta1DataImportCron } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseDataImportCronActionsProvider = (DataImportCron: V1beta1DataImportCron) => [actions: Action[], onOpen: () => void];
export declare const useDataImportCronActionsProvider: UseDataImportCronActionsProvider;
export {};
