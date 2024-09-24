import React from 'react';
import FormGroupHelperText from '@kubevirt-utils/components/FormGroupHelperText/FormGroupHelperText';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { FormGroup } from '@patternfly/react-core';
import { diskSourcePVCNamespaceFieldID } from '../../utils/constants';
var DiskSourcePVCSelectNamespace = function (_a) {
    var vmNamespace = _a.vmNamespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(FormGroup, { fieldId: diskSourcePVCNamespaceFieldID, id: diskSourcePVCNamespaceFieldID, label: t('PersistentVolumeClaim project') },
        React.createElement(FormPFSelect, { toggleProps: {
                isDisabled: true,
                isFullWidth: true,
                placeholder: vmNamespace,
            } }),
        React.createElement(FormGroupHelperText, null, t('Location of the existing PVC'))));
};
export default DiskSourcePVCSelectNamespace;
//# sourceMappingURL=DiskSourcePVCSelectNamespace.js.map