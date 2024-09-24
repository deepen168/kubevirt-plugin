export var isGuestAgentConnected = function (vmi) {
    var _a, _b;
    return (_b = (_a = vmi === null || vmi === void 0 ? void 0 : vmi.status) === null || _a === void 0 ? void 0 : _a.conditions) === null || _b === void 0 ? void 0 : _b.some(function (condition) { return (condition === null || condition === void 0 ? void 0 : condition.type) === 'AgentConnected' && (condition === null || condition === void 0 ? void 0 : condition.status) === 'True'; });
};
export var getOsNameFromGuestAgent = function (guestAgentData) {
    var _a, _b, _c, _d, _e, _f, _g;
    return ((_b = (_a = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.os) === null || _a === void 0 ? void 0 : _a.name) === null || _b === void 0 ? void 0 : _b.includes('Windows')) && ((_d = (_c = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.os) === null || _c === void 0 ? void 0 : _c.version) === null || _d === void 0 ? void 0 : _d.includes('Windows'))
        ? (_e = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.os) === null || _e === void 0 ? void 0 : _e.version
        : "".concat((_f = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.os) === null || _f === void 0 ? void 0 : _f.name, " ").concat((_g = guestAgentData === null || guestAgentData === void 0 ? void 0 : guestAgentData.os) === null || _g === void 0 ? void 0 : _g.version);
};
//# sourceMappingURL=guest-agent.js.map