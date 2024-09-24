import React from 'react';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Alert, AlertVariant } from '@patternfly/react-core';
var DefaultStorageClassAlert = function () { return (React.createElement(Alert, { isInline: true, title: t('Selected StorageClass is different from StorageClass of the source'), variant: AlertVariant.info }, t('It may take several minutes until the clone is done and the VirtualMachine is ready.'))); };
export default DefaultStorageClassAlert;
//# sourceMappingURL=DefaultStorageClassAlert.js.map