
export class ErrorNotFound extends Error {
    constructor(message: string) {
        super(message);
        this.name = "Not_Found";

        // Maintain proper stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorNotFound);
        }
    }
}

export class ErrorInternalServerError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'Internal_Server_Error';

        // Maintain proper stack trace
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorNotFound);
        }
    }
}
