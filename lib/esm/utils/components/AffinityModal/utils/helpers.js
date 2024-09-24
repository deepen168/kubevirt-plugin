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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
import { K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum, } from '@kubevirt-ui/kubevirt-api/kubevirt';
import { isEqualObject } from '@kubevirt-utils/components/NodeSelectorModal/utils/helpers';
import { isEmpty } from '@kubevirt-utils/utils/utils';
import { Operator } from '@openshift-console/dynamic-plugin-sdk';
import { AffinityCondition, AffinityType } from './types';
var setIDsToEntity = function (entity) { return entity === null || entity === void 0 ? void 0 : entity.map(function (elm, i) { return (__assign(__assign({}, elm), { id: i })); }); };
var getNodeAffinityRows = function (nodeAffinity) {
    var _a;
    var requiredTerms = ((_a = nodeAffinity === null || nodeAffinity === void 0 ? void 0 : nodeAffinity.requiredDuringSchedulingIgnoredDuringExecution) === null || _a === void 0 ? void 0 : _a.nodeSelectorTerms) || [];
    var preferredTerms = (nodeAffinity === null || nodeAffinity === void 0 ? void 0 : nodeAffinity.preferredDuringSchedulingIgnoredDuringExecution) || [];
    var required = requiredTerms.map(function (_a, i) {
        var matchExpressions = _a.matchExpressions, matchFields = _a.matchFields;
        return ({
            condition: AffinityCondition.required,
            expressions: setIDsToEntity(matchExpressions),
            fields: setIDsToEntity(matchFields),
            id: "node-required-".concat(i),
            type: AffinityType.node,
        });
    });
    var preferred = preferredTerms.map(function (_a, i) {
        var preference = _a.preference, weight = _a.weight;
        return ({
            condition: AffinityCondition.preferred,
            expressions: setIDsToEntity(preference.matchExpressions),
            fields: setIDsToEntity(preference.matchFields),
            id: "node-preferred-".concat(i),
            type: AffinityType.node,
            weight: weight,
        });
    });
    return __spreadArray(__spreadArray([], required, true), preferred, true);
};
var getPodLikeAffinityRows = function (podLikeAffinity, isAnti) {
    if (isAnti === void 0) { isAnti = false; }
    var requiredTerms = (podLikeAffinity === null || podLikeAffinity === void 0 ? void 0 : podLikeAffinity.requiredDuringSchedulingIgnoredDuringExecution) || [];
    var preferredTerms = (podLikeAffinity === null || podLikeAffinity === void 0 ? void 0 : podLikeAffinity.preferredDuringSchedulingIgnoredDuringExecution) || [];
    var required = requiredTerms === null || requiredTerms === void 0 ? void 0 : requiredTerms.map(function (podAffinityTerm, i) {
        var _a;
        return ({
            condition: AffinityCondition.required,
            expressions: setIDsToEntity((_a = podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.labelSelector) === null || _a === void 0 ? void 0 : _a.matchExpressions),
            id: isAnti ? "pod-anti-required-".concat(i) : "pod-required-".concat(i),
            namespaces: podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.namespaces,
            topologyKey: podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.topologyKey,
            type: isAnti ? AffinityType.podAnti : AffinityType.pod,
        });
    });
    var preferred = preferredTerms === null || preferredTerms === void 0 ? void 0 : preferredTerms.map(function (_a, i) {
        var _b;
        var podAffinityTerm = _a.podAffinityTerm, weight = _a.weight;
        return ({
            condition: AffinityCondition.preferred,
            expressions: setIDsToEntity((_b = podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.labelSelector) === null || _b === void 0 ? void 0 : _b.matchExpressions),
            id: isAnti ? "pod-anti-preferred-".concat(i) : "pod-preferred-".concat(i),
            namespaces: podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.namespaces,
            topologyKey: podAffinityTerm === null || podAffinityTerm === void 0 ? void 0 : podAffinityTerm.topologyKey,
            type: isAnti ? AffinityType.podAnti : AffinityType.pod,
            weight: weight,
        });
    });
    return __spreadArray(__spreadArray([], required, true), preferred, true);
};
export var getRowsDataFromAffinity = function (affinity) { return __spreadArray(__spreadArray(__spreadArray([], getNodeAffinityRows(affinity === null || affinity === void 0 ? void 0 : affinity.nodeAffinity), true), getPodLikeAffinityRows(affinity === null || affinity === void 0 ? void 0 : affinity.podAffinity), true), getPodLikeAffinityRows(affinity === null || affinity === void 0 ? void 0 : affinity.podAntiAffinity, true), true); };
var flattenExpressions = function (affinityLabels) {
    return affinityLabels === null || affinityLabels === void 0 ? void 0 : affinityLabels.map(function (aff) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        var id = aff.id, affinityWithoutID = __rest(aff, ["id"]);
        var affinityRequirement = __assign({}, affinityWithoutID);
        return aff.operator === K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.Exists ||
            aff.operator === K8sIoApiCoreV1NodeSelectorRequirementOperatorEnum.DoesNotExist
            ? __assign(__assign({}, affinityRequirement), { values: [] }) : affinityRequirement;
    });
};
var getRequiredNodeTermFromRowData = function (_a) {
    var expressions = _a.expressions, fields = _a.fields;
    return ({
        matchExpressions: flattenExpressions(expressions),
        matchFields: flattenExpressions(fields),
    });
};
var getPreferredNodeTermFromRowData = function (_a) {
    var expressions = _a.expressions, fields = _a.fields, weight = _a.weight;
    return ({
        preference: {
            matchExpressions: flattenExpressions(expressions),
            matchFields: flattenExpressions(fields),
        },
        weight: weight,
    });
};
var getRequiredPodTermFromRowData = function (_a) {
    var expressions = _a.expressions, topologyKey = _a.topologyKey;
    return ({
        labelSelector: {
            matchExpressions: flattenExpressions(expressions),
        },
        topologyKey: topologyKey,
    });
};
var getPreferredPodTermFromRowData = function (_a) {
    var expressions = _a.expressions, topologyKey = _a.topologyKey, weight = _a.weight;
    return ({
        podAffinityTerm: {
            labelSelector: {
                matchExpressions: flattenExpressions(expressions),
            },
            topologyKey: topologyKey,
        },
        weight: weight,
    });
};
export var getAffinityFromRowsData = function (affinityRows) {
    if (affinityRows.length === 0) {
        return null;
    }
    var pickRows = function (rowType, rowCondition, mapper) {
        return affinityRows
            .filter(function (_a) {
            var condition = _a.condition, type = _a.type;
            return type === rowType && condition === rowCondition;
        })
            .map(function (rowData) { return mapper(rowData); });
    };
    var affinity = {};
    var nodeSelectorTermsRequired = pickRows(AffinityType.node, AffinityCondition.required, getRequiredNodeTermFromRowData);
    var nodeSelectorTermsPreffered = pickRows(AffinityType.node, AffinityCondition.preferred, getPreferredNodeTermFromRowData);
    var podAffinityTermsRequired = pickRows(AffinityType.pod, AffinityCondition.required, getRequiredPodTermFromRowData);
    var podAffinityTermsPreffered = pickRows(AffinityType.pod, AffinityCondition.preferred, getPreferredPodTermFromRowData);
    var antiPodAffinityTermsRequired = pickRows(AffinityType.podAnti, AffinityCondition.required, getRequiredPodTermFromRowData);
    var antiPodAffinityTermsPreffered = pickRows(AffinityType.podAnti, AffinityCondition.preferred, getPreferredPodTermFromRowData);
    if (!isEmpty(nodeSelectorTermsRequired)) {
        affinity.nodeAffinity = {
            requiredDuringSchedulingIgnoredDuringExecution: {
                nodeSelectorTerms: nodeSelectorTermsRequired,
            },
        };
    }
    if (!isEmpty(nodeSelectorTermsPreffered)) {
        affinity.nodeAffinity = {
            preferredDuringSchedulingIgnoredDuringExecution: nodeSelectorTermsPreffered,
        };
    }
    if (!isEmpty(podAffinityTermsRequired)) {
        affinity.podAffinity = {
            requiredDuringSchedulingIgnoredDuringExecution: podAffinityTermsRequired,
        };
    }
    if (!isEmpty(podAffinityTermsPreffered)) {
        affinity.podAffinity = {
            preferredDuringSchedulingIgnoredDuringExecution: podAffinityTermsPreffered,
        };
    }
    if (!isEmpty(antiPodAffinityTermsRequired)) {
        affinity.podAntiAffinity = {
            requiredDuringSchedulingIgnoredDuringExecution: antiPodAffinityTermsRequired,
        };
    }
    if (!isEmpty(antiPodAffinityTermsPreffered)) {
        affinity.podAntiAffinity = {
            preferredDuringSchedulingIgnoredDuringExecution: antiPodAffinityTermsPreffered,
        };
    }
    return affinity;
};
export var has = function (object, key) {
    var keyParts = key.split('.');
    return (!!object &&
        (keyParts.length > 1
            ? has(object[key.split('.')[0]], keyParts.slice(1).join('.'))
            : Object.prototype.hasOwnProperty.call(object, key)));
};
export var get = function (obj, path, defaultValue) {
    if (defaultValue === void 0) { defaultValue = undefined; }
    var travel = function (regexp) {
        return String.prototype.split
            .call(path, regexp)
            .filter(Boolean)
            .reduce(function (res, key) { return (res !== null && res !== undefined ? res[key] : res); }, obj);
    };
    var result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
    return result === undefined || result === obj ? defaultValue : result;
};
export var withOperatorPredicate = function (store, label) {
    var key = label.key, operator = label.operator, values = label.values;
    switch (operator) {
        case 'Exists':
            return has(store, key);
        case 'DoesNotExist':
            return !has(store, key);
        case 'In':
            return values === null || values === void 0 ? void 0 : values.some(function (singleValue) { return get(store, key) === singleValue; });
        case 'NotIn':
            return values === null || values === void 0 ? void 0 : values.every(function (singleValue) { return get(store, key) !== singleValue; });
        default:
            return values
                ? values === null || values === void 0 ? void 0 : values.some(function (singleValue) { return get(store, key) === singleValue; })
                : get(store, key) === '';
    }
};
// this will create a union array from 2 arrays of objects
export var unionWith = function (objects, others) {
    return objects.concat(others.filter(function (other) { return objects.every(function (object) { return !isEqualObject(object, other); }); }));
};
// this will create a intersection array from 2 arrays of objects
export var intersectionWith = function (objects, others) {
    return objects.filter(function (object) { return others.some(function (other) { return isEqualObject(object, other); }); });
};
export var getAvailableAffinityID = function (affinities) {
    var idSet = new Set(affinities.map(function (aff) { return aff.id; }));
    var id = 1;
    while (idSet.has(id.toString())) {
        id++;
    }
    return id.toString();
};
export var isTermsInvalid = function (terms) {
    return terms === null || terms === void 0 ? void 0 : terms.some(function (_a) {
        var key = _a.key, operator = _a.operator, values = _a.values;
        return !key || ((operator === Operator.In || operator === Operator.NotIn) && (values === null || values === void 0 ? void 0 : values.length) === 0);
    });
};
export var getIntersectedQualifiedNodes = function (_a) {
    var expressionNodes = _a.expressionNodes, expressions = _a.expressions, fieldNodes = _a.fieldNodes, fields = _a.fields;
    if (expressions.length > 0 && fields.length > 0) {
        return intersectionWith(expressionNodes, fieldNodes);
    }
    if (expressions.length > 0) {
        return expressionNodes;
    }
    if (fields.length > 0) {
        return fieldNodes;
    }
    return [];
};
//# sourceMappingURL=helpers.js.map