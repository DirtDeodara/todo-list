import template from './template.js';
import htmlToDOM from './html-to-DOM.js';
import tasks from '../data/tasks.js';

const taskList = document.getElementById('task-list');

tasks.forEach(task => {
    const html = template(task);
    const dom = htmlToDOM(html);
    taskList.appendChild(dom);
});