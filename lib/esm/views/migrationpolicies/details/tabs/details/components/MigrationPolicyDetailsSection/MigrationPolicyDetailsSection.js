import React from 'react';
import { Trans } from 'react-i18next';
import { useModal } from '@kubevirt-utils/components/ModalProvider/ModalProvider';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NO_DATA_DASH } from '@kubevirt-utils/resources/vm/utils/constants';
import { Button, ButtonVariant, DescriptionList, DescriptionListDescription, DescriptionListTerm, DescriptionListTermHelpTextButton, Flex, Grid, GridItem, Icon, Popover, Title, } from '@patternfly/react-core';
import { LinkIcon, PencilAltIcon } from '@patternfly/react-icons';
import MigrationPolicyEditModal from '../../../../../components/MigrationPolicyEditModal/MigrationPolicyEditModal';
import { migrationPolicySpecKeys } from '../../../../../utils/constants';
import { getBandwidthPerMigrationText, getBooleanText, getCompletionTimeoutText, } from '../../../../../utils/utils';
import MigrationPolicyProjectLabels from './components/MigrationPolicyProjectLabels';
import MigrationPolicyVirtualMachineLabels from './components/MigrationPolicyVirtualMachineLabels';
import './MigrationPolicyDetailsSection.scss';
var MigrationPolicyDetailsSection = function (_a) {
    var _b, _c, _d, _e, _f, _g, _h;
    var mp = _a.mp, pathname = _a.pathname;
    var t = useKubevirtTranslation().t;
    var createModal = useModal().createModal;
    var hasOwnPropertySpec = function (key) { return key in ((mp === null || mp === void 0 ? void 0 : mp.spec) || {}); };
    return (React.createElement("div", null,
        React.createElement("a", { className: "link-icon", href: "".concat(pathname, "#details") },
            React.createElement(Icon, { size: "sm" },
                ' ',
                React.createElement(LinkIcon, null))),
        React.createElement(Title, { className: "kv-details-section-heading", headingLevel: "h2" }, t('MigrationPolicy details')),
        React.createElement(Grid, { hasGutter: true },
            React.createElement(GridItem, { span: 5 },
                React.createElement(DescriptionList, { className: "pf-c-description-list" },
                    React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. '), breadcrumb: "MigrationPolicy.metadata.name", descriptionData: (_b = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _b === void 0 ? void 0 : _b.name, descriptionHeader: t('Name'), isPopover: true, moreInfoURL: "http://kubernetes.io/docs/user-guide/identifiers#names" }),
                    React.createElement(VirtualMachineDescriptionItem, { descriptionData: (_d = (_c = mp === null || mp === void 0 ? void 0 : mp.metadata) === null || _c === void 0 ? void 0 : _c.annotations) === null || _d === void 0 ? void 0 : _d.description, descriptionHeader: t('Description') }),
                    React.createElement(React.Fragment, null,
                        React.createElement(DescriptionListTerm, null,
                            React.createElement(Button, { onClick: function () {
                                    return createModal(function (_a) {
                                        var isOpen = _a.isOpen, onClose = _a.onClose;
                                        return (React.createElement(MigrationPolicyEditModal, { isOpen: isOpen, mp: mp, onClose: onClose }));
                                    });
                                }, isInline: true, variant: ButtonVariant.link },
                                React.createElement(Flex, { spaceItems: { default: 'spaceItemsNone' } },
                                    React.createElement(Title, { headingLevel: "h2" }, t('Configurations')),
                                    React.createElement(PencilAltIcon, { className: "kv-icon-space-l pf-c-button-icon--plain" })))),
                        React.createElement(DescriptionListDescription, null,
                            React.createElement(DescriptionList, { className: "pf-c-description-list" },
                                React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('BandwidthPerMigration limits the amount of network bandwith live migrations are allowed to use. The value is in quantity per second. Defaults to 0 (no limit). '), descriptionData: hasOwnPropertySpec(migrationPolicySpecKeys.BANDWIDTH_PER_MIGRATION)
                                        ? getBandwidthPerMigrationText((_e = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _e === void 0 ? void 0 : _e.bandwidthPerMigration)
                                        : NO_DATA_DASH, descriptionHeader: t('Bandwidth per migration'), isPopover: true, moreInfoURL: "http://kubevirt.io/api-reference/main/definitions.html#_v1_migrationconfiguration" }),
                                React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('AllowAutoConverge allows the platform to compromise performance/availability of VMIs to guarantee successful VMI live migrations. Defaults to false. '), descriptionData: hasOwnPropertySpec(migrationPolicySpecKeys.ALLOW_AUTO_CONVERGE)
                                        ? getBooleanText((_f = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _f === void 0 ? void 0 : _f.allowAutoConverge)
                                        : NO_DATA_DASH, descriptionHeader: t('Auto converge'), isPopover: true, moreInfoURL: "http://kubevirt.io/api-reference/main/definitions.html#_v1_migrationconfiguration" }),
                                React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('AllowPostCopy enables post-copy live migrations. Such migrations allow even the busiest VMIs to successfully live-migrate. However, events like a network failure can cause a VMI crash. If set to true, migrations will still start in pre-copy, but switch to post-copy when CompletionTimeoutPerGiB triggers. Defaults to false. '), descriptionData: hasOwnPropertySpec(migrationPolicySpecKeys.ALLOW_POST_COPY)
                                        ? getBooleanText((_g = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _g === void 0 ? void 0 : _g.allowPostCopy)
                                        : NO_DATA_DASH, descriptionHeader: t('Post-copy'), isPopover: true, moreInfoURL: "http://kubevirt.io/api-reference/main/definitions.html#_v1_migrationconfiguration" }),
                                React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('CompletionTimeoutPerGiB is the maximum number of seconds per GiB a migration is allowed to take. If a live-migration takes longer to migrate than this value multiplied by the size of the VMI, the migration will be cancelled, unless AllowPostCopy is true. Defaults to 800. '), descriptionData: hasOwnPropertySpec(migrationPolicySpecKeys.COMPLETION_TIMEOUT_PER_GIB)
                                        ? getCompletionTimeoutText((_h = mp === null || mp === void 0 ? void 0 : mp.spec) === null || _h === void 0 ? void 0 : _h.completionTimeoutPerGiB)
                                        : NO_DATA_DASH, descriptionHeader: t('Completion timeout'), isPopover: true, moreInfoURL: "http://kubevirt.io/api-reference/main/definitions.html#_v1_migrationconfiguration" })))),
                    React.createElement(Title, { headingLevel: "h2" },
                        React.createElement(Popover, { bodyContent: React.createElement(Trans, { ns: "plugin__kubevirt-plugin" },
                                "Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info:",
                                ' ',
                                React.createElement("a", { href: "http://kubernetes.io/docs/user-guide/labels" }, "http://kubernetes.io/docs/user-guide/labels")), headerContent: t('Labels') },
                            React.createElement(DescriptionListTermHelpTextButton, null, t('Labels')))),
                    React.createElement(MigrationPolicyProjectLabels, { mp: mp }),
                    React.createElement(MigrationPolicyVirtualMachineLabels, { mp: mp }))))));
};
export default MigrationPolicyDetailsSection;
//# sourceMappingURL=MigrationPolicyDetailsSection.js.map