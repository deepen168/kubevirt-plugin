import * as React from 'react';
import { BOOT_SOURCE } from '@kubevirt-utils/resources/template';
import { getDataSource, getPVC, } from '@kubevirt-utils/resources/template/hooks/useVmTemplateSource/utils';
import { getVMBootSourceType } from '@kubevirt-utils/resources/vm/utils/source';
import { useWizardVMContext } from './WizardVMContext';
export var useWizardSourceAvailable = function () {
    var vm = useWizardVMContext().vm;
    var _a = React.useState(true), isBootSourceAvailable = _a[0], setIsBootSourceAvailable = _a[1];
    var _b = React.useState(true), loaded = _b[0], setLoaded = _b[1];
    var _c = React.useState(), error = _c[0], setError = _c[1];
    var bootSource = React.useMemo(function () {
        return getVMBootSourceType(vm);
    }, [vm]);
    var getPVCSource = function (_a) {
        var name = _a.name, namespace = _a.namespace;
        setLoaded(false);
        return getPVC(name, namespace)
            .then(function () {
            setIsBootSourceAvailable(true);
        })
            .catch(function (e) {
            setIsBootSourceAvailable(false);
            setError(e);
        })
            .finally(function () { return setLoaded(true); });
    };
    var getDataSourceCondition = function (_a) {
        var name = _a.name, namespace = _a.namespace;
        setLoaded(false);
        return getDataSource(name, namespace)
            .then(function (dataSource) {
            var _a, _b;
            if ((_b = (_a = dataSource === null || dataSource === void 0 ? void 0 : dataSource.status) === null || _a === void 0 ? void 0 : _a.conditions) === null || _b === void 0 ? void 0 : _b.find(function (c) { return c.type === 'Ready' && c.status === 'True'; })) {
                setIsBootSourceAvailable(true);
            }
            else {
                setIsBootSourceAvailable(false);
            }
        })
            .catch(function (e) {
            setIsBootSourceAvailable(false);
            setError(e);
        })
            .finally(function () { return setLoaded(true); });
    };
    React.useEffect(function () {
        var _a, _b;
        setError(undefined);
        switch (bootSource === null || bootSource === void 0 ? void 0 : bootSource.type) {
            case BOOT_SOURCE.PVC:
                getPVCSource((_a = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _a === void 0 ? void 0 : _a.pvc);
                break;
            case BOOT_SOURCE.DATA_SOURCE:
                getDataSourceCondition((_b = bootSource === null || bootSource === void 0 ? void 0 : bootSource.source) === null || _b === void 0 ? void 0 : _b.sourceRef);
                break;
            case BOOT_SOURCE.URL:
            case BOOT_SOURCE.REGISTRY:
                {
                    setIsBootSourceAvailable(true);
                }
                break;
            case BOOT_SOURCE.NONE:
            case undefined: {
                setIsBootSourceAvailable(false);
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [bootSource]);
    return {
        error: error,
        isBootSourceAvailable: isBootSourceAvailable,
        loaded: loaded,
    };
};
//# sourceMappingURL=useWizardSourceAvailable.js.map