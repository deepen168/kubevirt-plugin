import * as React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
export declare type TemplateTileProps = {
    availableDatasources: Record<string, V1beta1DataSource>;
    availableTemplatesUID: Set<string>;
    bootSourcesLoaded: boolean;
    isSelected?: boolean;
    onClick: (template: V1Template) => void;
    template: V1Template;
};
export declare const TemplateTile: React.FC<TemplateTileProps>;
