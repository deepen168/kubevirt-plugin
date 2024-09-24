import { Updater } from 'use-immer';
import { TabsData } from '@catalog/utils/WizardVMContext/utils/tabs-data';
import { TemplateParameter, V1Template } from '@kubevirt-ui/kubevirt-api/console';
import { V1beta1DataVolume } from '@kubevirt-ui/kubevirt-api/containerized-data-importer/models';
import { V1VirtualMachine } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { UploadDataProps } from '@kubevirt-utils/hooks/useCDIUpload/useCDIUpload';
export declare const hasValidSource: (template: V1Template) => boolean;
export declare const allRequiredParametersAreFulfilled: (template: V1Template) => boolean;
export declare const hasNameParameter: (template: V1Template) => boolean;
export declare const getTemplateNameParameterValue: (template: V1Template) => string;
export declare const changeTemplateParameterValue: (template: V1Template, parameterName: string, value: string) => V1Template;
export declare const getRootDataVolume: (vm: V1VirtualMachine) => import("@kubevirt-ui/kubevirt-api/kubevirt").V1DataVolumeTemplateSpec | undefined;
export declare const getUploadDataVolume: (name: string, namespace: string, storage?: string) => V1beta1DataVolume;
declare type UploadFiles = (input: {
    cdFile?: File | string;
    diskFile?: File | string;
    namespace: string;
    updateTabsData?: Updater<TabsData>;
    uploadCDData: ({ dataVolume, file }: UploadDataProps) => Promise<void>;
    uploadDiskData: ({ dataVolume, file }: UploadDataProps) => Promise<void>;
    vm: V1VirtualMachine;
}) => Promise<V1VirtualMachine>;
export declare const uploadFiles: UploadFiles;
export declare const getTemplateParametersSplit: (parameters: TemplateParameter[]) => [required: TemplateParameter[], optional: TemplateParameter[]];
export {};
