import React from 'react';
import { Trans } from 'react-i18next';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageBody, ListPageHeader } from '@openshift-console/dynamic-plugin-sdk';
import { EmptyState, EmptyStateActions, EmptyStateBody, EmptyStateFooter, EmptyStateHeader, EmptyStateIcon, EmptyStateVariant, } from '@patternfly/react-core';
import { AddCircleOIcon } from '@patternfly/react-icons';
import BootableVolumeAddButton from './BootableVolumeAddButton';
var BootableVolumesEmptyState = function (_a) {
    var namespace = _a.namespace;
    var t = useKubevirtTranslation().t;
    return (React.createElement(React.Fragment, null,
        React.createElement(ListPageHeader, { title: t('Bootable volumes') }),
        React.createElement(ListPageBody, null,
            React.createElement(EmptyState, { variant: EmptyStateVariant.lg },
                React.createElement(EmptyStateHeader, { headingLevel: "h4", icon: React.createElement(EmptyStateIcon, { icon: AddCircleOIcon }), titleText: React.createElement(React.Fragment, null, t('No bootable volumes found')) }),
                React.createElement(EmptyStateBody, null,
                    React.createElement(Trans, { ns: "plugin__kubevirt-plugin", t: t },
                        "Click ",
                        React.createElement("b", null, "Add bootable volume"),
                        " to add your first bootable volume")),
                React.createElement(EmptyStateFooter, null,
                    React.createElement(EmptyStateActions, null,
                        React.createElement(BootableVolumeAddButton, { buttonText: t('Add volume'), namespace: namespace })))))));
};
export default BootableVolumesEmptyState;
//# sourceMappingURL=BootableVolumesEmptyState.js.map