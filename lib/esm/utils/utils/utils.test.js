import { ensurePath } from '@kubevirt-utils/utils/utils';
describe('Test ensurePath', function () {
    describe('Only one path', function () {
        it('Non existing path', function () {
            var data = {
                metadata: {
                    name: 'test-virtual-machine',
                },
                spec: {
                    template: {},
                },
            };
            ensurePath(data, 'spec.template.spec.domain.devices');
            expect(data.spec.template.spec.domain.devices).toBeDefined();
        });
        it('Existing path', function () {
            var data = {
                metadata: {
                    name: 'test-virtual-machine',
                },
                spec: {
                    template: {},
                },
            };
            ensurePath(data, 'spec.template');
            expect(data.spec.template).toBeDefined();
        });
    });
    describe('Multiple paths', function () {
        it('Non existing paths', function () {
            var data = {
                metadata: {
                    name: 'test-virtual-machine',
                },
                spec: {
                    template: {},
                },
            };
            ensurePath(data, ['spec.template.spec.domain.devices']);
            expect(data.spec.template.spec.domain.devices).toBeDefined();
        });
        it('Non existing and existing paths', function () {
            var data = {
                metadata: {
                    name: 'test-virtual-machine',
                },
                spec: {
                    template: {},
                },
            };
            ensurePath(data, ['spec.template']);
            expect(data.spec.template).toBeDefined();
        });
    });
});
//# sourceMappingURL=utils.test.js.map