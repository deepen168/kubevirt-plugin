import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var EndTourContent = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement(Trans, { t: t },
        "Thank you for taking the tour.",
        React.createElement("br", null),
        "Stay up-to-date with Openshift Virtualization on our",
        ' ',
        React.createElement(Link, { target: "_blank", to: "https://www.redhat.com/en/blog/channel/red-hat-openshift" }, "Blog"),
        ' ',
        "or continue to learn more in our",
        ' ',
        React.createElement(Link, { target: "_blank", to: "https://docs.openshift.com/container-platform/4.16/virt/about_virt/about-virt.html" }, "documentation"),
        "."));
};
export default EndTourContent;
//# sourceMappingURL=EndTourContent.js.map