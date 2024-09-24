import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { Selector } from '@openshift-console/dynamic-plugin-sdk';
declare type useTemplatesWithAvailableSourceProps = {
    fieldSelector?: string;
    namespace?: string;
    onlyAvailable: boolean;
    onlyDefault: boolean;
    selector?: Selector;
};
export declare const useTemplatesWithAvailableSource: ({ fieldSelector, namespace, onlyAvailable, onlyDefault, selector, }: useTemplatesWithAvailableSourceProps) => useTemplatesWithAvailableSourceValues;
declare type useTemplatesWithAvailableSourceValues = {
    availableDatasources: Record<string, V1beta1DataSource>;
    availableTemplatesUID: Set<string>;
    bootSourcesLoaded: boolean;
    cloneInProgressDatasources: Record<string, V1beta1DataSource>;
    error: any;
    loaded: boolean;
    templates: V1Template[];
};
export {};
