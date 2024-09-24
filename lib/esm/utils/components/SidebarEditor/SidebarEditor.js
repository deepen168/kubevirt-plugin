import React, { Suspense, useContext, useMemo, useState } from 'react';
import { dump } from 'js-yaml';
import { PATHS_TO_HIGHLIGHT } from '@kubevirt-utils/resources/vm/utils/constants';
import { YAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertActionCloseButton, AlertVariant, Button, ButtonVariant, Flex, FlexItem, Sidebar, SidebarContent, SidebarPanel, Stack, StackItem, } from '@patternfly/react-core';
import Loading from '../Loading/Loading';
import { SidebarEditorContext } from './SidebarEditorContext';
import { useEditorHighlighter } from './useEditorHighlighter';
import { safeLoad } from './utils';
import './sidebar-editor.scss';
var SidebarEditor = function (_a) {
    var children = _a.children, onChange = _a.onChange, onResourceUpdate = _a.onResourceUpdate, _b = _a.pathsToHighlight, pathsToHighlight = _b === void 0 ? PATHS_TO_HIGHLIGHT.DEFAULT : _b, resource = _a.resource;
    var _c = useState(''), editableYAML = _c[0], setEditableYAML = _c[1];
    var _d = useState(false), loading = _d[0], setLoading = _d[1];
    var _e = useState(null), error = _e[0], setError = _e[1];
    var _f = useState(false), success = _f[0], setSuccess = _f[1];
    var resourceYAML = useMemo(function () {
        var yaml = dump(resource, { forceQuotes: true, skipInvalid: true });
        setEditableYAML(yaml);
        return yaml;
    }, [resource]);
    var _g = useContext(SidebarEditorContext), isEditable = _g.isEditable, showEditor = _g.showEditor;
    var editedResource = safeLoad(editableYAML);
    var editorRef = useEditorHighlighter(editableYAML, pathsToHighlight, showEditor);
    var changeResource = function (newValue) {
        setEditableYAML(newValue);
        if (onChange)
            onChange(safeLoad(newValue));
        return {};
    };
    var onUpdate = function (newResource) {
        if (!onResourceUpdate)
            return;
        setSuccess(false);
        setError(null);
        setLoading(true);
        return onResourceUpdate(newResource)
            .then(function () { return setSuccess(true); })
            .catch(setError)
            .finally(function () { return setLoading(false); });
    };
    var onReload = function () {
        setSuccess(false);
        setError(null);
        setEditableYAML(resourceYAML);
    };
    return (React.createElement(Sidebar, { className: "sidebar-editor", hasGutter: true, hasNoBackground: true, isPanelRight: true },
        React.createElement(SidebarContent, null, children instanceof Function ? children(editedResource !== null && editedResource !== void 0 ? editedResource : resource) : children),
        showEditor && (React.createElement(SidebarPanel, { className: "sidebar-editor__panel", width: { default: 'width_33', lg: 'width_50', xl: 'width_50' } },
            React.createElement(Stack, { hasGutter: true },
                React.createElement(StackItem, { isFilled: true },
                    React.createElement(Suspense, { fallback: React.createElement(Loading, null) },
                        React.createElement(YAMLEditor, { minHeight: "300px", onChange: changeResource, onSave: function () { return onUpdate(editedResource); }, options: { readOnly: !isEditable }, ref: editorRef, value: editableYAML }))),
                (success || error) && (React.createElement(StackItem, null,
                    success && (React.createElement(Alert, { actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return setSuccess(false); } }), title: "Success", variant: AlertVariant.success })),
                    error && (React.createElement(Alert, { title: "Error", variant: AlertVariant.danger }, error.message)))),
                onResourceUpdate && isEditable && (React.createElement(StackItem, null,
                    React.createElement(Flex, null,
                        React.createElement(FlexItem, null,
                            React.createElement(Button, { className: "save-button", isLoading: loading, onClick: function () { return onUpdate(editedResource); }, variant: ButtonVariant.primary }, "Save")),
                        React.createElement(FlexItem, null,
                            React.createElement(Button, { className: "reload-button", onClick: onReload, variant: ButtonVariant.secondary }, "Reload"))))))))));
};
export default SidebarEditor;
//# sourceMappingURL=SidebarEditor.js.map