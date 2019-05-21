
import template from '../src/template.js';
const test = QUnit.test;
QUnit.module('template');

test('test to return html and competed as true', assert => {
    // Arrange
    const task = {
        
        task: 'Create a static example of your todo list',
        completed: true
    };
    const expected = /*html*/`
    <li>
        <p>Create a static example of your todo list</p>
        <input class="checkbox" type="checkbox" name="completed" checked>
    </li>
    `;
    // Act
    const html = template(task);

    // Assert
    assert.htmlEqual(html, expected);
});

test('test to return html and competed as false', assert => {
    // Arrange
    const task = {
        
        task: 'Create a static example of your todo list',
        completed: false
    };
    const expected = /*html*/`
    <li>
        <p>Create a static example of your todo list</p>
        <input class="checkbox" type="checkbox" name="completed" >
    </li>
    `;
    // Act
    const html = template(task);

    // Assert
    assert.htmlEqual(html, expected);
});

