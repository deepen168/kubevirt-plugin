import React from 'react';
var SuggestionLine = function (_a) {
    var className = _a.className, onClick = _a.onClick, suggestion = _a.suggestion;
    return (React.createElement("button", { className: "co-suggestion-line", onClick: function () { return onClick(suggestion); } },
        React.createElement("span", { className: className }, suggestion)));
};
export default SuggestionLine;
//# sourceMappingURL=SuggestionLine.js.map