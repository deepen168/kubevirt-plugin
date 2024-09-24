import { V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1PersistentVolumeClaim } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type BaseImages = [V1beta1PersistentVolumeClaim[], boolean, any];
declare const useBaseImages: (commonTemplates: V1Template[]) => BaseImages;
export default useBaseImages;
