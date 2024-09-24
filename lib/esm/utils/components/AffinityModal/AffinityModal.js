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
import * as React from 'react';
import produce from 'immer';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import TabModal from '@kubevirt-utils/components/TabModal/TabModal';
import { useKubevirtTranslation } from '@kubevirt-utils/hooks/useKubevirtTranslation';
import { getAffinity } from '@kubevirt-utils/resources/vm';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { ModalVariant } from '@patternfly/react-core';
import AffinityEditModal from './components/AffinityEditModal/AffinityEditModal';
import AffinityEmptyState from './components/AffinityEmptyState';
import AffinityList from './components/AffinityList/AffinityList';
import { useRequiredAndPrefferedQualifiedNodes } from './hooks/useRequiredAndPrefferedQualifiedNodes';
import { defaultNewAffinity } from './utils/constants';
import { getAffinityFromRowsData, getAvailableAffinityID, getRowsDataFromAffinity, } from './utils/helpers';
var AffinityModal = function (_a) {
    var isOpen = _a.isOpen, nodes = _a.nodes, nodesLoaded = _a.nodesLoaded, onClose = _a.onClose, onSubmit = _a.onSubmit, vm = _a.vm;
    var t = useKubevirtTranslation().t;
    var _b = React.useState(getRowsDataFromAffinity(getAffinity(vm))), affinities = _b[0], setAffinities = _b[1];
    var _c = React.useState(defaultNewAffinity), focusedAffinity = _c[0], setFocusedAffinity = _c[1];
    var _d = React.useState(false), isEditing = _d[0], setIsEditing = _d[1];
    var _e = React.useState(false), isCreating = _e[0], setIsCreating = _e[1];
    var _f = useRequiredAndPrefferedQualifiedNodes(nodes, nodesLoaded, affinities), qualifiedRequiredNodes = _f[0], qualifiedPreferredNodes = _f[1];
    var onAffinityAdd = function (affinity) {
        setAffinities(function (prevAffinities) { return __spreadArray(__spreadArray([], (prevAffinities || []), true), [affinity], false); });
        setIsEditing(false);
        setIsCreating(false);
    };
    var onAffinityChange = function (updatedAffinity) {
        setAffinities(function (prevAffinities) {
            return prevAffinities.map(function (affinity) {
                if (affinity.id === updatedAffinity.id)
                    return __assign(__assign({}, affinity), updatedAffinity);
                return affinity;
            });
        });
        setIsEditing(false);
    };
    var onAffinityClickAdd = function () {
        setIsEditing(true);
        setIsCreating(true);
        setFocusedAffinity(__assign(__assign({}, defaultNewAffinity), { id: getAvailableAffinityID(affinities) }));
    };
    var onAffinityClickEdit = function (affinity) {
        setFocusedAffinity(affinity);
        setIsEditing(true);
    };
    var onAffinityDelete = function (affinity) {
        return setAffinities(function (prevAffinities) { return prevAffinities.filter(function (_a) {
            var id = _a.id;
            return id !== affinity.id;
        }); });
    };
    var onCancel = function () {
        setIsEditing(false);
        setIsCreating(false);
    };
    var onSaveAffinity = isCreating ? onAffinityAdd : onAffinityChange;
    var updatedVirtualMachine = React.useMemo(function () {
        var updatedVM = produce(vm, function (vmDraft) {
            if (!vmDraft.spec.template.spec.affinity) {
                vmDraft.spec.template.spec.affinity = {};
            }
            var updatedAffinity = getAffinityFromRowsData(affinities);
            if (!isEqualObject(getAffinity(vmDraft), updatedAffinity)) {
                vmDraft.spec.template.spec.affinity = updatedAffinity;
            }
        });
        return updatedVM;
    }, [vm, affinities]);
    var list = isEmpty(affinities) ? (React.createElement(AffinityEmptyState, { onAffinityClickAdd: onAffinityClickAdd })) : (React.createElement(AffinityList, { affinities: affinities, nodesLoaded: nodesLoaded, onAffinityClickAdd: onAffinityClickAdd, onDelete: onAffinityDelete, onEdit: onAffinityClickEdit, prefferedQualifiedNodes: qualifiedPreferredNodes, qualifiedNodes: qualifiedRequiredNodes }));
    return isEditing ? (React.createElement(AffinityEditModal, { focusedAffinity: focusedAffinity, isOpen: isOpen, nodes: nodes, nodesLoaded: nodesLoaded, onCancel: onCancel, onSubmit: onSaveAffinity, setFocusedAffinity: setFocusedAffinity, title: isCreating ? t('Add affinity rule') : t('Edit affinity rule') })) : (React.createElement(TabModal, { headerText: t('Affinity rules'), isOpen: isOpen, modalVariant: ModalVariant.medium, obj: updatedVirtualMachine, onClose: onClose, onSubmit: onSubmit, submitBtnText: t('Apply rules') }, list));
};
export default AffinityModal;
//# sourceMappingURL=AffinityModal.js.map