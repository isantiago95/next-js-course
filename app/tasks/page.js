// import TaskForm from '@/components/tasks/TaskForm';
import TaskFormCustom from '@/components/tasks/TaskFormCustom';
import TaskList from '@/components/tasks/TaskList';

export const dynamic = 'force-dynamic';

const TasksPage = () => {
    return (
        <div className='max-w-lg'>
            <TaskFormCustom />
            <TaskList />
        </div>
    );
};

export default TasksPage;