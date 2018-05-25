// functions 1
function multiply() {
    let result = 1,
        max = arguments.length;
    if (max == 0) {
        return 0;
    }
    for (let i = 0; i < max; i++) {
        result *= arguments[i];
    }
    return result;
}
let res = multiply(2, 3, 3);
// console.log(res);

// 3 строка перевертыш
function reverseString(str) {
    let newStr = '';
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

let str = reverseString('test');
// console.log(str);


// 4
function getCodeStringFromText(str){
    let newStr = '';
    for (let i = 0; i < str.length; i++){
        newStr += str.charCodeAt(i) + ' ';
    }
    return newStr;
}

let strCode = getCodeStringFromText('hello');
// console.log(strCode);


// edit task function
let todos = [
    {
        text: 'Learn JavaScript',
        id: 0
    },
    {
        text: 'Learn Angular',
        id: 1
    }
];

function addTask(text) {
    if (typeof text !== 'string') return new Error('text is not a string');
    if (!text.length) return new Error('text empty');

    // Create new task obj
    const newTask = {
        id: todos.length,
        text
    };

    // Add new task
    todos.push(newTask); // push, pop, unshift, shift

    return todos;
}

function deleteTask(id) {
    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = Number(id);

    let todo;

    for (let i = 0; i < todos.length; i++ ) {
        if (todos[i].id === id) {
            todo = todos[i];
            todos.splice(i, 1);
            break;
        }
    }

    return todo || 'task not found';
}
// Сделать функцию editTask для списка задач который мы начали делать на занятии. он должен принимать id задачи и новый текст, находить в массиве задач задачу с таким же id и менять ее значение поля text.

function editTask(id, text){

    if (id !== 0 && !id) return new Error('id required');
    if (isNaN(id)) return new Error('id must be a number');
    id = Number(id);

    let todo;

    for (let i = 0; i < todos.length; i++ ){
        if (todos[i].id === id) {
            todo = todos[i];
            todos[i].text = text;
        }

    }
    return todo || 'id does not exist';
}

let textUpd = editTask(6,'hkajsdh');
// console.log(textUpd);