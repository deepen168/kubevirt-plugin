import React, { createContext, useState } from 'react';
export var SidebarEditorContext = createContext({
    isEditable: true,
    showEditor: false,
    showSwitch: false,
});
export var SidebarEditorProvider = function (_a) {
    var children = _a.children, _b = _a.isEditable, isEditable = _b === void 0 ? true : _b;
    var _c = useState(false), showEditor = _c[0], setShowEditor = _c[1];
    return (React.createElement(SidebarEditorContext.Provider, { value: { isEditable: isEditable, setEditorVisible: setShowEditor, showEditor: showEditor, showSwitch: true } }, children));
};
//# sourceMappingURL=SidebarEditorContext.js.map