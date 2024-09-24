import * as React from 'react';
import Timestamp from '@kubevirt-utils/components/Timestamp/Timestamp';
import VirtualMachineDescriptionItem from '@kubevirt-utils/components/VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var CreatedAt = function (_a) {
    var _b;
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    return (React.createElement(VirtualMachineDescriptionItem, { bodyContent: t('CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.'), breadcrumb: "Template.metadata.creationTimestamp", descriptionData: React.createElement(Timestamp, { timestamp: (_b = template === null || template === void 0 ? void 0 : template.metadata) === null || _b === void 0 ? void 0 : _b.creationTimestamp }), descriptionHeader: t('Created at'), isPopover: true, moreInfoURL: "https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata" }));
};
export default CreatedAt;
//# sourceMappingURL=CreatedAt.js.map