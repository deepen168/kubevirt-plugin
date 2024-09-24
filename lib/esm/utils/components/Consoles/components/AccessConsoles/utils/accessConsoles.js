import * as React from 'react';
export var getChildTypeName = function (child) {
    return child && child.props && child.props.type
        ? child.props.type
        : (child && child.type && child.type.displayName) || null;
};
export var getConsoleForType = function (consoleType, children) {
    return React.Children.map(children, function (child) {
        if (getChildTypeName(child) === consoleType) {
            return React.createElement(React.Fragment, { key: getChildTypeName(child) }, child);
        }
        return null;
    });
};
//# sourceMappingURL=accessConsoles.js.map