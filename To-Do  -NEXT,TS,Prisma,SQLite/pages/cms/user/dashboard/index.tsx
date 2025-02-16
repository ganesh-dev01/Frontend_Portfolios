import { ThemeContext } from '@/Theme/Themestate';
import { useContext, useState } from 'react';
import styles from '@/styles/user_pages/dashboard.module.css';
import { IoMdAddCircle } from 'react-icons/io';
import { FaTable, FaThLarge } from 'react-icons/fa';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

interface Task {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  deadline: string;
  status: 'pending' | 'in-progress' | 'completed';
}

const initialTasks: Task[] = [
  { id: '1', title: 'Task 1', description: 'Description 1', createdAt: '2025-02-15', deadline: '2025-02-20', status: 'pending' },
  { id: '2', title: 'Task 2', description: 'Description 2', createdAt: '2025-02-14', deadline: '2025-02-22', status: 'in-progress' },
  { id: '3', title: 'Task 3', description: 'Description 3', createdAt: '2025-02-13', deadline: '2025-02-25', status: 'completed' },
];

const User_Dashboard: React.FC = () => {
  let { theme } = useContext(ThemeContext);
  // theme='dark';

  const [view, setView] = useState<'table' | 'card'>('table');
  const [tasks, setTasks] = useState<Task[]>(initialTasks);

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedTasks = [...tasks];
    const draggedTask = updatedTasks.splice(result.source.index, 1)[0];
    draggedTask.status = result.destination.droppableId as Task['status'];
    updatedTasks.splice(result.destination.index, 0, draggedTask);
    setTasks(updatedTasks);
  };

  return (
    <div className={`${styles[`main_${theme}`]} ${styles.main}`}>
      <div className={styles.header}>
        <button className={styles.addtaskbtn}>
          <IoMdAddCircle /> Add new task
        </button>
      </div>

      <div className={styles.navbar}>
        <button className={`${styles.navbtn} ${view === 'table' ? styles.active : ''}`} onClick={() => setView('table')}>
          <FaTable /> Table View
        </button>
        <button className={`${styles.navbtn} ${view === 'card' ? styles.active : ''}`} onClick={() => setView('card')}>
          <FaThLarge /> Card View
        </button>
      </div>

      <div className={styles.body}>
        {view === 'table' ? (
       <div className={styles.table_container}>
       <table className={styles.task_table}>
         <thead>
           <tr>
             <th>Title</th>
             <th>Description</th>
             <th>Created At</th>
             <th>Deadline</th>
             <th>Action</th>
             <th>Status</th>
           </tr>
         </thead>
         <tbody>
           {tasks.map((task) => (
             <tr key={task.id}>
               <td>{task.title}</td>
               <td>{task.description}</td>
               <td>{task.createdAt}</td>
               <td>{task.deadline}</td>
               <td>
                 <button className={styles.edit_btn}>Edit</button>
                 <button className={styles.delete_btn}>Delete</button>
               </td>
               <td>
                 <label>
                   <input type="checkbox" defaultChecked={task.status === "pending"} /> Pending
                 </label>
                 <label>
                   <input type="checkbox" defaultChecked={task.status === "in-progress"} /> In-Progress
                 </label>
                 <label>
                   <input type="checkbox" defaultChecked={task.status === "completed"} /> Completed
                 </label>
               </td>
             </tr>
           ))}
         </tbody>
       </table>
     </div>
        ) : (
          <DragDropContext onDragEnd={onDragEnd}>
            <div className={styles.kanbanBoard}>
              {['pending', 'in-progress', 'completed'].map(status => (
                <Droppable key={status} droppableId={status}>
                  {(provided:any) => (
                    <div className={styles.kanbanColumn} ref={provided.innerRef} {...provided.droppableProps}>
                      <h3>{status.replace('-', ' ')}</h3>
                      {tasks.filter(task => task.status === status).map((task, index) => (
                        <Draggable key={task.id} draggableId={task.id} index={index}>
                          {(provided:any) => (
                            <div className={styles.kanbanCard} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                              <h4>{task.title}</h4>
                              <p>{task.description}</p>
                              <small>Due: {task.deadline}</small>
                            </div>
                          )}
                        </Draggable>
                      ))}
                      {provided.placeholder}
                    </div>
                  )}
                </Droppable>
              ))}
            </div>
          </DragDropContext>
        )}
      </div>
    </div>
  );
};

export default User_Dashboard;
