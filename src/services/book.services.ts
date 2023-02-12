import { Book } from "@prisma/client";

import { db } from "../utils/db";

import { CreateBookInput, UpdateBookInput } from "../schemas/book.schema";

export async function createBook(input: CreateBookInput): Promise<Book> {
    return await db.book.create({ data: input });
}

export async function getAllBook(): Promise<Book[]> {
    return await db.book.findMany();
}

export async function getBookById(id: string): Promise<Book | null> {
    return await db.book.findUnique({ where: { id } });
}

export async function updateBook(
    id: string,
    input: UpdateBookInput["body"]
): Promise<Book | null> {
    return await db.book.update({ where: { id }, data: input });
}

export async function deleteBook(id: string): Promise<Book | null> {
    return await db.book.delete({ where: { id } });
}
