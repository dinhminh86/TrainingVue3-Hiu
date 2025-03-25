import { authRequestValidationRules } from "../components/utils/validationRules";
import { BaseIsValid } from "../components/utils/baseIsValid";

export interface AuthRequest {
    userName: string;
    password: string;
    rePassword: string;
}

export function AuthRequest(uName?: string, uPass?: string, uRePassword?: string): AuthRequest {
    return {
        userName: uName ?? '',
        password: uPass ?? '',
        rePassword: uRePassword ?? ''
    }
}

export async function IsAuthValid(authRequest: AuthRequest) {
    return await BaseIsValid(authRequest, authRequestValidationRules);
}