import useVuelidate from "@vuelidate/core";

export async function BaseIsValid<T>(entity: T, validationRules: any)
    : Promise<{ field: string; message: string }[]> {
    const v$ = useVuelidate(validationRules, entity as any);
    const errors: { field: string; message: string }[] = [];

    await v$.value.$validate();

    v$.value.$errors.forEach((err) => {
        const field = err.$property;
        const message =
            typeof err.$message === "string" ? err.$message : err.$message.value;
        errors.push({ field, message });
    });

    return errors;
}
