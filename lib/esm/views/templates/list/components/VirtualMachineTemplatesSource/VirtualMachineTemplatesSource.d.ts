import * as React from 'react';
import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataSource } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import './VirtualMachineTemplatesSource.scss';
declare type VirtualMachineTemplatesSourceProps = {
    availableDatasources: Record<string, V1beta1DataSource>;
    availableTemplatesUID: Set<string>;
    cloneInProgressDatasources: Record<string, V1beta1DataSource>;
    template: V1Template;
};
declare const VirtualMachineTemplatesSource: React.FC<VirtualMachineTemplatesSourceProps>;
export default VirtualMachineTemplatesSource;
