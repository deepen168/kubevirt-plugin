import React, { useState } from 'react';
import produce from 'immer';
import { DESCHEDULER_URL } from 'src/views/templates/utils/constants';
import { isDeschedulerOn } from 'src/views/templates/utils/utils';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useDeschedulerInstalled } from '@kubevirt-utils/hooks/useDeschedulerInstalled';
import { useIsAdmin } from '@kubevirt-utils/hooks/useIsAdmin';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateVirtualMachineObject } from '@kubevirt-utils/resources/template';
import { DESCHEDULER_EVICT_LABEL } from '@kubevirt-utils/resources/vmi';
import { ensurePath } from '@kubevirt-utils/utils/utils';
import { Button, Switch } from '@patternfly/react-core';
import { ExternalLinkAltIcon } from '@patternfly/react-icons';
var Descheduler = function (_a) {
    var onSubmit = _a.onSubmit, template = _a.template;
    var t = useKubevirtTranslation().t;
    var isDeschedulerInstalled = useDeschedulerInstalled();
    var isAdmin = useIsAdmin();
    var _b = useState(isDeschedulerOn(template)), isChecked = _b[0], setIsChecked = _b[1];
    var isDeschedulerEnabled = isAdmin && isDeschedulerInstalled;
    var updatedDeschedulerTemplate = function (checked) {
        return produce(template, function (draft) {
            var draftVM = getTemplateVirtualMachineObject(draft);
            ensurePath(draftVM, 'spec.template.metadata.annotations');
            if (!draftVM.spec.template.metadata.annotations)
                draftVM.spec.template.metadata.annotations = {};
            if (checked) {
                draftVM.spec.template.metadata.annotations[DESCHEDULER_EVICT_LABEL] = 'true';
            }
            else {
                delete draftVM.spec.template.metadata.annotations[DESCHEDULER_EVICT_LABEL];
            }
            onSubmit(draft);
        });
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(VirtualMachineDescriptionItem, { bodyContent: React.createElement(React.Fragment, null,
                t('The Descheduler can be used to evict a running VirtualMachine so that the VirtualMachine can be rescheduled onto a more suitable Node via a live migration.'),
                React.createElement("div", { className: "margin-top" },
                    React.createElement(Button, { className: "no-left-padding", component: "a", href: DESCHEDULER_URL, icon: React.createElement(ExternalLinkAltIcon, null), iconPosition: "right", target: "_blank", variant: "link" }, t('Learn more')))), descriptionData: React.createElement(Switch, { onChange: function (_event, checked) {
                    setIsChecked(checked);
                    updatedDeschedulerTemplate(checked);
                }, id: "descheduler-switch", isChecked: isChecked, isDisabled: !isDeschedulerEnabled }), descriptionHeader: t('Descheduler'), isPopover: true })));
};
export default Descheduler;
//# sourceMappingURL=Descheduler.js.map