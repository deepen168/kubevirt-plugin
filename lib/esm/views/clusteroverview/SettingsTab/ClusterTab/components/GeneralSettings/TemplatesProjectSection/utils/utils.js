var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import HyperConvergedModel from '@kubevirt-ui/kubevirt-api/console/models/HyperConvergedModel';
import { TemplateModel } from '@kubevirt-utils/models';
import { k8sDelete, k8sGet, k8sPatch } from '@openshift-console/dynamic-plugin-sdk';
var TYPE_LABEL = 'template.kubevirt.io/type';
var BASE = 'base';
export var OPENSHIFT = 'openshift';
export var getCurrentTemplatesNamespaceFromHCO = function (hyperConverged) { var _a; return ((_a = hyperConverged === null || hyperConverged === void 0 ? void 0 : hyperConverged.spec) === null || _a === void 0 ? void 0 : _a.commonTemplatesNamespace) || OPENSHIFT; };
export var updateHCOCommonTemplatesNamespace = function (hyperConverged, newNamespace, handelError, handleLoading) { return __awaiter(void 0, void 0, void 0, function () {
    var currentTemplatesNamespace, templates, commonTemplates, templatesDeletePromisesArray, error_1;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                currentTemplatesNamespace = getCurrentTemplatesNamespaceFromHCO(hyperConverged);
                if (!(newNamespace !== currentTemplatesNamespace)) return [3 /*break*/, 7];
                handleLoading(true);
                _b.label = 1;
            case 1:
                _b.trys.push([1, 5, 6, 7]);
                return [4 /*yield*/, k8sPatch({
                        data: [
                            {
                                op: 'replace',
                                path: "/spec/commonTemplatesNamespace",
                                value: newNamespace === OPENSHIFT ? null : newNamespace,
                            },
                        ],
                        model: HyperConvergedModel,
                        resource: hyperConverged,
                    })];
            case 2:
                _b.sent();
                return [4 /*yield*/, k8sGet({
                        model: TemplateModel,
                        ns: currentTemplatesNamespace,
                    })];
            case 3:
                templates = _b.sent();
                commonTemplates = (_a = templates === null || templates === void 0 ? void 0 : templates.items) === null || _a === void 0 ? void 0 : _a.filter(function (template) { var _a, _b; return ((_b = (_a = template === null || template === void 0 ? void 0 : template.metadata) === null || _a === void 0 ? void 0 : _a.labels) === null || _b === void 0 ? void 0 : _b[TYPE_LABEL]) === BASE; });
                templatesDeletePromisesArray = commonTemplates === null || commonTemplates === void 0 ? void 0 : commonTemplates.map(function (template) {
                    return k8sDelete({
                        model: TemplateModel,
                        resource: template,
                    });
                });
                return [4 /*yield*/, Promise.all(templatesDeletePromisesArray)];
            case 4:
                _b.sent();
                return [3 /*break*/, 7];
            case 5:
                error_1 = _b.sent();
                handelError((error_1 === null || error_1 === void 0 ? void 0 : error_1.message) || error_1);
                return [3 /*break*/, 7];
            case 6:
                handleLoading(false);
                return [7 /*endfinally*/];
            case 7: return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=utils.js.map