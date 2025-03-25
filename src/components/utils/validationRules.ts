import { computed } from "vue";
import { minNumber, minLength } from "./validation";
import { required, sameAs } from "@vuelidate/validators";

export const productValidationRules = computed(() => ({
    id: { required, minNumber: minNumber(1, "Id must be greater than 0") },
    title: { required, minLength: minLength(5, "Title must be at least 5 characters long") },
    price: { required, minNumber: minNumber(0, "Price must be greater than 0") },
}));

export const authRequestValidationRules = (isRegister: boolean = false) =>
    computed(() => ({
        userName: { required, minLength: minLength(3, "Username must be at least 3 characters long") },
        password: { required, minLength: minLength(5, "Password must be at least 5 characters long") },
        rePassword: isRegister
            ? { required, sameAs: sameAs("password", "Passwords must match") }
            : {},
    }));