import headerTemplate from '../src/header-template.js';
const test = QUnit.test;
QUnit.module('header-template');

test('html of header for header', assert => {
    //arrange
    const expected = /*html*/` 
    <h1>To-Do List</h1>
    `;
   
    //act
    const html = headerTemplate();


    //assert
    assert.htmlEqual(html, expected);

});

