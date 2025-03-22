export class FTPConfig {
    ftp_host: string;
    ftp_user: string;
    ftp_password: string;
    ftp_port: number;
    constructor(ftp_host: string, ftp_user: string, ftp_password: string, ftp_port: number) {
        this.ftp_host = ftp_host;
        this.ftp_user = ftp_user;
        this.ftp_password = ftp_password;
        this.ftp_port = ftp_port;
    }
}