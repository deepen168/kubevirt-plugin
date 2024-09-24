import { V1PermittedHostDevices } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseHCPermittedHostDevicesType = () => {
    hcError: Error;
    hcLoaded: boolean;
    permittedHostDevices: V1PermittedHostDevices;
};
declare const useHCPermittedHostDevices: UseHCPermittedHostDevicesType;
export default useHCPermittedHostDevices;
