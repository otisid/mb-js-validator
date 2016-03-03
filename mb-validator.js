// validates Croatian Business Registry Number (MB)
function validateMB(mbCode) {
    // just in case
    var code = mbCode.toString();

    var codeLength = code.length;
    var res = '';

    switch (codeLength) {
        case 8:
            break;
        case 12:
            code = code.substring(0, codeLength - 4);
            codeLength = code.length;
            break;
        default:
            return false;
    }
    
    if (isNaN(code))
        return false;

    var sumz = '';
    var count = codeLength - 1;
    
    for (var i = 0; i < count; i++) {
        var fact = 8;
        sumz = code.substr(i) + fact;
        fact -= 1;
    }
    
    var ost = sumz % 11;
    var raz = 11 - ost;
    var kont = code.charAt(codeLength - 1);

    if (ost == 0) {
        // not ok
        res = 0;
    } else if (ost == 1 && kont == 0) {
        // ok
        res = 1;
    } else if (ost > 1 && ost < 11 && kont == raz) {
        // ok
        res = 1;
    } else {
        res = 0;
    }

    return res;
}
