function template(task) {
    let checked = '';
    if(task.completed) {
        checked = 'checked';
    }
    const html = /*html*/`
    <li>
        <p>${task.task}</p>
        <input class="checkbox" type="checkbox" name="completed" ${checked}>
    </li>
    `;
    return html;
}
export default template;