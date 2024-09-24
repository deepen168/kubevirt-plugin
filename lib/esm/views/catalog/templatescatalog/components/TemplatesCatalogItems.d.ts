import { VFC } from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { TemplateFilters } from '../utils/types';
declare type TemplatesCatalogItemsProps = {
    availableDatasources: Record<string, V1beta1DataSource>;
    availableTemplatesUID: Set<string>;
    bootSourcesLoaded: boolean;
    filters: TemplateFilters;
    loaded: boolean;
    onTemplateClick: (template: V1Template) => void;
    templates: V1Template[];
};
export declare const TemplatesCatalogItems: VFC<TemplatesCatalogItemsProps>;
export {};
