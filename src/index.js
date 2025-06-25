import { createItem } from './itemModule.js';

const item1 = createItem("Task 1", "Description", "📌", "2025-07-01", "high");
console.log(item1.getTitle());
item1.editTitle("Updated Task");