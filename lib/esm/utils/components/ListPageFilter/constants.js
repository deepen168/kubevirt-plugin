var _a;
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
export var STATIC_SEARCH_FILTERS = {
    labels: 'labels',
    name: 'name',
};
export var STATIC_SEARCH_FILTERS_LABELS = {
    labels: t('Labels'),
    name: t('Name'),
};
export var STATIC_SEARCH_FILTERS_PLACEHOLDERS = {
    labels: t('Search by labels...'),
    name: t('Search by name...'),
};
export var MAX_SUGGESTIONS = 5;
var KEYBOARD_SHORTCUTS = {
    blurFilterInput: 'Escape',
    focusFilterInput: '/',
    focusNamespaceDropdown: 'n',
};
export var KeyEventModes;
(function (KeyEventModes) {
    KeyEventModes["FOCUS"] = "FOCUS";
    KeyEventModes["HIDE"] = "HIDE";
})(KeyEventModes || (KeyEventModes = {}));
export var textInputKeyHandler = (_a = {},
    _a[KEYBOARD_SHORTCUTS.blurFilterInput] = KeyEventModes.HIDE,
    _a[KEYBOARD_SHORTCUTS.focusFilterInput] = KeyEventModes.FOCUS,
    _a);
export var suggestionBoxKeyHandler = {
    Escape: KeyEventModes.HIDE,
};
//# sourceMappingURL=constants.js.map