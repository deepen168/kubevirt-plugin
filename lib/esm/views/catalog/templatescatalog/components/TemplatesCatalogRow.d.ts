import * as React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { RowProps } from '@openshift-console/dynamic-plugin-sdk';
export declare const TemplatesCatalogRow: React.FC<RowProps<V1Template, {
    availableDatasources: Record<string, V1beta1DataSource>;
    availableTemplatesUID: Set<string>;
    onTemplateClick: (template: V1Template) => void;
}>>;
