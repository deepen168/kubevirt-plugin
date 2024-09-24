import React, { useEffect, useState } from 'react';
import { NetworkAttachmentDefinitionModelGroupVersionKind } from '@kubevirt-ui/kubevirt-api/console';
import FormPFSelect from '@kubevirt-utils/components/FormPFSelect/FormPFSelect';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getName } from '@kubevirt-utils/resources/shared';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { useK8sWatchResource } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, SelectGroup, SelectOption, Skeleton, Text, TextVariants, Title, } from '@patternfly/react-core';
import { getLiveMigrationNetwork, PRIMARY_NETWORK, updateLiveMigrationConfig, } from '../utils/utils';
var Network = function (_a) {
    var hyperConverge = _a.hyperConverge;
    var t = useKubevirtTranslation().t;
    var _b = useState(''), selectedNetwork = _b[0], setSelectedNetwork = _b[1];
    var _c = useK8sWatchResource({
        groupVersionKind: NetworkAttachmentDefinitionModelGroupVersionKind,
        isList: true,
    }), nads = _c[0], nadsLoaded = _c[1], nadsError = _c[2];
    useEffect(function () {
        if (hyperConverge) {
            var network = getLiveMigrationNetwork(hyperConverge);
            setSelectedNetwork(network !== null && network !== void 0 ? network : PRIMARY_NETWORK);
        }
    }, [hyperConverge]);
    var onSelect = function (_event, selectedValue) {
        updateLiveMigrationConfig(hyperConverge, selectedValue !== PRIMARY_NETWORK ? selectedValue : null, 'network');
        setSelectedNetwork(selectedValue);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Text, { component: TextVariants.small }, t('Set live migration network')),
        React.createElement(Title, { className: "live-migration-tab__network--title", headingLevel: "h6", size: "md" }, t('Live migration network')),
        nadsLoaded ? (React.createElement(FormPFSelect, { onSelect: onSelect, popperProps: { width: '360px' }, selected: selectedNetwork, toggleProps: { isDisabled: isEmpty(nads) } },
            React.createElement(SelectOption, { key: "primary", value: PRIMARY_NETWORK }, t('Primary live migration network')),
            React.createElement(SelectGroup, { key: "nad", label: t('Secondary NAD networks') }, nads === null || nads === void 0 ? void 0 : nads.map(function (nad) {
                var nadName = getName(nad);
                return (React.createElement(SelectOption, { key: nadName, value: nadName }, nadName));
            })))) : (!nadsError && React.createElement(Skeleton, { width: '360px' })),
        nadsError && (React.createElement(Alert, { className: "live-migration-tab--error", isInline: true, title: t('Error'), variant: AlertVariant.danger }, nadsError === null || nadsError === void 0 ? void 0 : nadsError.message))));
};
export default Network;
//# sourceMappingURL=Network.js.map