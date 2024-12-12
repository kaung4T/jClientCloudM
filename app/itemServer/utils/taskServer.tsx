"use server";

import React from 'react';

import { CreateItem, DeleteItem, UpdateItem } from './hooks';
import { revalidatePath } from 'next/cache';
import { FieldValues } from 'react-hook-form';


export const createTask = async (formData: FieldValues) => {
  const task = formData.createTask;
  const createTask = await CreateItem({
    "task": task as string
  });
  revalidatePath("/itemServer")
};

export const updateTask = async (formData: FieldValues, id: number, index: number) => {
  const task = formData.updateTask;
  const updateTask = await UpdateItem({
    "task": task as string
  }, id);
  revalidatePath("/itemServer")
};

export const deleteTask = async (id: number) => {
  const deleteTask = await DeleteItem(id);
  revalidatePath("/itemServer")
  return deleteTask;
};

