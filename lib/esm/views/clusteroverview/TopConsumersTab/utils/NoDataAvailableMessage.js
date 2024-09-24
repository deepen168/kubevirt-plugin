import * as React from 'react';
import ExternalLink from '@kubevirt-utils/components/ExternalLink/ExternalLink';
import HelpTextIcon from '@kubevirt-utils/components/HelpTextIcon/HelpTextIcon';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { NON_VCPU_LINK, vCPU_LINK } from './constants';
import './NoDataAvailableMessage.scss';
var NoDataAvailableMessage = function (_a) {
    var _b = _a.isVCPU, isVCPU = _b === void 0 ? false : _b;
    var t = useKubevirtTranslation().t;
    var nonVCPUMessage = t('Metrics are collected by the OpenShift Monitoring Operator.');
    var vcpuMessage = t('To see the vCPU metric, you must set the schedstats=enable kernel argument in the MachineConfig object.');
    var bodyContent = (React.createElement("div", null,
        isVCPU ? vcpuMessage : nonVCPUMessage,
        React.createElement("div", null,
            ' ',
            React.createElement("div", { className: "kv-top-consumers-card__chart-list-no-data-msg--link" },
                React.createElement(ExternalLink, { href: isVCPU ? vCPU_LINK : NON_VCPU_LINK, text: t('Learn more') })))));
    return (React.createElement("div", { className: "kv-top-consumers-card__chart-list-no-data-msg pf-u-text-align-center" },
        t('No data available'),
        React.createElement(HelpTextIcon, { bodyContent: bodyContent, helpIconClassName: "kv-top-consumers-card__chart-list-no-data-msg--icon" })));
};
export default NoDataAvailableMessage;
//# sourceMappingURL=NoDataAvailableMessage.js.map