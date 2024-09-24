import { V1Volume } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseDataVolumeConvertedVolumeNames = (vmVolumes: V1Volume[]) => {
    dvVolumesNames: string[];
    isDataVolumeGarbageCollector: boolean;
};
declare const useDataVolumeConvertedVolumeNames: UseDataVolumeConvertedVolumeNames;
export default useDataVolumeConvertedVolumeNames;
