import * as React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Alert, AlertVariant, FormGroup, Stack, StackItem } from '@patternfly/react-core';
import SnapshotSupportLink from '../SnapshotSupportLink/SnapshotSupportLink';
var UnsupportedVolumesAlert = function (_a) {
    var unsupportedVolumes = _a.unsupportedVolumes;
    var t = useKubevirtTranslation().t;
    if (isEmpty(unsupportedVolumes)) {
        return null;
    }
    return (React.createElement(FormGroup, { fieldId: "snapshot-unsupported-volumes-alert" },
        React.createElement(Alert, { title: t('The following disk will not be included in the snapshot', {
                count: unsupportedVolumes === null || unsupportedVolumes === void 0 ? void 0 : unsupportedVolumes.length,
            }), isInline: true, variant: AlertVariant.warning },
            React.createElement(Stack, { hasGutter: true },
                React.createElement(StackItem, null,
                    React.createElement(Stack, null, unsupportedVolumes === null || unsupportedVolumes === void 0 ? void 0 : unsupportedVolumes.map(function (vol) { return (React.createElement(StackItem, { key: vol.name },
                        React.createElement("strong", null, vol.name),
                        " - ",
                        vol.reason)); }))),
                React.createElement(StackItem, null, t('Edit the disk or contact your cluster admin for further details.', {
                    count: unsupportedVolumes === null || unsupportedVolumes === void 0 ? void 0 : unsupportedVolumes.length,
                })),
                React.createElement(StackItem, null,
                    React.createElement(SnapshotSupportLink, null))))));
};
export default UnsupportedVolumesAlert;
//# sourceMappingURL=UnsupportedVolumesAlert.js.map