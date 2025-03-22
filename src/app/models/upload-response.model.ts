export class UploadedFile {
    originalName: string;
    url: string;

    constructor(originalName: string, url: string) {
        this.originalName = originalName;
        this.url = url;
    }
}

export class UploadResponse {
    message: string;
    files: UploadedFile[];

    constructor(message: string, files: UploadedFile[]) {
        this.message = message;
        this.files = files;
    }
}
