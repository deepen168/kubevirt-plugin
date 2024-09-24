import VirtualMachineModel from '@kubevirt-ui/kubevirt-api/console/models/VirtualMachineModel';
import { DEFAULT_NAMESPACE } from '@kubevirt-utils/constants/constants';
import { getResourceUrl } from '@kubevirt-utils/resources/shared';
jest.mock('@openshift-console/dynamic-plugin-sdk', function () { return ({
    k8sCreate: jest.fn().mockResolvedValue({}),
}); });
test('getResourceUrl', function () {
    var resource = {
        metadata: {
            name: 'vm',
            namespace: 'kube',
        },
    };
    var url = getResourceUrl({ model: VirtualMachineModel, resource: resource });
    expect(url).toBe('/k8s/ns/kube/kubevirt.io~v1~VirtualMachine/vm');
    var generalResourceURL = getResourceUrl({ model: VirtualMachineModel });
    expect(generalResourceURL).toBe('/k8s/all-namespaces/kubevirt.io~v1~VirtualMachine/');
    var nullUrl = getResourceUrl({ model: null, resource: resource });
    expect(nullUrl).toBe(null);
    var urlWithNamespace = getResourceUrl({
        activeNamespace: DEFAULT_NAMESPACE,
        model: VirtualMachineModel,
    });
    expect(urlWithNamespace).toBe("/k8s/ns/".concat(DEFAULT_NAMESPACE, "/kubevirt.io~v1~VirtualMachine/"));
});
//# sourceMappingURL=resource.test.js.map