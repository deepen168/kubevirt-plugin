import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type UseDataSourceActionsProvider = (dataSource: V1beta1DataSource) => [actions: Action[], onOpen: () => void];
export declare const useDataSourceActionsProvider: UseDataSourceActionsProvider;
export {};
