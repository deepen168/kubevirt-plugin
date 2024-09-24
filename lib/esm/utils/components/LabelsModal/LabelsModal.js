var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { memo, useMemo, useState, } from 'react';
import TagsInput from 'react-tagsinput';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Label as PFLabel, Stack, StackItem, Truncate } from '@patternfly/react-core';
import { isLabelValid, labelsArrayToObject, labelsToArray } from './utils';
import './LabelsModal.scss';
export var LabelsModal = memo(function (_a) {
    var _b;
    var _c;
    var initialLabels = _a.initialLabels, isOpen = _a.isOpen, labelClassName = _a.labelClassName, modalDescriptionText = _a.modalDescriptionText, obj = _a.obj, onClose = _a.onClose, onLabelsSubmit = _a.onLabelsSubmit;
    var t = useKubevirtTranslation().t;
    var _d = useState(''), inputValue = _d[0], setInputValue = _d[1];
    var _e = useState(true), isInputValid = _e[0], setIsInputValid = _e[1];
    var initLabels = useMemo(function () {
        var _a, _b;
        if (!isEmpty(initialLabels))
            return initialLabels;
        if (!isEmpty((_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.labels))
            return (_b = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _b === void 0 ? void 0 : _b.labels;
        return {};
    }, [initialLabels, (_c = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _c === void 0 ? void 0 : _c.labels]);
    var _f = useState(labelsToArray(initLabels)), labels = _f[0], setLabels = _f[1];
    var onInputChange = function (e) {
        var value = e.target.value;
        if (value === '') {
            setInputValue(value);
            setIsInputValid(true);
            return;
        }
        setInputValue(value);
        setIsInputValid(isLabelValid(value));
    };
    var handleLabelsChange = function (newLabels, changed) {
        var newLabel = changed[0];
        if (!isLabelValid(newLabel)) {
            setIsInputValid(false);
            return;
        }
        // duplicate labels
        if (newLabels.filter(function (l) { return l === newLabel; }).length > 1) {
            setIsInputValid(false);
            return;
        }
        // if key exists, overwrite value
        if (newLabels.filter(function (l) { return l.split('=')[0] === newLabel.split('=')[0]; }).length > 1) {
            var filteredLabels = newLabels.filter(function (l) { return l.split('=')[0] !== newLabel.split('=')[0]; });
            setLabels(__spreadArray(__spreadArray([], filteredLabels, true), [newLabel], false));
            setInputValue('');
            return;
        }
        setLabels(newLabels);
        setInputValue('');
    };
    var renderTag = function (_a) {
        var getTagDisplayValue = _a.getTagDisplayValue, key = _a.key, onRemove = _a.onRemove, tag = _a.tag;
        return (React.createElement(PFLabel, { className: 'co-label tag-item-content'.concat(labelClassName || ''), key: key, onClose: function () { return onRemove(key); } },
            React.createElement(Truncate, { content: getTagDisplayValue(tag) })));
    };
    var inputProps = (_b = {
            autoFocus: true,
            className: 'input'.concat(isInputValid ? '' : ' invalid-tag')
        },
        _b['data-test'] = 'tags-input',
        _b.id = 'tags-input',
        _b.onChange = onInputChange,
        _b.placeholder = labels.length === 0 ? 'app=frontend' : '',
        _b.spellCheck = 'false',
        _b.value = inputValue,
        _b);
    // Keys that add tags: Enter
    var addKeys = [13];
    // Backspace deletes tags, but not if there is text being edited in the input field
    var removeKeys = inputValue.length ? [] : [8];
    return (React.createElement(TabModal, { headerText: t('Edit labels'), isOpen: isOpen, obj: obj, onClose: onClose, onSubmit: function () { return onLabelsSubmit(labelsArrayToObject(labels)); } },
        React.createElement(Stack, { hasGutter: true },
            React.createElement(StackItem, null, modalDescriptionText !== null && modalDescriptionText !== void 0 ? modalDescriptionText : t('Labels help you organize and select resources. Adding labels below will let you query for objects that have similar, overlapping or dissimilar labels.')),
            React.createElement(StackItem, null,
                React.createElement("div", { className: "kv-labels-modal-body" },
                    React.createElement("tags-input", null,
                        React.createElement(TagsInput, { addKeys: addKeys, addOnBlur: true, className: "tags", inputProps: inputProps, onChange: handleLabelsChange, removeKeys: removeKeys, renderTag: renderTag, value: labels })))))));
});
//# sourceMappingURL=LabelsModal.js.map