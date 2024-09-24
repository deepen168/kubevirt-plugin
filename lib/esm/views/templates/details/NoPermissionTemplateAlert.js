import React from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant } from '@patternfly/react-core';
var NoPermissionTemplateAlert = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Alert, { className: "alert-margin-top-bottom template-header-alert", isInline: true, title: t("You're in view-only mode"), variant: AlertVariant.info }, t('To edit this template, contact your administrator.')));
};
export default NoPermissionTemplateAlert;
//# sourceMappingURL=NoPermissionTemplateAlert.js.map