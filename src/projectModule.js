export function createProject(title, color, icon, tasks, priority) {
    let _title = title;
    let _color = color;
    let _icon = icon;
    let _tasks = tasks;
    let _priority = priority;

    return {
        getTitle: () => _title,
        getColor: () => _color,
        getIcon: () => _icon,
        getTasks: () => _tasks,
        getPriority: () => _priority,

        editTitle: (newTitle) => _title = newTitle,
        editColor: (newColor) => _color = newColor,
        editIcon: (newIcon) => _icon = newIcon,
        editTasks: (task, add) => {add ? tasks.push(task) : tasks.splice(tasks.indexOf(task), 1)},
        editPriority: (newPriority) => _priority = newPriority
    };
}