import React from 'react';
import { Link } from 'react-router-dom-v5-compat';
import { OS_IMAGE_LINKS, OS_NAME_TYPES } from '@kubevirt-utils/resources/template';
import { urlSourceHelperTextMapper } from './utils/constants';
var URLSourceHelperText = function (_a) {
    var os = _a.os;
    var _b = urlSourceHelperTextMapper[os || OS_NAME_TYPES.fedora], afterLabelText = _b.afterLabelText, beforeLabelText = _b.beforeLabelText, label = _b.label;
    return (React.createElement(React.Fragment, null,
        beforeLabelText,
        React.createElement("strong", null,
            React.createElement(Link, { rel: "noreferrer", target: "_blank", to: OS_IMAGE_LINKS[os || OS_NAME_TYPES.fedora] }, label)),
        afterLabelText));
};
export default URLSourceHelperText;
//# sourceMappingURL=URLSourceHelperText.js.map