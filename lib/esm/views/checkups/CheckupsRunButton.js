import React, { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom-v5-compat';
import classNames from 'classnames';
import { ALL_NAMESPACES_SESSION_KEY } from '@kubevirt-utils/hooks/constants';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { ListPageCreateDropdown, useActiveNamespace } from '@openshift-console/dynamic-plugin-sdk';
import { Button, ButtonVariant } from '@patternfly/react-core';
import { createURL } from '@virtualmachines/details/tabs/overview/utils/utils';
import useCheckupsNetworkPermissions from './network/hooks/useCheckupsNetworkPermissions';
import { useCheckupsStoragePermissions } from './storage/components/hooks/useCheckupsStoragePermissions';
import { trimLastHistoryPath } from './utils/utils';
var CheckupsRunButton = function () {
    var namespace = useActiveNamespace()[0];
    var navigate = useNavigate();
    var location = useLocation();
    var t = useKubevirtTranslation().t;
    var isCreateNetworkPermitted = useCheckupsNetworkPermissions().isPermitted;
    var isCreateStoragePermitted = useCheckupsStoragePermissions().isPermitted;
    var createItems = {
        network: (React.createElement("div", { className: classNames({ 'CheckupsRunButton--item__disabled': !isCreateNetworkPermitted }) }, t('Network latency'))),
        storage: (React.createElement("div", { className: classNames({ 'CheckupsRunButton--item__disabled': !isCreateStoragePermitted }) }, t('Storage'))),
    };
    var onCreate = useCallback(function (type) {
        switch (type) {
            case 'network':
                return (isCreateNetworkPermitted &&
                    navigate(createURL('network/form', trimLastHistoryPath(location.pathname))));
            case 'storage':
                return (isCreateStoragePermitted &&
                    navigate(createURL('storage/form', trimLastHistoryPath(location.pathname))));
        }
    }, [isCreateNetworkPermitted, navigate, location, isCreateStoragePermitted]);
    return (React.createElement(Button, { className: classNames({
            'CheckupsRunButton--main': ALL_NAMESPACES_SESSION_KEY === namespace,
        }), isDisabled: ALL_NAMESPACES_SESSION_KEY === namespace, variant: ButtonVariant.plain },
        React.createElement(ListPageCreateDropdown, { items: createItems, onClick: onCreate }, t('Run checkup'))));
};
export default CheckupsRunButton;
//# sourceMappingURL=CheckupsRunButton.js.map