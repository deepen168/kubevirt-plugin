import * as React from 'react';
import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import VirtualMachineDescriptionItem from '../VirtualMachineDescriptionItem/VirtualMachineDescriptionItem';
var AdditionalResources = function (_a) {
    var _b;
    var template = _a.template;
    var t = useKubevirtTranslation().t;
    var additionalResources = (_b = template === null || template === void 0 ? void 0 : template.objects) === null || _b === void 0 ? void 0 : _b.filter(function (object) { return (object === null || object === void 0 ? void 0 : object.kind) !== VirtualMachineModel.kind; });
    if (isEmpty(additionalResources))
        return null;
    return (React.createElement(VirtualMachineDescriptionItem, { descriptionData: React.createElement("ul", null, additionalResources.map(function (object) {
            var _a;
            return (React.createElement("li", { key: "".concat(object === null || object === void 0 ? void 0 : object.kind, "-").concat((_a = object === null || object === void 0 ? void 0 : object.metadata) === null || _a === void 0 ? void 0 : _a.name) }, object === null || object === void 0 ? void 0 : object.kind));
        })), descriptionHeader: t('Additional resources') }));
};
export default AdditionalResources;
//# sourceMappingURL=AdditionalResources.js.map