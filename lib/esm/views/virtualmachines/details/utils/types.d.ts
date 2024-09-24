import { Params } from 'react-router-dom-v5-compat';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare type NavPageComponentProps = {
    instanceTypeExpandedSpec?: V1VirtualMachine;
    obj: V1VirtualMachine;
    params: Params<string>;
};
