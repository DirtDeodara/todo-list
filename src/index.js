import template from './template.js';
import htmlToDOM from './html-to-DOM.js';
import tasks from '../data/tasks.js';
import headerTemplate from '../src/header-template.js';

const taskList = document.getElementById('task-list');
const header = document.getElementById('header');

tasks.forEach(task => {
    const html = template(task);
    const dom = htmlToDOM(html);
    taskList.appendChild(dom);
});

const html = headerTemplate();
const dom = htmlToDOM(html);

header.appendChild(dom);