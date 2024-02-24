import { ClassValue, clsx } from "clsx";
import { NextApiRequest } from "next";
import { twMerge } from "tailwind-merge";

export function NormalizePath(path: string): string {
    let normalizedPath = path;

    // Remove leading '/'
    if (normalizedPath.startsWith('/')) {
        normalizedPath = normalizedPath.slice(1);
    }

    // Remove trailing '/'
    if (normalizedPath.endsWith('/')) {
        normalizedPath = normalizedPath.slice(0, -1);
    }

    return normalizedPath;
}


export function verifyApiMethod(req:NextApiRequest, method:'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE') {
    if (req.method !== method) {
        return false
    }

    return true
}

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}