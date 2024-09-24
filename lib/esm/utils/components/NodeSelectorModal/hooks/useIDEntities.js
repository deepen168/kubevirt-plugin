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
export var useIDEntities = function (initialEntities) {
    if (initialEntities === void 0) { initialEntities = []; }
    var _a = React.useState(initialEntities), entities = _a[0], setEntities = _a[1];
    var _b = React.useState(false), initialEntitiesChanged = _b[0], setInitialEntitiesChanged = _b[1];
    var onEntityAdd = React.useCallback(function (newEntity) {
        var _a;
        setInitialEntitiesChanged(true);
        var id = ((_a = entities[entities.length - 1]) === null || _a === void 0 ? void 0 : _a.id) + 1 || 0;
        setEntities(__spreadArray(__spreadArray([], entities, true), [__assign(__assign({}, newEntity), { id: id })], false));
    }, [entities]);
    var onEntityChange = React.useCallback(function (updatedEntity) {
        setInitialEntitiesChanged(true);
        setEntities(entities.map(function (entity) {
            if (entity.id === updatedEntity.id) {
                return updatedEntity;
            }
            return entity;
        }));
    }, [entities]);
    var onEntityDelete = React.useCallback(function (idToDelete) {
        setInitialEntitiesChanged(true);
        setEntities(entities.filter(function (_a) {
            var id = _a.id;
            return id !== idToDelete;
        }));
    }, [entities]);
    return {
        entities: entities,
        initialEntitiesChanged: initialEntitiesChanged,
        onEntityAdd: onEntityAdd,
        onEntityChange: onEntityChange,
        onEntityDelete: onEntityDelete,
        setEntities: setEntities,
    };
};
//# sourceMappingURL=useIDEntities.js.map