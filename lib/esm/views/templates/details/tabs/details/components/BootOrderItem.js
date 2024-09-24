import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom-v5-compat';
import BootOrder from 'src/views/virtualmachinesinstance/details/tabs/details/components/Details/BootOrder/BootOrder';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getTemplateDisks, getTemplateInterfaces } from '@kubevirt-utils/resources/template';
var BootOrderItem = function (_a) {
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var disks = getTemplateDisks(template);
    var interfaces = getTemplateInterfaces(template);
    var disksTabLink = "/k8s/ns/".concat(template.metadata.namespace, "/templates/").concat(template.metadata.name, "/disks");
    return (React.createElement(VirtualMachineDescriptionItem, { bodyContent: React.createElement(Trans, { ns: "plugin__kubevirt-plugin" },
            "You can edit the boot order in the ",
            React.createElement(Link, { to: disksTabLink }, t('Disks tab'))), descriptionData: React.createElement(BootOrder, { disks: disks, interfaces: interfaces }), descriptionHeader: t('Boot order'), isPopover: true }));
};
export default BootOrderItem;
//# sourceMappingURL=BootOrderItem.js.map