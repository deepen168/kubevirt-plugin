import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
/**
 * Hook that returns the DataSources and PVCs that are available for the templates
 * @param templates - the templates to filter
 * @param templatesLoaded - whether the templates are loaded
 * @returns availablePVCs and availableDatasources, both Sets of strings representing the available sources. `{namespace-name}`
 */
export declare const useAvailableDataSourcesAndPVCs: (templates: V1Template[], templatesLoaded: boolean) => {
    availableDatasources: {};
    availablePVCs: Set<string>;
    cloneInProgressDatasources: {};
    loaded: boolean;
};
