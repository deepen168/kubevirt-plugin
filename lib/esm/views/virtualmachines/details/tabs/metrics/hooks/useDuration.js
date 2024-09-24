import { useMemo } from 'react';
import { SINGLE_VM_DURATION } from '@kubevirt-utils/components/Charts/utils/utils';
import DurationOption from '@kubevirt-utils/components/DurationOption/DurationOption';
import useLocalStorage from '@kubevirt-utils/hooks/useLocalStorage';
var useDuration = function () {
    var _a = useLocalStorage(SINGLE_VM_DURATION, DurationOption.FIVE_MIN.toString()), duration = _a[0], setDuration = _a[1];
    var currentTime = useMemo(function () { return Date.now(); }, []);
    var timespan = DurationOption === null || DurationOption === void 0 ? void 0 : DurationOption.getMilliseconds(duration);
    return { currentTime: currentTime, duration: duration, setDuration: setDuration, timespan: timespan };
};
export default useDuration;
//# sourceMappingURL=useDuration.js.map