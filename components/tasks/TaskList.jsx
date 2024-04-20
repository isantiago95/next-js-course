import Link from 'next/link';
import DeleteForm from './DeleteForm';
import { getAllTasks } from '@/utils/actions';

const TaskList = async () => {

    const tasks = await getAllTasks();

    if (tasks.length === 0) return <h2 className='mt-8 font-medium text-lg'>No task found</h2>;

    console.log(tasks);

    return (
        <ul className='mt-8'>
            {
                tasks.map(({ id, content, createdAt, completed }) => (
                    <li key={id} className='flex items-center justify-between px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg bg-white text-black'>
                        <h2 className={`text-lg capitalize ${completed ? 'line-through' : null}`}>{content}</h2>
                        <div className='flex gap-6 items-center'>
                            <Link href={`/tasks/${id}`} className='btn btn-accent btn-xs'>edit</Link>
                            <DeleteForm id={id} />
                        </div>
                    </li>
                ))
            }
        </ul>
    );
};

export default TaskList;