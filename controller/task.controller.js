let tasks = [
    { id: 1, todo: "Acheter de l'alcool", done: true },
    { id: 2, todo: "Acheter à manger", done: false },
    { id: 3, todo: "Acheter des cadeaux", done: false },
]

exports.todo_list = (req, res, next) => {
    res.status(200).json({ tasks: tasks });
}

exports.detail_task = (req, res, next) => {
	// Get the route parameter
    const id = req.params.id; // id is the key in router
    const task = tasks.filter(task => task.id == id);
    console.log(task);
    console.log('tache n° ' + task[0].id + ' : ' + task[0].todo);
    if (task[0].done) {
        console.log('Terminee')
    } else { console.log('A faire') }
	res.status(200).json({ task: task[0] });
};

exports.add_task = (req, res, next) => {
    const newtask = req.body;
    tasks.push(newtask);
    res.status(201).json({message: 'Task Added'});
}

exports.delete_task = (req, res, next) => {
    const id = req.params.id;
    tasks = tasks.filter(task => task.id != id);
    res.status(200).json(tasks);
}