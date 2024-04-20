'use client';

import { createTaskCustom } from '@/utils/actions';
import { useEffect } from 'react';
import { useFormStatus, useFormState } from 'react-dom';
import toast from 'react-hot-toast';

const SubmitBtn = () => {
    const { pending } = useFormStatus();
    return <button type='submit' className='btn btn-primary join-item' disabled={pending}>{pending ? 'please wait...' : 'create task'}</button>;
};

const initialState = {
    message: null
};

const TaskFormCustom = () => {
    const [state, formAction] = useFormState(createTaskCustom, initialState);
    useEffect(() => {
        if (!state.message) return;
        if (state.message instanceof Error) {
            toast.error(state.message);
            return;
        } else {
            toast.success(state.message);
            return;
        }

    }, [state]);

    return (
        <form action={formAction}>
            {/* {state.message && <div className='alert alert-success mb-2'>{state.message}</div>} */}
            <div className='join w-full'>
                <input type="text" className='input input-bordered join-item w-full' placeholder="type here" name='content' required />
                <SubmitBtn />
            </div>
        </form>
    );
};

export default TaskFormCustom;