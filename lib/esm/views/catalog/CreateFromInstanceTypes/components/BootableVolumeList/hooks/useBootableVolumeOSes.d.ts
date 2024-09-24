import { BootableVolume } from '@kubevirt-utils/resources/bootableresources/types';
declare type UseBootableVolumeOSes = (bootableVolumes: BootableVolume[]) => {
    hasRHEL: boolean;
    hasWindows: boolean;
    isEmpty: boolean;
};
declare const useBootableVolumeOSes: UseBootableVolumeOSes;
export default useBootableVolumeOSes;
