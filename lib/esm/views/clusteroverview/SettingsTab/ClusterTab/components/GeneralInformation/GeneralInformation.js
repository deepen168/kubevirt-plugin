import React from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { OverviewDetailItem } from '@openshift-console/plugin-shared';
import { Alert, AlertVariant, DescriptionList, Divider, Skeleton, Split, SplitItem, } from '@patternfly/react-core';
import SourceMissingStatus from './components/SourceMissingStatus';
import SubscriptionStatus from './components/SubscriptionStatus';
import './general-information.scss';
var GeneralInformation = function (_a) {
    var catalogSourceMissing = _a.catalogSourceMissing, kubevirtSubscription = _a.kubevirtSubscription, loaded = _a.loaded, loadErrors = _a.loadErrors, operatorLink = _a.operatorLink, updateChannel = _a.updateChannel, version = _a.version;
    var t = useKubevirtTranslation().t;
    return (React.createElement(Split, { className: "general-tab", hasGutter: true },
        React.createElement(SplitItem, null,
            React.createElement(OverviewDetailItem, { isLoading: !loaded, title: t('Installed version') }, version)),
        React.createElement(Divider, { className: "general-tab__divider", orientation: { default: 'vertical' } }),
        React.createElement(SplitItem, null,
            React.createElement(OverviewDetailItem, { isLoading: !loaded, title: t('Update status') }, catalogSourceMissing ? (React.createElement(SourceMissingStatus, null)) : (React.createElement(SubscriptionStatus, { operatorLink: operatorLink, subscription: kubevirtSubscription })))),
        React.createElement(Divider, { orientation: { default: 'vertical' } }),
        React.createElement(SplitItem, null,
            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                React.createElement(VirtualMachineDescriptionItem, { descriptionData: loaded ? (React.createElement(ExternalLink, { href: operatorLink }, updateChannel)) : (React.createElement(Skeleton, null)), bodyContent: t('The channel to track and receive the updates from.'), descriptionHeader: t('Channel'), isPopover: true }))),
        !isEmpty(loadErrors) && loaded && (React.createElement(Alert, { className: "live-migration-tab--error", isInline: true, title: t('Error'), variant: AlertVariant.danger }, loadErrors.toString()))));
};
export default GeneralInformation;
//# sourceMappingURL=GeneralInformation.js.map