import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { getBestMatch, groupQuickStartsByName, } from '@kubevirt-utils/hooks/useQuickStarts/utils/utils';
import { QuickStartModel } from '@kubevirt-utils/models';
import { getGroupVersionKindForModel, useK8sWatchResource, } from '@openshift-console/dynamic-plugin-sdk';
import { getDisabledQuickStarts } from '@patternfly/quickstarts';
var useQuickStarts = function (filterDisabledQuickStarts) {
    if (filterDisabledQuickStarts === void 0) { filterDisabledQuickStarts = true; }
    var preferredLanguage = useTranslation().i18n.language;
    var _a = useK8sWatchResource({
        groupVersionKind: getGroupVersionKindForModel(QuickStartModel),
        isList: true,
    }), quickStarts = _a[0], quickStartsLoaded = _a[1], quickStartsError = _a[2];
    var bestMatchQuickStarts = useMemo(function () {
        if (!quickStartsLoaded) {
            return [];
        }
        var groupedQuickStarts = groupQuickStartsByName(quickStarts);
        if (filterDisabledQuickStarts) {
            var disabledQuickStarts = getDisabledQuickStarts();
            disabledQuickStarts.forEach(function (quickStartName) { return delete groupedQuickStarts[quickStartName]; });
        }
        return Object.values(groupedQuickStarts).map(function (quickStartsByName) {
            return getBestMatch(quickStartsByName, preferredLanguage);
        });
    }, [quickStarts, quickStartsLoaded, filterDisabledQuickStarts, preferredLanguage]);
    return [bestMatchQuickStarts, quickStartsLoaded, quickStartsError];
};
export default useQuickStarts;
//# sourceMappingURL=useQuickStarts.js.map