import { format } from 'date-fns';
import { getName } from '@kubevirt-utils/resources/shared';
export var generateSnapshotName = function (vm) {
    var date = new Date();
    var formattedDate = format(date, 'yyyyMMdd-kkmmss');
    return "".concat(getName(vm), "-snapshot-").concat(formattedDate);
};
//# sourceMappingURL=utils.js.map