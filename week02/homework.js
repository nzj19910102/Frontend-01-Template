var isNumber = /^([\+-]?)([0-9]*(\.[0-9]+([eE][\+-]?[0-9]+)?)?|0b[01]+|0o[0-7]+|0x[0-9a-f]+|NaN|Infinity)$/g
var isString = /^$/g

function encodeUtf8(str) {
    const code = encodeURIComponent(str);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}