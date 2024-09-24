import { EnvironmentKind } from '../constants';
import { areEnvironmentsChanged } from '../utils';
var env1Name = 'test-1';
var env1Serial = '1234';
var env1Disk = 'disk1';
var env2Name = 'test-2';
var env2Serial = '4321';
var env2Disk = 'disk2';
describe('utils tests', function () {
    describe('areEnvironmentsChanged tests', function () {
        it('shuffle Envs', function () {
            var initialEnvironments = [
                { diskName: env1Disk, kind: EnvironmentKind.secret, name: env1Name, serial: env1Serial },
                { diskName: env2Disk, kind: EnvironmentKind.secret, name: env2Name, serial: env2Serial },
            ];
            var newEnvironment = [
                { diskName: env1Disk, kind: EnvironmentKind.secret, name: env2Name, serial: env2Serial },
                { diskName: env1Disk, kind: EnvironmentKind.secret, name: env1Name, serial: env1Serial },
            ];
            expect(areEnvironmentsChanged(newEnvironment, initialEnvironments)).toBeFalsy();
        });
        it('added Env', function () {
            var initialEnvironments = [
                { diskName: env2Disk, kind: EnvironmentKind.secret, name: env2Name, serial: env2Serial },
            ];
            var newEnvironment = [
                { diskName: env2Disk, kind: EnvironmentKind.secret, name: env2Name, serial: env2Serial },
                { diskName: env1Disk, kind: EnvironmentKind.secret, name: env1Name, serial: env1Serial },
            ];
            expect(areEnvironmentsChanged(newEnvironment, initialEnvironments)).toBeTruthy();
        });
        it('Removed Env', function () {
            var newEnvironment = [
                { diskName: env2Disk, kind: EnvironmentKind.secret, name: env2Name, serial: env2Serial },
            ];
            var initialEnvironments = [
                { diskName: env2Disk, kind: EnvironmentKind.secret, name: env2Name, serial: env2Serial },
                { diskName: env1Disk, kind: EnvironmentKind.secret, name: env1Name, serial: env1Serial },
            ];
            expect(areEnvironmentsChanged(newEnvironment, initialEnvironments)).toBeTruthy();
        });
    });
});
//# sourceMappingURL=utils.test.js.map