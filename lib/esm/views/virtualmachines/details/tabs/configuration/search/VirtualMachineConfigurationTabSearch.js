var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom-v5-compat';
import { useLocation } from 'react-router-dom-v5-compat';
import MutedTextSpan from '@kubevirt-utils/components/MutedTextSpan/MutedTextSpan';
import useEventListener from '@kubevirt-utils/hooks/useEventListener';
import { t } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Bullseye, Icon, Menu, MenuContent, MenuItem, MenuList, Popper, SearchInput, Title, } from '@patternfly/react-core';
import { SearchIcon } from '@patternfly/react-icons';
import { getSearchItems } from '../utils/search';
import { createConfigurationSearchURL } from './utils/utils';
import './virtual-machine-configuration-tab-search.scss';
var VirtualMachineConfigurationTabSearch = function (_a) {
    var vm = _a.vm;
    var searchItems = useMemo(function () { return getSearchItems(vm); }, [vm]);
    var _b = useState(''), value = _b[0], setValue = _b[1];
    var navigate = useNavigate();
    var location = useLocation();
    var _c = useState(searchItems), autocompleteOptions = _c[0], setAutocompleteOptions = _c[1];
    var _d = useState(false), isAutocompleteOpen = _d[0], setIsAutocompleteOpen = _d[1];
    useEventListener('click', function () { return setIsAutocompleteOpen(false); });
    var onClear = function () {
        setValue('');
    };
    // Every click on item set and render as its pushing new url - this is for keeping the select item in search bar
    useEffect(function () {
        var _a;
        var hash = location === null || location === void 0 ? void 0 : location.hash;
        var item = searchItems === null || searchItems === void 0 ? void 0 : searchItems.find(function (_a) {
            var element = _a.element;
            return (element === null || element === void 0 ? void 0 : element.id) === hash.substring(1);
        });
        setValue(((_a = item === null || item === void 0 ? void 0 : item.element) === null || _a === void 0 ? void 0 : _a.title) || '');
    }, [location.hash, searchItems]);
    var onChange = function (_e, newValue) {
        setIsAutocompleteOpen(true);
        setValue(newValue);
        var isEmptyValue = isEmpty(newValue);
        var options = !isEmptyValue &&
            searchItems.reduce(function (acc, item) {
                var title = item.element.title.toLowerCase();
                var match = newValue.toLowerCase();
                if (item.element.isDisabled)
                    return acc;
                if (title.startsWith(match)) {
                    acc.startWith.push(item);
                    return acc;
                }
                if (title.includes(match))
                    acc.includes.push(item);
                return acc;
            }, { includes: [], startWith: [] });
        var autoCompleteOptions = options && __spreadArray(__spreadArray([], options.startWith, true), options.includes, true).flat().slice(0, 9);
        setAutocompleteOptions(isEmptyValue ? searchItems : autoCompleteOptions);
    };
    var onSelect = function (e, itemId) {
        e.stopPropagation();
        setValue(itemId);
        setIsAutocompleteOpen(false);
    };
    useEffect(function () {
        setAutocompleteOptions(getSearchItems(vm));
    }, [vm]);
    return (React.createElement(Popper, { popper: React.createElement(Menu, { isScrollable: true, onSelect: onSelect },
            React.createElement(MenuContent, null,
                React.createElement(MenuList, null,
                    autocompleteOptions.map(function (_a) {
                        var element = _a.element, tab = _a.tab;
                        return (React.createElement(MenuItem, { onClick: function () {
                                return navigate(createConfigurationSearchURL(tab, element === null || element === void 0 ? void 0 : element.id, location === null || location === void 0 ? void 0 : location.pathname));
                            }, description: element === null || element === void 0 ? void 0 : element.description, itemId: element === null || element === void 0 ? void 0 : element.title, key: element === null || element === void 0 ? void 0 : element.id }, element === null || element === void 0 ? void 0 : element.title));
                    }),
                    isEmpty(autocompleteOptions) && (React.createElement(Bullseye, { className: "VirtualMachineConfigurationTabSearch--main__no-results" },
                        React.createElement(Icon, { color: "grey", size: "xl" },
                            React.createElement(SearchIcon, null)),
                        React.createElement(Title, { headingLevel: "h5" },
                            React.createElement(MutedTextSpan, { text: t('No configurable settings found') }))))))), trigger: React.createElement(SearchInput, { className: "VirtualMachineConfigurationTabSearch--main", id: "VirtualMachineConfigurationTabSearch-autocomplete-search", onChange: onChange, onClear: onClear, value: value }), isVisible: isAutocompleteOpen }));
};
export default VirtualMachineConfigurationTabSearch;
//# sourceMappingURL=VirtualMachineConfigurationTabSearch.js.map