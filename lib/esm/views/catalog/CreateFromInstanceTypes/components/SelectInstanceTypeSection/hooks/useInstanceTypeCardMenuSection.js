import { useRef, useState } from 'react';
import { useInstanceTypeVMStore } from '@catalog/CreateFromInstanceTypes/state/useInstanceTypeVMStore';
import { instanceTypeActionType } from '@catalog/CreateFromInstanceTypes/state/utils/types';
import { logITFlowEvent } from '@kubevirt-utils/extensions/telemetry/telemetry';
import { INSTANCETYPE_SELECTED } from '@kubevirt-utils/extensions/telemetry/utils/constants';
import { useClickOutside } from '@kubevirt-utils/hooks/useClickOutside/useClickOutside';
var useInstanceTypeCardMenuSection = function () {
    var _a = useState(null), activeMenu = _a[0], setActiveMenu = _a[1];
    var menuRef = useRef(null);
    var setInstanceTypeVMState = useInstanceTypeVMStore().setInstanceTypeVMState;
    var onMenuToggle = function (event, menuID) {
        event === null || event === void 0 ? void 0 : event.stopPropagation(); // Stop handleClickOutside from handling
        setActiveMenu(function (prevActiveMenu) { return (prevActiveMenu === menuID ? null : menuID); });
    };
    var onMenuSelect = function (itName) {
        setActiveMenu(null);
        setInstanceTypeVMState({
            payload: { name: itName, namespace: null },
            type: instanceTypeActionType.setSelectedInstanceType,
        });
        logITFlowEvent(INSTANCETYPE_SELECTED, null, {
            selectedInstanceType: itName,
        });
    };
    useClickOutside(menuRef, onMenuToggle);
    return { activeMenu: activeMenu, menuRef: menuRef, onMenuSelect: onMenuSelect, onMenuToggle: onMenuToggle };
};
export default useInstanceTypeCardMenuSection;
//# sourceMappingURL=useInstanceTypeCardMenuSection.js.map