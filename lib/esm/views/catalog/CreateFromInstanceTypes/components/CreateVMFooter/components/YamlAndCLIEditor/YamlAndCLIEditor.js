import React, { useState } from 'react';
import { saveAs } from 'file-saver';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { YAMLEditor } from '@openshift-console/dynamic-plugin-sdk';
import { Button, Tooltip } from '@patternfly/react-core';
import { CopyIcon, DownloadIcon } from '@patternfly/react-icons';
var YamlAndCLIEditor = function (_a) {
    var code = _a.code, minHeight = _a.minHeight;
    var t = useKubevirtTranslation().t;
    var _b = useState(false), copySuccess = _b[0], setCopySuccess = _b[1];
    var handleDownload = function () {
        // Download the code as a file
        var blob = new Blob([code], { type: 'text/plain' });
        saveAs(blob, 'code.txt');
    };
    var handleCopy = function () {
        navigator.clipboard.writeText(code).then(function () {
            setCopySuccess(true);
            setTimeout(function () { return setCopySuccess(false); }, 2000);
        });
    };
    return (React.createElement(YAMLEditor, { toolbarLinks: [
            React.createElement(Tooltip, { content: t('Download'), key: "download" },
                React.createElement(Button, { onClick: handleDownload, variant: "secondary" },
                    React.createElement(DownloadIcon, null))),
            React.createElement(Tooltip, { content: copySuccess ? t('Successfully copied to clipboard!') : t('Copy to clipboard'), key: "copy" },
                React.createElement(Button, { onClick: handleCopy, variant: "secondary" },
                    React.createElement(CopyIcon, null))),
        ], minHeight: minHeight, options: { readOnly: true }, showShortcuts: true, value: code }));
};
export default YamlAndCLIEditor;
//# sourceMappingURL=YamlAndCLIEditor.js.map