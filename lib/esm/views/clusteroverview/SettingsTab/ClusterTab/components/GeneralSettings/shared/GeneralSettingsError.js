import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant } from '@patternfly/react-core';
var GeneralSettingsError = function (_a) {
    var error = _a.error, loading = _a.loading;
    var t = useKubevirtTranslation().t;
    return ((error || loading) && (React.createElement(Alert, { className: "project-tab__main--error", isInline: true, title: t('Error'), variant: AlertVariant.danger }, error || loading)));
};
export default GeneralSettingsError;
//# sourceMappingURL=GeneralSettingsError.js.map