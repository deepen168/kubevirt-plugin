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
import { generateAlertId } from '@kubevirt-utils/utils/prometheus';
export var addAlertIdToRule = function (group, rule) {
    return __assign(__assign({}, rule), { id: generateAlertId(group, rule) });
};
export var getAlertsAndRules = function (data) {
    // Flatten the rules data to make it easier to work with, discard non-alerting rules since those
    // are the only ones we will be using and add a unique ID to each rule.
    var groups = data === null || data === void 0 ? void 0 : data.groups;
    var rules = groups === null || groups === void 0 ? void 0 : groups.flatMap(function (group) {
        var _a, _b;
        return (_b = (_a = group === null || group === void 0 ? void 0 : group.rules) === null || _a === void 0 ? void 0 : _a.filter(function (rule) { return (rule === null || rule === void 0 ? void 0 : rule.type) === 'alerting'; })) === null || _b === void 0 ? void 0 : _b.map(function (rule) { return addAlertIdToRule(group, rule); });
    });
    // Add rule object to each alert
    var alerts = rules === null || rules === void 0 ? void 0 : rules.flatMap(function (rule) { var _a; return (_a = rule === null || rule === void 0 ? void 0 : rule.alerts) === null || _a === void 0 ? void 0 : _a.map(function (alert) { return (__assign({ rule: rule }, alert)); }); });
    return { alerts: alerts, rules: rules };
};
export var isSilenced = function (alert, silence) {
    var _a;
    return ["firing" /* AlertStates.Firing */, "silenced" /* AlertStates.Silenced */].includes(alert.state) &&
        ((_a = silence === null || silence === void 0 ? void 0 : silence.matchers) === null || _a === void 0 ? void 0 : _a.every(function (matcher) {
            var _a;
            var alertValue = ((_a = alert === null || alert === void 0 ? void 0 : alert.labels) === null || _a === void 0 ? void 0 : _a[matcher.name]) || '';
            var isMatch = matcher.isRegex
                ? new RegExp("^".concat(matcher.value, "$")).test(alertValue)
                : alertValue === matcher.value;
            return matcher.isEqual === false && alertValue ? !isMatch : isMatch;
        }));
};
var getSilencesForAlert = function (alert, activeSilences) {
    return activeSilences === null || activeSilences === void 0 ? void 0 : activeSilences.filter(function (silence) { return isSilenced(alert, silence); });
};
var getSilencesForRule = function (alert, activeSilences) {
    return activeSilences === null || activeSilences === void 0 ? void 0 : activeSilences.filter(function (silence) { var _a, _b; return (_b = (_a = alert === null || alert === void 0 ? void 0 : alert.rule) === null || _a === void 0 ? void 0 : _a.alerts) === null || _b === void 0 ? void 0 : _b.some(function (ruleAlert) { return isSilenced(ruleAlert, silence); }); });
};
var setRuleAlertsState = function (alert) {
    var _a, _b;
    return (_b = (_a = alert === null || alert === void 0 ? void 0 : alert.rule) === null || _a === void 0 ? void 0 : _a.alerts) === null || _b === void 0 ? void 0 : _b.forEach(function (ruleAlert) {
        var _a;
        if ((_a = alert === null || alert === void 0 ? void 0 : alert.silencedBy) === null || _a === void 0 ? void 0 : _a.some(function (silence) { return isSilenced(ruleAlert, silence); })) {
            ruleAlert.state = "silenced" /* AlertStates.Silenced */;
        }
    });
};
var alertIsSilenced = function (alert) { var _a; return ((_a = alert === null || alert === void 0 ? void 0 : alert.silencedBy) === null || _a === void 0 ? void 0 : _a.length) > 0; };
var allRuleAlertsAreSilenced = function (alert) { var _a, _b; return (_b = (_a = alert === null || alert === void 0 ? void 0 : alert.rule) === null || _a === void 0 ? void 0 : _a.alerts) === null || _b === void 0 ? void 0 : _b.every(function (rulesAlert) { return rulesAlert.state === "silenced" /* AlertStates.Silenced */; }); };
/**
 *  For each firing alert, store a list of the Silences that
 *  are silencing it and set its state to show it is silenced
 * @param alerts All alerts in the cluster
 * @param silences All silences in the cluster
 */
export var silenceFiringAlerts = function (alerts, silences) {
    var activeSilences = silences === null || silences === void 0 ? void 0 : silences.filter(function (silence) { var _a; return ((_a = silence === null || silence === void 0 ? void 0 : silence.status) === null || _a === void 0 ? void 0 : _a.state) === "active" /* SilenceStates.Active */; });
    return alerts === null || alerts === void 0 ? void 0 : alerts.map(function (alert) {
        // Skip alerts non-firing alerts
        if ((alert === null || alert === void 0 ? void 0 : alert.state) !== "firing" /* AlertStates.Firing */) {
            return alert;
        }
        alert.silencedBy = getSilencesForAlert(alert, activeSilences);
        if (alertIsSilenced(alert)) {
            alert.state = "silenced" /* AlertStates.Silenced */;
            setRuleAlertsState(alert);
            if (allRuleAlertsAreSilenced(alert)) {
                alert.rule.state = "silenced" /* RuleStates.Silenced */;
                alert.rule.silencedBy = getSilencesForRule(alert, activeSilences);
            }
        }
        return alert;
    });
};
//# sourceMappingURL=utils.js.map