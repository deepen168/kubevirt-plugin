import produce from 'immer';
export var serviceWithUndefinedSelectors = {
    apiVersion: 'v1',
    kind: 'Service',
    metadata: {
        creationTimestamp: '2022-05-25T02:58:54Z',
        managedFields: [
            {
                apiVersion: 'v1',
                fieldsType: 'FieldsV1',
                manager: 'dns-operator',
                operation: 'Update',
                time: '2022-05-25T02:58:54Z',
            },
        ],
        name: 'openshift',
        namespace: 'default',
        resourceVersion: '10124',
        uid: '7e5f09e1-ef35-455b-ac57-e7fa5c96b45d',
    },
    spec: {
        externalName: 'kubernetes.default.svc.cluster.local',
        internalTrafficPolicy: 'Cluster',
    },
    status: {
        loadBalancer: {},
    },
};
export var serviceWithoutSelectors = produce(serviceWithUndefinedSelectors, function (serviceDraft) {
    serviceDraft.spec.selector = {};
});
export var serviceWithoutMatchingSelectors = produce(serviceWithUndefinedSelectors, function (serviceDraft) {
    serviceDraft.spec.selector = {
        unmatchedlabel: 'fedora-proposed-rodent',
    };
});
export var serviceWithMatchingSelectors = produce(serviceWithUndefinedSelectors, function (serviceDraft) {
    serviceDraft.spec.selector = {
        'vm.kubevirt.io/name': 'fedora-proposed-rodent',
    };
});
export var vmiMock = {
    apiVersion: 'v1',
    kind: 'VirtualMachineInstance',
    metadata: {
        creationTimestamp: '2022-05-25T02:58:54Z',
        labels: {
            'vm.kubevirt.io/name': 'fedora-proposed-rodent',
        },
        name: 'fedora-proposed-rodent',
        namespace: 'default',
        resourceVersion: '10124',
        uid: '7e5f09e1-ef35-455b-ac57-e7fa5c96b45d',
    },
    spec: {
        domain: {
            cpu: {
                cores: 1,
                sockets: 1,
                threads: 1,
            },
            devices: {
                disks: [],
            },
        },
    },
};
//# sourceMappingURL=mocks.js.map