import { productValidationRules } from "../components/utils/validationRules";
import { BaseIsValid } from "../components/utils/baseIsValid";

export interface Product {
    id: number;
    title: string;
    price: number;
}

export function Product(_id?: number, _title?: string, _price?: number): Product {
    return {
        id: _id ?? 0,
        title: _title ?? '',
        price: _price ?? 0,
    }
}

export async function IsProductValid(product: Product): Promise<any> {
    return await BaseIsValid(product, productValidationRules);
}