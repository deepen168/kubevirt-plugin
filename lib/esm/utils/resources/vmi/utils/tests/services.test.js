import { getServicesForVmi } from '../services';
import { serviceWithMatchingSelectors, serviceWithoutMatchingSelectors, serviceWithoutSelectors, serviceWithUndefinedSelectors, vmiMock, } from './mocks';
describe('Test getServicesForVmi', function () {
    it('No services', function () {
        var _a;
        var services = [];
        var vmi = vmiMock;
        var result = getServicesForVmi(services, (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.labels);
        expect(result).toEqual([]);
    });
    it('Services with undefined selectors', function () {
        var _a;
        var services = [serviceWithUndefinedSelectors];
        var vmi = vmiMock;
        var result = getServicesForVmi(services, (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.labels);
        expect(result).toEqual([]);
    });
    it('Services without selectors', function () {
        var _a;
        var services = [serviceWithoutSelectors];
        var vmi = vmiMock;
        var result = getServicesForVmi(services, (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.labels);
        expect(result).toEqual([]);
    });
    it('No services with matching selectors', function () {
        var _a;
        var services = [serviceWithoutMatchingSelectors];
        var vmi = vmiMock;
        var result = getServicesForVmi(services, (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.labels);
        expect(result).toEqual([]);
    });
    it('Services with matching selectors', function () {
        var _a;
        var services = [serviceWithMatchingSelectors];
        var vmi = vmiMock;
        var result = getServicesForVmi(services, (_a = vmi === null || vmi === void 0 ? void 0 : vmi.metadata) === null || _a === void 0 ? void 0 : _a.labels);
        expect(result).toEqual([serviceWithMatchingSelectors]);
    });
});
//# sourceMappingURL=services.test.js.map