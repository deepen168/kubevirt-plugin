import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
declare type useTemplatesWithAvailableSourceProps = {
    namespace?: string;
    onlyAvailable: boolean;
    onlyDefault: boolean;
};
export declare const useTemplatesWithAvailableSource: ({ namespace, onlyAvailable, onlyDefault, }: useTemplatesWithAvailableSourceProps) => useTemplatesWithAvailableSourceValues;
declare type useTemplatesWithAvailableSourceValues = {
    availableDatasources: Record<string, V1beta1DataSource>;
    availableTemplatesUID: Set<string>;
    bootSourcesLoaded: boolean;
    error: any;
    loaded: boolean;
    templates: V1Template[];
};
export {};
