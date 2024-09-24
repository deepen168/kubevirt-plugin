import { bytesFromQuantity } from '../quantity';
describe('Test quantity utilities', function () {
    describe('From International System units', function () {
        it('Ki in KiB', function () {
            expect(bytesFromQuantity('1Ki')).toStrictEqual([1, 'KiB']);
        });
        it('Ki in MiB', function () {
            expect(bytesFromQuantity('2134Ki')).toStrictEqual([2, 'MiB']);
        });
        it('Mi in GiB', function () {
            expect(bytesFromQuantity('2134Mi')).toStrictEqual([2, 'GiB']);
        });
        it('Gi in GiB', function () {
            expect(bytesFromQuantity('1Gi')).toStrictEqual([1, 'GiB']);
        });
    });
    describe('From Decimal units', function () {
        it('K in KiB', function () {
            expect(bytesFromQuantity('1K')).toStrictEqual([1000, 'B']);
        });
        it('G in GiB', function () {
            expect(bytesFromQuantity('1G')).toStrictEqual([954, 'MiB']);
        });
    });
    describe('From digit', function () {
        it('1024 to KiB', function () {
            expect(bytesFromQuantity(1024)).toStrictEqual([1, 'KiB']);
            expect(bytesFromQuantity('1024')).toStrictEqual([1, 'KiB']);
        });
        it('1025 to KiB', function () {
            expect(bytesFromQuantity(1025)).toStrictEqual([1, 'KiB']);
            expect(bytesFromQuantity('1025')).toStrictEqual([1, 'KiB']);
        });
        it('1073741824 to 1 GiB', function () {
            expect(bytesFromQuantity('1073741824')).toStrictEqual([1, 'GiB']);
            expect(bytesFromQuantity(1073741824)).toStrictEqual([1, 'GiB']);
        });
    });
    describe('With precision', function () {
        it('1073741824 to 1 GiB', function () {
            expect(bytesFromQuantity('123456781234', 2)).toStrictEqual([114.98, 'GiB']);
            expect(bytesFromQuantity(123456781234, 2)).toStrictEqual([114.98, 'GiB']);
        });
        it('Mi in GiB', function () {
            expect(bytesFromQuantity('2134Mi', 2)).toStrictEqual([2.08, 'GiB']);
        });
    });
});
//# sourceMappingURL=quantity.test.js.map