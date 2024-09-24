import { FC } from 'react';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import './EnvironmentForm.scss';
declare type EnvironmentFormProps = {
    onEditChange?: (edited: boolean) => void;
    updateVM: (updatedVM: V1VirtualMachine) => Promise<V1VirtualMachine | void>;
    vm: V1VirtualMachine;
};
declare const EnvironmentForm: FC<EnvironmentFormProps>;
export default EnvironmentForm;
