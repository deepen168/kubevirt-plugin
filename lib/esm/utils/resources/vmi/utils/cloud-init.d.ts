import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
export declare const getCloudInitCredentials: (vm: V1VirtualMachine) => {
    users: {
        name?: string;
        password?: string;
    }[];
};
