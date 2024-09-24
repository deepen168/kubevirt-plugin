import * as React from 'react';
import { useK8sModels, useResolvedExtensions, } from '@openshift-console/dynamic-plugin-sdk';
import { filterSubsystems } from '../utils';
var useDashboardSubsystems = function (typeGuard) {
    var allK8sModels = useK8sModels()[0];
    var dynamicSubsystemExtensions = useResolvedExtensions(typeGuard)[0];
    return React.useMemo(function () { return filterSubsystems(dynamicSubsystemExtensions, typeGuard, allK8sModels); }, 
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [dynamicSubsystemExtensions, allK8sModels]);
};
export default useDashboardSubsystems;
//# sourceMappingURL=useDashboardSubsystems.js.map