import { infer as ZodInfer, array, number, object, string } from 'zod';

export const productSchema = object({
    id: number(),
    productImage: array(string()),
    title: string(),
    description: string(),
    rating: string(),
    price: string(),
    avatar: string(),
});

export const productsSchema = array(productSchema);

export type ProductType = ZodInfer<typeof productSchema>;
