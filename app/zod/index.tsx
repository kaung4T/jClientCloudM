import { z } from "zod";


export const addTaskSchema = z.object({
    id: z.number().optional(),
    task: z.string().min(1, {
        message: "Task should be more than 1 character!"
    }).max(30, {
        message: "Task should be less than 30 characters!"
    }),
})