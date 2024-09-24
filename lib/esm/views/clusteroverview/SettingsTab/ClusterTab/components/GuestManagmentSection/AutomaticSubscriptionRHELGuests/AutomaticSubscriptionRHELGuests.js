var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React, { useEffect, useState } from 'react';
import NewBadge from '@kubevirt-utils/components/badges/NewBadge/NewBadge';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import SectionWithSwitch from '@kubevirt-utils/components/SectionWithSwitch/SectionWithSwitch';
import { useFeatures } from '@kubevirt-utils/hooks/useFeatures/useFeatures';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import useRHELAutomaticSubscription from '@kubevirt-utils/hooks/useRHELAutomaticSubscription/useRHELAutomaticSubscription';
import { Stack, Title } from '@patternfly/react-core';
import ExpandSection from '../../../../ExpandSection/ExpandSection';
import AutomaticSubscriptionCustomUrl from './components/AutomaticSubscriptionCustomUrl/AutomaticSubscriptionCustomUrl';
import AutomaticSubscriptionForm from './components/AutomaticSubscriptionForm/AutomaticSubscriptionForm';
import AutomaticSubscriptionType from './components/AutomaticSubscriptionType/AutomaticSubscriptionType';
import { AutomaticSubscriptionTypeEnum, getSubscriptionItem, } from './components/AutomaticSubscriptionType/utils/utils';
import { AUTOMATIC_UPDATE_FEATURE_NAME } from './utils/constants';
var AutomaticSubscriptionRHELGuests = function (_a) {
    var _b, _c, _d, _e;
    var _f = _a.newBadge, newBadge = _f === void 0 ? false : _f;
    var t = useKubevirtTranslation().t;
    var _g = useFeatures(AUTOMATIC_UPDATE_FEATURE_NAME), featureEnabled = _g.featureEnabled, loading = _g.loading, toggleFeature = _g.toggleFeature;
    var formProps = useRHELAutomaticSubscription();
    var _h = useState(getSubscriptionItem((_b = formProps === null || formProps === void 0 ? void 0 : formProps.subscriptionData) === null || _b === void 0 ? void 0 : _b.type)), selected = _h[0], setSelected = _h[1];
    var isDisabled = ((_c = formProps === null || formProps === void 0 ? void 0 : formProps.subscriptionData) === null || _c === void 0 ? void 0 : _c.type) === AutomaticSubscriptionTypeEnum.NO_SUBSCRIPTION;
    useEffect(function () {
        var _a;
        if (!selected) {
            setSelected(getSubscriptionItem((_a = formProps === null || formProps === void 0 ? void 0 : formProps.subscriptionData) === null || _a === void 0 ? void 0 : _a.type));
        }
    }, [(_d = formProps === null || formProps === void 0 ? void 0 : formProps.subscriptionData) === null || _d === void 0 ? void 0 : _d.type, selected]);
    if (loading)
        return null;
    return (React.createElement(ExpandSection, { toggleContent: React.createElement(React.Fragment, null,
            t('Automatic subscription of new RHEL VirtualMachines'),
            newBadge && React.createElement(NewBadge, null)) },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(MutedTextSpan, { text: t('Enable automatic subscription for Red Hat Enterprise Linux VirtualMachines.\n') }),
            React.createElement(Title, { headingLevel: "h5" }, t('Subscription type')),
            React.createElement(AutomaticSubscriptionType, { selected: selected, setSelected: setSelected, updateSubscriptionType: formProps.updateSubscription }),
            !isDisabled && (React.createElement(React.Fragment, null,
                React.createElement(AutomaticSubscriptionForm, __assign({}, formProps)),
                (selected === null || selected === void 0 ? void 0 : selected.value) !== AutomaticSubscriptionTypeEnum.NO_SUBSCRIPTION && (React.createElement(React.Fragment, null,
                    React.createElement(SectionWithSwitch, { helpTextIconContent: t('Automatically pull updates from the RHEL repository. Activation key and Organization ID are mandatory to enable this.'), turnOnSwitch: function (val) {
                            toggleFeature(val);
                        }, id: AUTOMATIC_UPDATE_FEATURE_NAME, switchIsOn: featureEnabled, title: t('Enable auto updates for RHEL VirtualMachines') }),
                    React.createElement(AutomaticSubscriptionCustomUrl, { isDisabled: (selected === null || selected === void 0 ? void 0 : selected.value) === AutomaticSubscriptionTypeEnum.ENABLE_PREDICTIVE_ANALYTICS, customUrl: (_e = formProps.subscriptionData) === null || _e === void 0 ? void 0 : _e.customUrl, updateCustomUrl: formProps.updateSubscription }))))))));
};
export default AutomaticSubscriptionRHELGuests;
//# sourceMappingURL=AutomaticSubscriptionRHELGuests.js.map