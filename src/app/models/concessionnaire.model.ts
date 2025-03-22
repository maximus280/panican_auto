export enum ConcessionnaireRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  MANAGER = 'MANAGER'
}

export interface Concessionnaire {
  id: number;
  nom: string;
  email: string;
  token: string;
  logo?: string; // Facultatif car il peut être null
  apiurl: string;
  siteWeb: string;
  password: string;
  role?: ConcessionnaireRole;
  isRegisterCompleted: boolean;
  isEmailVerified: boolean;
  otpGenerDateTime?: string; // LocalDateTime converti en string
  isActive: boolean;
  ftpServer: string;
  ftpUser: string;
  ftpPass: string;
  ftpPort: number;
}
