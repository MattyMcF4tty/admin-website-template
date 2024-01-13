
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
