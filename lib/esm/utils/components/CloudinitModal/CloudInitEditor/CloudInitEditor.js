import React, { useLayoutEffect, useRef, useState } from 'react';
import { dump } from 'js-yaml';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ResourceYAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertActionCloseButton, Divider } from '@patternfly/react-core';
import { getCloudInitData } from '../utils/cloudinit-utils';
import './CloudInitEditor.scss';
var EDITOR_TOOLS_SPACES = 75;
export var _CloudInitEditor = function (_a) {
    var cloudInitVolume = _a.cloudInitVolume, onSave = _a.onSave;
    var t = useKubevirtTranslation().t;
    var cloudInitData = getCloudInitData(cloudInitVolume);
    var _b = useState(), editorHeight = _b[0], setEditorHeight = _b[1];
    var _c = useState(false), saved = _c[0], setSaved = _c[1];
    var yamlEditorRef = useRef();
    var onSaveClick = function (yaml) {
        onSave(yaml);
        setSaved(true);
    };
    useLayoutEffect(function () {
        var _a, _b;
        if ((_a = yamlEditorRef.current) === null || _a === void 0 ? void 0 : _a.clientHeight) {
            setEditorHeight(((_b = yamlEditorRef.current) === null || _b === void 0 ? void 0 : _b.clientHeight) - EDITOR_TOOLS_SPACES);
        }
    }, []);
    return (React.createElement("div", { className: "yaml-container" },
        React.createElement("div", { className: "cloud-init-editor", ref: yamlEditorRef }, editorHeight && (React.createElement(ResourceYAMLEditor, { initialResource: dump(cloudInitData || ''), onSave: onSaveClick }))),
        saved && (React.createElement(Alert, { actionClose: React.createElement(AlertActionCloseButton, { onClose: function () { return setSaved(false); } }), className: "co-alert", isInline: true, title: t('Saved'), variant: "success" })),
        React.createElement(Divider, null)));
};
//# sourceMappingURL=CloudInitEditor.js.map