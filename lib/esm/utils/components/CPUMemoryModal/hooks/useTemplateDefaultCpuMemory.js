import { useEffect, useState } from 'react';
import { TemplateModel } from '@kubevirt-ui/kubevirt-api/console';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { getCPU, getMemory } from '@kubevirt-utils/resources/vm';
import { k8sGet } from '@openshift-console/dynamic-plugin-sdk';
import { getMemorySize } from '../utils/CpuMemoryUtils';
var useTemplateDefaultCpuMemory = function (templateName, templateNamespace) {
    var _a = useState(), template = _a[0], setTemplate = _a[1];
    var _b = useState(false), loaded = _b[0], setLoaded = _b[1];
    var _c = useState(), error = _c[0], setError = _c[1];
    useEffect(function () {
        k8sGet({
            model: TemplateModel,
            name: templateName,
            ns: templateNamespace,
        })
            .then(setTemplate)
            .catch(setError)
            .finally(function () {
            setLoaded(true);
        });
    }, [templateName, templateNamespace]);
    var vmObject = getTemplateVirtualMachineObject(template);
    var defaultMemory = getMemorySize(getMemory(vmObject));
    var defaultCpu = getCPU(vmObject);
    return {
        data: {
            defaultCpu: defaultCpu,
            defaultMemory: defaultMemory,
        },
        error: error,
        loaded: loaded,
    };
};
export default useTemplateDefaultCpuMemory;
//# sourceMappingURL=useTemplateDefaultCpuMemory.js.map