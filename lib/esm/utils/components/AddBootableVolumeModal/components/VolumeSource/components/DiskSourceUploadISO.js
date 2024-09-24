import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Checkbox } from '@patternfly/react-core';
var DiskSourceUploadISO = function (_a) {
    var isIso = _a.isIso, setIsIso = _a.setIsIso;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Checkbox, { id: "iso-checkbox", isChecked: isIso, label: t('This is an ISO file'), onChange: function (_, value) { return setIsIso(value); } }));
};
export default DiskSourceUploadISO;
//# sourceMappingURL=DiskSourceUploadISO.js.map