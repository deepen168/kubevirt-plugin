import React from 'react';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ResourceLink } from '@openshift-console/dynamic-plugin-sdk';
var InlineFilterSelectOptionContent = function (_a) {
    var option = _a.option;
    return !isEmpty(option === null || option === void 0 ? void 0 : option.groupVersionKind) ? (React.createElement(ResourceLink, { groupVersionKind: option.groupVersionKind, linkTo: false, name: option.value })) : (React.createElement(React.Fragment, null, option === null || option === void 0 ? void 0 : option.children));
};
export default InlineFilterSelectOptionContent;
//# sourceMappingURL=InlineFilterSelectOptionContent.js.map