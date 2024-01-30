
export class ErrorNotFound extends Error {
    code: number;
    constructor(message: string) {
        super(message);
        this.name = "Not_Found";
        this.code = 404;

        // Maintain proper stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorNotFound);
        }
    }
}

export class ErrorInternalServerError extends Error {
    code: number;
    constructor(message: string) {
        super(message);
        this.name = 'Internal_Server_Error';
        this.code = 500;

        // Maintain proper stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorNotFound);
        }
    }
}
