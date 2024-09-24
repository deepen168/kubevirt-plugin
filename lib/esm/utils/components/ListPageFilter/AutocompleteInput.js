import React, { useMemo, useState } from 'react';
import classNames from 'classnames';
import { useDocumentListener } from './hooks/useDocumentListener';
import { MAX_SUGGESTIONS, suggestionBoxKeyHandler } from './constants';
import SearchFilter from './SearchFilter';
import SuggestionLine from './SuggestionLine';
import { fuzzyCaseInsensitive, labelParser } from './utils';
var AutocompleteInput = function (_a) {
    var className = _a.className, data = _a.data, onSuggestionSelect = _a.onSuggestionSelect, placeholder = _a.placeholder, setTextValue = _a.setTextValue, textValue = _a.textValue;
    var _b = useState(), suggestions = _b[0], setSuggestions = _b[1];
    var _c = useDocumentListener(suggestionBoxKeyHandler), ref = _c.ref, setVisible = _c.setVisible, visible = _c.visible;
    var processedData = useMemo(function () { return Array.from(labelParser(data)); }, [data]);
    var onSelect = function (value) {
        onSuggestionSelect(value);
        setVisible(false);
    };
    var handleInput = function (input) {
        setTextValue(input);
        setVisible(true);
        // User input without whitespace
        var processedText = input.trim().replace(/\s*=\s*/, '=');
        var filtered = processedData
            .filter(function (item) { return fuzzyCaseInsensitive(processedText, item); })
            .slice(0, MAX_SUGGESTIONS);
        setSuggestions(filtered);
    };
    return (React.createElement("div", { className: "co-suggestion-box", ref: ref },
        React.createElement(SearchFilter, { onChange: function (_, input) { return handleInput(input); }, placeholder: placeholder, value: textValue }),
        visible && (React.createElement("div", { className: classNames('co-suggestion-box__suggestions', {
                'co-suggestion-box__suggestions--shadowed': (suggestions === null || suggestions === void 0 ? void 0 : suggestions.length) > 0,
            }) }, suggestions === null || suggestions === void 0 ? void 0 : suggestions.map(function (elem) { return (React.createElement(SuggestionLine, { className: className, key: elem, onClick: onSelect, suggestion: elem })); })))));
};
export default AutocompleteInput;
//# sourceMappingURL=AutocompleteInput.js.map