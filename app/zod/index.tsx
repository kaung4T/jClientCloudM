import { z } from "zod";

export const taskSchema= z.object({
    id: z.number(),
    task: z.string()
})

export const addTaskSchema = z.object({
    id: z.number().optional(),
    task: z.string().min(1, {
        message: "Task should be more than 1 character!"
    }).max(30, {
        message: "Task should be less than 30 characters!"
    }),
})

export const taskSchemaPrisma= z.object({
    id: z.string(),
    task: z.string()
})

export const addTaskSchemaPrisma = z.object({
    id: z.string().optional(),
    task: z.string().min(1, {
        message: "Task should be more than 1 character!"
    }).max(30, {
        message: "Task should be less than 30 characters!"
    }),
})