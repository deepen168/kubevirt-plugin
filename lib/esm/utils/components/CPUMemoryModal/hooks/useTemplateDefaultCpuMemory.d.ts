import { V1CPU } from '@kubevirt-ui/kubevirt-api/kubevirt';
declare type UseTemplateDefaultCpuMemory = (templateName: string, templateNamespace: string) => {
    data: {
        defaultCpu: V1CPU;
        defaultMemory: {
            size: number;
            unit: string;
        };
    };
    error: any;
    loaded: boolean;
};
declare const useTemplateDefaultCpuMemory: UseTemplateDefaultCpuMemory;
export default useTemplateDefaultCpuMemory;
