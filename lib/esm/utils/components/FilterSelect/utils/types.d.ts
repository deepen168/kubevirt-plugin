import { K8sGroupVersionKind } from '@openshift-console/dynamic-plugin-sdk';
import { SelectOptionProps } from '@patternfly/react-core';
export declare type EnhancedSelectOptionProps = SelectOptionProps & {
    group?: string;
    groupVersionKind?: K8sGroupVersionKind;
    value: string;
};
