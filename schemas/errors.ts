
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
