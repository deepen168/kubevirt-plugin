import { useRef } from 'react';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
var useDeepCompareMemoize = function (value, strinfigy) {
    var ref = useRef();
    if (strinfigy
        ? JSON.stringify(value) !== JSON.stringify(ref.current)
        : !isEqualObject(value, ref.current)) {
        ref.current = value;
    }
    return ref.current;
};
export default useDeepCompareMemoize;
//# sourceMappingURL=useDeepCompareMemoize.js.map