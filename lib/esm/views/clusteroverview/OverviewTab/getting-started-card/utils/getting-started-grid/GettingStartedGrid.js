import React, { useState } from 'react';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Card, CardBody, CardHeader, ExpandableSection, Title, TitleSizes, Tooltip, } from '@patternfly/react-core';
import { OutlinedQuestionCircleIcon } from '@patternfly/react-icons';
import './GettingStartedGrid.scss';
export var GettingStartedGrid = function (_a) {
    var children = _a.children;
    var t = useKubevirtTranslation().t;
    var _b = useState(true), isExpanded = _b[0], setIsExpanded = _b[1];
    var title = t('Getting started resources');
    var titleTooltip = t('Use our collection of resources to help you get started with virtualization.');
    return (React.createElement(Card, { className: "kv-getting-started-grid", "data-test": "getting-started" },
        React.createElement(ExpandableSection, { toggleContent: React.createElement(Title, { "data-test": "title", headingLevel: "h2", id: "tour-step-resources", size: TitleSizes.lg },
                title,
                ' ',
                React.createElement(Tooltip, { className: "kv-getting-started-grid__tooltip", content: titleTooltip },
                    React.createElement("span", { "aria-label": t('More info'), className: "kv-getting-started-grid__tooltip-icon", role: "button" },
                        React.createElement(OutlinedQuestionCircleIcon, null)))), className: "kv-getting-started-grid__expandable pf-m-display-lg", isExpanded: isExpanded, onToggle: function (_, expand) { return setIsExpanded(expand); } },
            React.createElement(CardHeader, { className: "kv-getting-started-grid__header" }),
            React.createElement(CardBody, { className: "kv-getting-started-grid__content" }, children))));
};
//# sourceMappingURL=GettingStartedGrid.js.map