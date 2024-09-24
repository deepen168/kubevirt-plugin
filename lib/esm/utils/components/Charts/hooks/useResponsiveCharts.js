import { useCallback, useEffect, useRef, useState } from 'react';
import { getResizeObserver } from '@patternfly/react-core';
var useResponsiveCharts = function () {
    var containerRef = useRef(null);
    var _a = useState(), width = _a[0], setWidth = _a[1];
    var _b = useState(200), height = _b[0], setHeight = _b[1];
    var _c = useState(null), listener = _c[0], setListener = _c[1];
    var ref = useCallback(function (node) {
        if (node) {
            var sizeSetter = function () {
                setWidth(node.getBoundingClientRect().width);
                setHeight(node.getBoundingClientRect().height);
            };
            sizeSetter();
            setListener(getResizeObserver(containerRef === null || containerRef === void 0 ? void 0 : containerRef.current, sizeSetter));
            containerRef.current = node;
        }
    }, []);
    useEffect(function () {
        return function () {
            listener && listener();
        };
    }, [listener]);
    return { height: height, ref: ref, width: width };
};
export default useResponsiveCharts;
//# sourceMappingURL=useResponsiveCharts.js.map