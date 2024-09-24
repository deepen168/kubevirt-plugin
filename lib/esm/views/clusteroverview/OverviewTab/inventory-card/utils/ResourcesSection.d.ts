import { FC } from 'react';
import { K8sResourceCommon, WatchK8sResults } from '@openshift-console/dynamic-plugin-sdk';
import './ResourcesSection.scss';
export declare type ResourcesSectionProps = {
    isAdmin?: boolean;
    resources?: WatchK8sResults<{
        [key: string]: K8sResourceCommon[];
    }>;
};
declare const ResourcesSection: FC<ResourcesSectionProps>;
export default ResourcesSection;
