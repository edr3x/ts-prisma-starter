import { z, TypeOf } from "zod";

export const createBookSchema = z.object({
    body: z.object({
        title: z.string({
            required_error: "Title is required",
            invalid_type_error: "Title must be a string",
        }),

        author: z.string({
            required_error: "Author name is required",
            invalid_type_error: "Author name must be a string",
        }),

        isFiction: z.boolean({
            required_error: "isFiction is required",
            invalid_type_error: "isFiction must be a boolean",
        }),

        price: z.number({
            required_error: "Price is required",
            invalid_type_error: "Price must be a number",
        }),
    }),
});

export const getOneBookSchema = z.object({
    params: z.object({
        id: z.string({
            required_error: "Id is required",
            invalid_type_error: "Id must be a string",
        }),
    }),
});

export const updateBookSchema = z.object({
    params: z.object({
        id: z.string({
            required_error: "Id is required",
            invalid_type_error: "Id must be a string",
        }),
    }),

    body: z.object({
        title: z
            .string({
                invalid_type_error: "Title must be a string",
            })
            .optional(),

        author: z
            .string({
                invalid_type_error: "Author name must be a string",
            })
            .optional(),

        isFiction: z
            .boolean({
                invalid_type_error: "isFiction must be a boolean",
            })
            .optional(),

        price: z
            .number({
                invalid_type_error: "Price must be a number",
            })
            .optional(),
    }),
});

export const deleteBookSchema = z.object({
    params: z.object({
        id: z.string({
            required_error: "Id is required",
            invalid_type_error: "Id must be a string",
        }),
    }),
});

export type CreateBookInput = TypeOf<typeof createBookSchema>["body"];
export type GetOneBookInput = TypeOf<typeof getOneBookSchema>["params"];
export type UpdateBookInput = TypeOf<typeof updateBookSchema>;
export type DeleteBookInput = TypeOf<typeof deleteBookSchema>["params"];
