module.exports = function toReadable(number) {

    function result(a, b, c, d) {
        if (number.toString().length === 1) { return a(number) }
        else if (number.toString().length === 2 && number < 20) { return b(number) }
        else if (number.toString().length === 2 && number >= 20) { return c(number) }
        else if (number.toString().length === 3) { return d(number) }

    }
    return result(getOneDigits, getTwoDigits, getTwoDigitsMore, getThreeDigits)

    function getOneDigits(number) {
        switch (number) {
            case 0: return 'zero';
            case 01: return 'one';
            case 02: return 'two';
            case 03: return 'three';
            case 04: return 'four';
            case 05: return 'five';
            case 06: return 'six';
            case 07: return 'seven';
            case 08: return 'eight';
            case 09: return 'nine';
        }
    }
    function getTwoDigits(number) {
        switch (number) {
            case 10: return 'ten';
            case 11: return 'eleven';
            case 12: return 'twelve';
            case 13: return 'thirteen';
            case 14: return 'fourteen';
            case 15: return 'fifteen';
            case 16: return 'sixteen';
            case 17: return 'seventeen';
            case 18: return 'eighteen';
            case 19: return 'nineteen';
        }
    }
    function getTwoDigitsMore(number) {
        let remainder10 = getOneDigits(number % 10);

        switch (Math.floor(number / 10)) {
            case 2: return remainder10 === 'zero' ? 'twenty' : 'twenty ' + remainder10;
            case 3: return remainder10 === 'zero' ? 'thirty' : 'thirty ' + remainder10;
            case 4: return remainder10 === 'zero' ? 'forty' : 'forty ' + remainder10;
            case 5: return remainder10 === 'zero' ? 'fifty' : 'fifty ' + remainder10;
            case 6: return remainder10 === 'zero' ? 'sixty' : 'sixty ' + remainder10;
            case 7: return remainder10 === 'zero' ? 'seventy' : 'seventy ' + remainder10;
            case 8: return remainder10 === 'zero' ? 'eighty' : 'eighty ' + remainder10;
            case 9: return remainder10 === 'zero' ? 'ninety' : 'ninety ' + remainder10;
        }
    }
    function getThreeDigits(number) {
        let remainder100 = number % 100;
        let firstDigit = Math.floor(number / 100)
        let firstDigitHundred = getOneDigits(firstDigit) + ' hundred'

        for (let i = 1; i <= 9; i++) {
            switch (firstDigit) {
                case i: return (
                    remainder100 === 0
                        ? firstDigitHundred
                        : firstDigitHundred + ' ' + ((remainder100 < 10)
                            ? getOneDigits(remainder100)
                            : (remainder100 >= 10 && remainder100 < 20
                                ? getTwoDigits(remainder100)
                                : getTwoDigitsMore(remainder100))));
            }
        }
    }
}