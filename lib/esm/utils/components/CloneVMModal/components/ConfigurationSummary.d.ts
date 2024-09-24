import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type ConfigurationSummaryProps = {
    vm: V1VirtualMachine;
};
declare const ConfigurationSummary: FC<ConfigurationSummaryProps>;
export default ConfigurationSummary;
