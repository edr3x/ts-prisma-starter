export function successResponse(data: any) {
    return { success: true, data };
}

export function errorResponse(message: any) {
    return { success: false, message };
}
