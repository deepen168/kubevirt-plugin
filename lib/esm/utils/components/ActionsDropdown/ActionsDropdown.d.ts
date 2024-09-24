import React from 'react';
import { Action } from '@openshift-console/dynamic-plugin-sdk';
declare type ActionsDropdownProps = {
    actions: Action[];
    className?: string;
    id?: string;
    isKebabToggle?: boolean;
    onLazyClick?: () => void;
};
declare const _default: React.NamedExoticComponent<ActionsDropdownProps>;
export default _default;
