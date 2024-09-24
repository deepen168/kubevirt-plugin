var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React, { useEffect, useState } from 'react';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { Button, Grid } from '@patternfly/react-core';
import { PlusCircleIcon } from '@patternfly/react-icons';
import { AnnotationsModalRow } from './AnnotationsModalRow';
import './AnnotationsModal.scss';
var getIdAnnotations = function (annotations) {
    return Object.fromEntries(Object.entries(annotations).map(function (_a, i) {
        var key = _a[0], value = _a[1];
        return [i, { key: key, value: value }];
    }));
};
export var AnnotationsModal = function (_a) {
    var isOpen = _a.isOpen, obj = _a.obj, onClose = _a.onClose, onSubmit = _a.onSubmit;
    var t = useKubevirtTranslation().t;
    var _b = useState({}), annotations = _b[0], setAnnotations = _b[1];
    var onAnnotationAdd = function () {
        var _a;
        var keys = new Set(__spreadArray([], Object.keys(annotations), true));
        var index = 0;
        while (keys.has(index.toString())) {
            index++;
        }
        setAnnotations(__assign(__assign({}, annotations), (_a = {}, _a[index] = {
            key: '',
            value: '',
        }, _a)));
    };
    var onAnnotationsSubmit = function () {
        var uniqWith = function (arr, fn) {
            return arr.filter(function (element, index) { return arr.findIndex(function (step) { return fn(element, step); }) === index; });
        };
        if (uniqWith(Object.values(annotations), function (a, b) { return a.key === b.key; }).length !==
            Object.values(annotations).length) {
            return Promise.reject({ message: t('Duplicate keys found') });
        }
        var updatedAnnotations = Object.fromEntries(Object.entries(annotations).map(function (_a) {
            var _b = _a[1], key = _b.key, value = _b.value;
            return [key, value];
        }));
        return onSubmit(updatedAnnotations);
    };
    // reset annotations when modal is closed
    useEffect(function () {
        var _a;
        if ((_a = obj === null || obj === void 0 ? void 0 : obj.metadata) === null || _a === void 0 ? void 0 : _a.annotations) {
            setAnnotations(getIdAnnotations(obj.metadata.annotations));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);
    return (React.createElement(TabModal, { headerText: t('Edit annotations'), isOpen: isOpen, obj: obj, onClose: onClose, onSubmit: onAnnotationsSubmit },
        React.createElement(Grid, { hasGutter: true },
            Object.entries(annotations || {}).map(function (_a) {
                var id = _a[0], _b = _a[1], key = _b.key, value = _b.value;
                return (React.createElement(AnnotationsModalRow, { onChange: function (annotation) {
                        var _a;
                        return setAnnotations(__assign(__assign({}, annotations), (_a = {}, _a[id] = annotation, _a)));
                    }, onDelete: function () {
                        return setAnnotations(Object.fromEntries(Object.entries(annotations).filter(function (_a) {
                            var k = _a[0];
                            return k !== id;
                        })));
                    }, annotation: { key: key, value: value }, key: id }));
            }),
            React.createElement("div", { className: "co-toolbar__group co-toolbar__group--left" },
                React.createElement(Button, { className: "pf-m-link--align-left", icon: React.createElement(PlusCircleIcon, null), onClick: function () { return onAnnotationAdd(); }, size: "sm", variant: "link" }, t('Add more'))))));
};
//# sourceMappingURL=AnnotationsModal.js.map