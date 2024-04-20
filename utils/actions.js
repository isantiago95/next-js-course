'use server';

import { revalidatePath } from 'next/cache';
import prisma from './db';
import { redirect } from 'next/navigation';
import { z } from 'zod';

export const getAllTasks = async () => {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return tasks;
};

export const createTask = async (formData) => {
    const content = formData.get('content');

    await prisma.task.create({
        data: {
            content
        }
    });

    revalidatePath('/tasks');
};

export const createTaskCustom = async (prevState, formData) => {
    // await new Promise((resolve, reject) => {
    //     setTimeout(resolve, 2000);
    // });

    const content = formData.get('content');

    const Task = z.object({
        content: z.string().min(5)
    });

    try {
        Task.parse({ content });
        await prisma.task.create({
            data: {
                content
            }
        });

        revalidatePath('/tasks');
        return { message: 'success' };
    } catch (error) {
        return { message: error.message };
    }
};

export const deleteTask = async (formData) => {
    const id = formData.get('id');
    await prisma.task.delete({
        where: {
            id
        }
    });
    revalidatePath('/tasks');
};

export const getTask = async (id) => {
    return await prisma.task.findUnique({
        where: {
            id
        }
    });
};

export const editTask = async (formData) => {
    const id = formData.get('id');
    const content = formData.get('content');
    const completed = formData.get('completed');

    await prisma.task.update({
        where: {
            id
        },
        data: {
            content,
            completed: completed === 'on'
        }
    });

    redirect('/tasks');
};