import React from 'react';
import { V1VirtualMachineInstance } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { K8sResourceCommon } from '@openshift-console/dynamic-plugin-sdk';
declare type UtilizationThresholdChartsProps = {
    pods: K8sResourceCommon[];
    vmi: V1VirtualMachineInstance;
};
declare const UtilizationThresholdCharts: React.FC<UtilizationThresholdChartsProps>;
export default UtilizationThresholdCharts;
