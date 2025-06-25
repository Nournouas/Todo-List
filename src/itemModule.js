// itemModule.js
export function createItem(title, desc, icon, dueDate, priority) {
    let _title = title;
    let _desc = desc;
    let _icon = icon;
    let _dueDate = dueDate;
    let _priority = priority;

    return {
        getTitle: () => _title,
        getDesc: () => _desc,
        getIcon: () => _icon,
        getDueDate: () => _dueDate,
        getPriority: () => _priority,

        editTitle: (newTitle) => _title = newTitle,
        editDesc: (newDesc) => _desc = newDesc,
        editIcon: (newIcon) => _icon = newIcon,
        editDueDate: (newDate) => _dueDate = newDate,
        editPriority: (newPriority) => _priority = newPriority
    };
}