import { V1beta1DataVolumeSourceRef } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
declare const usePVCSourceSize: (dataSourceRef: V1beta1DataVolumeSourceRef, pvcClaimName: string, pvcClaimNamespace: string) => any[];
export default usePVCSourceSize;
