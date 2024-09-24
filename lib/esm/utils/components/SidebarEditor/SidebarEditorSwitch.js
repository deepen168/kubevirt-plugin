import React, { memo, useContext } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Switch } from '@patternfly/react-core';
import { SidebarEditorContext } from './SidebarEditorContext';
var SidebarEditorSwitch = memo(function () {
    var t = useKubevirtTranslation().t;
    var _a = useContext(SidebarEditorContext), setEditorVisible = _a.setEditorVisible, showEditor = _a.showEditor, showSwitch = _a.showSwitch;
    if (!showSwitch)
        return null;
    return (React.createElement(Switch, { className: "regular-font-weight", id: "sidebar-editor-switch", isChecked: showEditor, label: t('YAML'), onChange: function (_, checked) { return setEditorVisible(checked); } }));
});
export default SidebarEditorSwitch;
//# sourceMappingURL=SidebarEditorSwitch.js.map