import * as React from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './VMNotMigratableLabel.scss';
declare type VMNotMigratableLabelProps = {
    vm: V1VirtualMachine;
};
declare const VMNotMigratableLabel: React.FC<VMNotMigratableLabelProps>;
export default VMNotMigratableLabel;
