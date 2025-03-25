import { helpers } from "@vuelidate/validators";

export const minLength = (minLength: number, message: string) => helpers.withMessage(
    message,
    (value: unknown) => typeof value === "string" && value.length >= minLength
);

export const minNumber = (minNum: number, message: string) => helpers.withMessage(
    message,
    (value: unknown) => typeof value === "number" && value > minNum
);