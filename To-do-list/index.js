const todolist =[];
todo()
function todo()
{
    let list ='';
    for(let i=0; i<todolist.length;i++)
    {
        const task = todolist[i].name;
        const due = todolist[i].date;
        const html = `
        
            <div>${task}</div>
            <div> ${due}</div>
            <button class="button buddon2" onclick="todolist.splice(${i},1);
            todo();
            ">Delete</button>
         `;
        list += html;
    }
    document.querySelector('.js-display').innerHTML = list;
}

function addtodo()
{
    const element = document.querySelector('.js-tasks');
    const name = element.value;
    const dateelement = document.querySelector('.js-date');
    const date = dateelement.value;
    todolist.push({
        name,date
    });
    element.value = '';
    dateelement.value = '';
    todo();
}