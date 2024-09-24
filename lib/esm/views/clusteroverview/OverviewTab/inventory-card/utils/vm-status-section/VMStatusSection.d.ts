import * as React from 'react';
import { K8sResourceKind } from '../../../../utils/types';
import './VMStatusSection.scss';
export declare type VMStatusSectionProps = {
    vms: K8sResourceKind[];
    vmsLoaded: boolean;
};
declare const VMStatusSection: React.FC<VMStatusSectionProps>;
export default VMStatusSection;
