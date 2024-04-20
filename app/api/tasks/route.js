import prisma from '@/utils/db';
import { NextResponse } from 'next/server';

export const GET = async (req, res) => {
    const tasks = await prisma.task.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    });

    return Response.json({ data: tasks });
};

export const POST = async (req, res) => {
    const { content } = await req.json();

    const tasks = await prisma.task.create({
        data: {
            content
        }
    });

    return NextResponse.json({ data: tasks });
};