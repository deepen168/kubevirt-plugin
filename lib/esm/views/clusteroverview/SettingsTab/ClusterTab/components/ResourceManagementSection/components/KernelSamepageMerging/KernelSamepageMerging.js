import React, { useEffect, useState } from 'react';
import HyperConvergedModel from '@kubevirt-ui/kubevirt-api/console/models/HyperConvergedModel';
import NewBadge from '@kubevirt-utils/components/badges/NewBadge/NewBadge';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
import { Alert, AlertVariant, PopoverPosition, Split, SplitItem, Switch, } from '@patternfly/react-core';
import './KernelSamepageMerging.scss';
var KernelSamepageMerging = function (_a) {
    var _b;
    var hyperConvergeConfiguration = _a.hyperConvergeConfiguration, _c = _a.newBadge, newBadge = _c === void 0 ? false : _c;
    var t = useKubevirtTranslation().t;
    var hyperConverge = hyperConvergeConfiguration[0], hyperLoaded = hyperConvergeConfiguration[1];
    var ksmConfiguration = (_b = hyperConverge === null || hyperConverge === void 0 ? void 0 : hyperConverge.spec) === null || _b === void 0 ? void 0 : _b.ksmConfiguration;
    var _d = useState(), isEnabled = _d[0], setIsEnabled = _d[1];
    useEffect(function () {
        return hyperLoaded &&
            setIsEnabled(!!((ksmConfiguration === null || ksmConfiguration === void 0 ? void 0 : ksmConfiguration.hasOwnProperty('nodeLabelSelector')) &&
                // Empty nodeLabelSelector will enable KSM on every node.
                isEmpty(ksmConfiguration === null || ksmConfiguration === void 0 ? void 0 : ksmConfiguration.nodeLabelSelector)));
    }, [ksmConfiguration, hyperLoaded]);
    var _e = useState(null), error = _e[0], setError = _e[1];
    var onKSMchange = function (value) {
        k8sPatch({
            data: [
                {
                    op: !ksmConfiguration ? 'add' : 'replace',
                    path: "/spec/ksmConfiguration",
                    value: value ? { nodeLabelSelector: {} } : {},
                },
            ],
            model: HyperConvergedModel,
            resource: hyperConverge,
        })
            .then(function () { return setIsEnabled(value); })
            .catch(function (err) { return setError(err.message); });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Split, null,
            React.createElement(SplitItem, { isFilled: true },
                t('Kernel Samepage Merging (KSM)'),
                ' ',
                React.createElement(HelpTextIcon, { bodyContent: t('KSM is a memory-saving deduplication feature designed to fit more VirtualMachines into physical memory by sharing the data common between them. It is specifically effective for similar VirtualMachines. KSM should only be used with trusted workloads. Turning this feature on enables it for all nodes in the cluster.'), className: "KernelSamepageMerging__HelpTextIcon", helpIconClassName: "KernelSamepageMerging__HelpIcon", position: PopoverPosition.bottom }),
                newBadge && React.createElement(NewBadge, null)),
            hyperLoaded && (React.createElement(SplitItem, null,
                React.createElement(Switch, { id: "kernel-samepage-merging", isChecked: isEnabled, onChange: function (_, checked) { return onKSMchange(checked); } })))),
        error && (React.createElement(Alert, { className: "KernelSamepageMerging__Alert", isInline: true, title: t('An error occurred'), variant: AlertVariant.danger }, error))));
};
export default KernelSamepageMerging;
//# sourceMappingURL=KernelSamepageMerging.js.map