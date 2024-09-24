import React from 'react';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import useNADsData from '@kubevirt-utils/components/NetworkInterfaceModal/components/hooks/useNADsData';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { FormGroup, SelectOption } from '@patternfly/react-core';
var CheckupsNetworkFormNADS = function (_a) {
    var _b, _c;
    var selectedNAD = _a.selectedNAD, setSelectedNAD = _a.setSelectedNAD;
    var t = useKubevirtTranslation().t;
    var namespace = useActiveNamespace()[0];
    var nads = useNADsData(namespace).nads;
    var nadsItems = (_c = (_b = (nads || [])) === null || _b === void 0 ? void 0 : _b.filter(function (nad) { var _a; return ((_a = nad === null || nad === void 0 ? void 0 : nad.metadata) === null || _a === void 0 ? void 0 : _a.namespace) === namespace; })) === null || _c === void 0 ? void 0 : _c.map(function (nad) {
        var _a;
        return (React.createElement(SelectOption, { key: (_a = nad === null || nad === void 0 ? void 0 : nad.metadata) === null || _a === void 0 ? void 0 : _a.uid, value: nad.metadata.name }, nad.metadata.name));
    });
    return (React.createElement(FormGroup, { fieldId: "nad", isRequired: true, label: t('NetworkAttachmentDefinition') },
        React.createElement(FormPFSelect, { toggleProps: {
                className: 'placeholder',
                isFullWidth: true,
                placeholder: t('Select NetwrokAttachmentDefinition'),
            }, onSelect: function (_, value) { return setSelectedNAD(value); }, selected: selectedNAD }, nadsItems)));
};
export default CheckupsNetworkFormNADS;
//# sourceMappingURL=CheckupsNetworkFormNADS.js.map