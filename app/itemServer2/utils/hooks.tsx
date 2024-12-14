import { laravelApi } from '@/app/api/serverApi';
import { itemTypePrisma } from '@/app/types';
import { taskSchemaPrisma } from '@/app/zod';
import prisma from '@/lib/db';

import { revalidatePath } from 'next/cache';
import React from 'react';

export const GetItemsAll = async () => {
    try {
        const response = await prisma.items.findMany();
        response.map((d: itemTypePrisma, index: number) => {
            const validate = taskSchemaPrisma.safeParse({id: d.id, task: d.task});
            if (validate.error) {
                console.log(validate.error)
                return;
            }
        });
        return response;
    }
    catch (error) {
        return null;
    }
};

export const CreateItem = async (context: {"task": string}) => {
    try {
        const response = await prisma.items.create({
            data: context
        });
        console.log(response)
        return response;
    }
    catch (error) {
        return null;
    }
};

export const UpdateItem = async (context: {"task": string}, id: string) => {
    try {
        const response = await prisma.items.update({
            where: { id },
            data: context
        });
        return response;
    }
    catch (error) {
        return null;
    }
};

export const DeleteItem = async (id: string) => {
    try {
        const response = await prisma.items.delete({
            where: { id }
        });
        return response;
    }
    catch (error) {
        return null;
    }
};

