import { ComponentType } from 'react';
import { Location } from 'react-router-dom-v5-compat';
import { NavPage } from '@openshift-console/dynamic-plugin-sdk';
import { NavPageComponentProps } from '@virtualmachines/details/utils/types';
export declare const trimLastHistoryPath: (location: Location, paths: string[]) => string;
export declare type NavPageKubevirt = Omit<NavPage, 'component'> & {
    component: ComponentType<NavPageComponentProps>;
    isHidden?: boolean;
};
