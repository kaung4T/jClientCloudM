import { laravelApi } from '@/app/api/serverApi';
import { getItemType } from '@/app/types';
import { taskSchema } from '@/app/zod';
import { revalidatePath } from 'next/cache';
import React from 'react';

export const GetItemsAll = async () => {
    try {
        const response = await laravelApi.get("all_item");
        const jsonData = await response.data.data;

        jsonData.map((d: getItemType, index: number) => {
            const validate = taskSchema.safeParse({id: d.id, task: d.task});
            if (validate.error) {
                return;
            }
        });
        
        return jsonData;
    }
    catch (error) {
        return null;
    }
};

export const CreateItem = async (context: {"task": string}) => {
    try {
        const response = await laravelApi.post("create_item", context);
        const jsonData = await response.data;
        return jsonData;
    }
    catch (error) {
        return null;
    }
};

export const UpdateItem = async (context: {"task": string}, id: number) => {
    try {
        const response = await laravelApi.put(`update_item/${id}`, context);
        const jsonData = await response.data;
        return jsonData;
    }
    catch (error) {
        return null;
    }
};

export const DeleteItem = async (id: number) => {
    try {
        const response = await laravelApi.delete(`delete_item/${id}`);
        const jsonData = await response.data;
        return jsonData;
    }
    catch (error) {
        return null;
    }
};

