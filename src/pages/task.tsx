import React, { useState, ChangeEvent } from 'react';
import { TextField, Button, IconButton } from '@mui/material';
import { FaTimesCircle } from 'react-icons/fa';

interface Task {
  id: number;
  name: string;
}

const TaskComponent: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setNewTask(input);
  };

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    const newTaskItem: Task = {
      id: Date.now(),
      name: newTask.trim()
    };

    setTasks([...tasks, newTaskItem]);
    setNewTask('');
  };

  const handleRemoveTask = (TaskId: number) => {
    setTasks(tasks.filter(task => task.id !== TaskId));
  };

  return (
    <div className="h-screen w-full p-12 flex justify-center items-center">
      <div className="rounded-lg border p-12 h-fit w-1/2 flex flex-col justify-center gap-4">
        <div className="flex gap-4">
          <TextField variant="outlined" size="small" label="Input new task" value={newTask} onChange={handleChange} />
          <Button variant="contained" onClick={handleAddTask}>Add</Button>
        </div>
        {tasks.map(task => (
          <div key={task.id} className="w-full h-fit p-1 px-3 border flex justify-between items-center">
            <h3 className="text-xl">{task.name}</h3>
            <IconButton color="error" onClick={() => handleRemoveTask(task.id)}>
              <FaTimesCircle size={30} />
            </IconButton>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskComponent;
