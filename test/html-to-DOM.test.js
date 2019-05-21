import htmlToDOM from '../src/html-to-DOM.js';

const test = QUnit.test;


QUnit.module('html to DOM');

test('converts html to dom', (assert) => {
    //arrange
    const html = /*html*/ `
        <span>test</span>
    `;

    //act
    const dom = htmlToDOM(html);

    //assert
    assert.equal(dom.tagName, 'SPAN');
    assert.equal(dom.textContent, 'test');
});