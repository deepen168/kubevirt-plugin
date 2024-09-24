import React from 'react';
import { ConfigMapModel, modelToGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { Alert, AlertVariant, Button, ButtonVariant } from '@patternfly/react-core';
import InlineFilterSelect from '../FilterSelect/InlineFilterSelect';
import Loading from '../Loading/Loading';
import useSysprepConfigMaps from './hooks/useConfigMaps';
var SelectSysprep = function (_a) {
    var id = _a.id, namespace = _a.namespace, onSelectSysprep = _a.onSelectSysprep, selectedSysprepName = _a.selectedSysprepName;
    var t = useKubevirtTranslation().t;
    var _b = useSysprepConfigMaps(namespace), sysprepConfigMaps = _b[0], configmapsLoaded = _b[1], configmapsError = _b[2];
    if (configmapsError)
        return (React.createElement(Alert, { isInline: true, title: t('Error'), variant: AlertVariant.danger }, configmapsError === null || configmapsError === void 0 ? void 0 : configmapsError.message));
    return (React.createElement(React.Fragment, null,
        configmapsLoaded ? (React.createElement(InlineFilterSelect, { options: sysprepConfigMaps === null || sysprepConfigMaps === void 0 ? void 0 : sysprepConfigMaps.map(function (configMap) {
                var name = getName(configMap);
                return {
                    children: name,
                    groupVersionKind: modelToGroupVersionKind(ConfigMapModel),
                    value: name,
                };
            }), selected: selectedSysprepName, setSelected: onSelectSysprep, toggleProps: { id: id, placeholder: t('--- Select sysprep ---') } })) : (React.createElement(Loading, null)),
        selectedSysprepName && (React.createElement(Button, { isDanger: true, onClick: function () { return onSelectSysprep(undefined); }, variant: ButtonVariant.link }, t('Detach sysprep')))));
};
export default SelectSysprep;
//# sourceMappingURL=SelectSysprep.js.map