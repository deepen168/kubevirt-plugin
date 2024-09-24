import useQuickStarts from '@kubevirt-utils/hooks/useQuickStarts/useQuickStarts';
import { getName } from '@kubevirt-utils/resources/shared';
var useQuickStart = function (quickStartId) {
    var _a = useQuickStarts(), quickStarts = _a[0], quickStartsLoaded = _a[1];
    var quickStart = quickStarts.find(function (qs) { return getName(qs) === quickStartId; });
    return [quickStart, quickStartsLoaded];
};
export default useQuickStart;
//# sourceMappingURL=useQuickStart.js.map