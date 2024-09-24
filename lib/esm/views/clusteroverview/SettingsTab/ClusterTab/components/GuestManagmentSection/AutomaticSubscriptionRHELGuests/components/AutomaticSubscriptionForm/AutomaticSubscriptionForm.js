import React, { useEffect, useMemo, useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { debounce } from '@kubevirt-utils/utils/debounce';
import { Button, ButtonVariant, Form, FormGroup, Grid, GridItem, Skeleton, TextInput, } from '@patternfly/react-core';
import { ACTIVATION_KEYS_URL } from '../../utils/constants';
import ActivationKeyHelpIcon from '../ActivationKeyHelpIcon/ActivationKeyHelpIcon';
import OrganizationIDHelpIcon from '../OrganizationIDHelpIcon/OrganizationIDHelpIcon';
import './AutomaticSubscriptionForm.scss';
var AutomaticSubscriptionForm = function (_a) {
    var canEdit = _a.canEdit, loaded = _a.loaded, subscriptionData = _a.subscriptionData, updateSubscription = _a.updateSubscription;
    var t = useKubevirtTranslation().t;
    var _b = useState(null), activationKey = _b[0], setActivationKey = _b[1];
    var _c = useState(null), organizationID = _c[0], setOrganizationID = _c[1];
    useEffect(function () {
        if (activationKey === null && organizationID === null && loaded) {
            setActivationKey(subscriptionData === null || subscriptionData === void 0 ? void 0 : subscriptionData.activationKey);
            setOrganizationID(subscriptionData === null || subscriptionData === void 0 ? void 0 : subscriptionData.organizationID);
        }
    }, [activationKey, loaded, organizationID, subscriptionData]);
    var update = useMemo(function () {
        return debounce(function (val) {
            updateSubscription(val);
        }, 400);
    }, [updateSubscription]);
    if (!loaded)
        return React.createElement(Skeleton, null);
    return (React.createElement(React.Fragment, null,
        React.createElement(Form, { className: "pf-u-mt-sm", isHorizontal: true, isWidthLimited: true },
            React.createElement(FormGroup, { className: "subscription-label", label: t('Activation key'), labelIcon: React.createElement(ActivationKeyHelpIcon, null) },
                React.createElement(Grid, { hasGutter: true },
                    React.createElement(GridItem, { span: 7 },
                        React.createElement(TextInput, { onChange: function (_event, val) {
                                setActivationKey(val);
                                update({ activationKey: val });
                            }, isDisabled: !canEdit, value: activationKey })),
                    React.createElement(GridItem, { span: 5 },
                        React.createElement(Button, { component: "a", href: ACTIVATION_KEYS_URL, target: "_blank", variant: ButtonVariant.link }, t('Create activation key'))))),
            React.createElement(FormGroup, { className: "subscription-label", label: t('Organization ID'), labelIcon: React.createElement(OrganizationIDHelpIcon, null) },
                React.createElement(Grid, { hasGutter: true },
                    React.createElement(GridItem, { span: 7 },
                        React.createElement(TextInput, { onChange: function (_event, val) {
                                setOrganizationID(val);
                                update({ organizationID: val });
                            }, isDisabled: !canEdit, value: organizationID })))))));
};
export default AutomaticSubscriptionForm;
//# sourceMappingURL=AutomaticSubscriptionForm.js.map