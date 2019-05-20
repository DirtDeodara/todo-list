const test = QUnit.test;

QUnit.module('html equal');

test('normalizes whitespace', (assert) => {
    //arrange
    const html = /*html*/`
                <div>hello</div>
    `;

    const expected = /*html*/`
        <div>hello</div>
    `;

    //act
    //now built in as custom assert

    //assert
    assert.htmlEqual(html, expected);

});
