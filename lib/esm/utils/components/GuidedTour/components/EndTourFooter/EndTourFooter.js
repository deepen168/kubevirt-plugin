import React from 'react';
import { Trans } from 'react-i18next';
import { Link } from 'react-router-dom-v5-compat';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
var EndTourFooter = function () {
    var t = useKubevirtTranslation().t;
    return (React.createElement("div", { className: "kv-tour-popover__feedback-footer" },
        React.createElement(Trans, { t: t },
            "We hope you found this tour helpful.",
            React.createElement("br", null),
            "If you have any",
            ' ',
            React.createElement(Link, { target: "_blank", to: 'mailto:uxdresearch@redhat.com' }, "feedback"),
            ", we would appreciate hearing from you.")));
};
export default EndTourFooter;
//# sourceMappingURL=EndTourFooter.js.map