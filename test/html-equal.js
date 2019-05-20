const pattern = /[\f\n\r\t\v ]{2,}/g;
const replacement = ' ';

function normalize(html) {
    //normalize whitespace, everything becomes one space
    const replace = html.replace(pattern, replacement);
    //trim leading and trailing whitespace
    const trimmed = replace.trim();

    return trimmed;
}

//add the cunstom assertion to QUnit
QUnit.assert.htmlEqual = function(actual, expected) {
    const normalizedActual = normalize(actual);
    const normalizedexpected = normalize(expected);
    QUnit.assert.equal(normalizedActual, normalizedexpected);
};