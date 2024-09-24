export var AffinityType;
(function (AffinityType) {
    AffinityType["node"] = "nodeAffinity";
    AffinityType["pod"] = "podAffinity";
    AffinityType["podAnti"] = "podAntiAffinity";
})(AffinityType || (AffinityType = {}));
export var AffinityCondition;
(function (AffinityCondition) {
    AffinityCondition["preferred"] = "preferredDuringSchedulingIgnoredDuringExecution";
    AffinityCondition["required"] = "requiredDuringSchedulingIgnoredDuringExecution";
})(AffinityCondition || (AffinityCondition = {}));
//# sourceMappingURL=types.js.map