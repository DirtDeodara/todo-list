function template(task) {
    const html = /*html*/`
    <li>
        <p>${task.task}</p>
        <input class="checkbox" type="checkbox" name="completed">
    </li>
    `;
    return html;
}
export default template;