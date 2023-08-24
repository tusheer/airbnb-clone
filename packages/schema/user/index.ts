import { infer as ZodInfer, number, object, string } from 'zod';

export const signUpSchema = object({
    email: string().email().trim().toLowerCase(),
    password: string().min(6),
    first_name: string().min(1).trim(),
    last_name: string().min(1).trim(),
});

export const signinSchema = object({
    username: string().email().trim().toLowerCase(),
    password: string().min(6),
});

export const verifyEmailOTP = object({
    user_id: number(),
    code: string(),
});

export const resendEmailOTP = object({
    user_id: number(),
});

export const sellerBusinessInformationSchema = object({
    businessName: string().min(1),
    country: object({
        label: string().min(1).default('United States'),
        value: string().min(1).default('US'),
    }).required(),
    businessVertical: string().min(1),
});

export const bankDetailsSchema = object({
    accountName: string().min(1),
    accountNumber: string().refine((value) => /^[0-9]+$/.test(value), {
        message: 'Must be a string containing only numeric characters',
    }),
    IFSC_CODE: string().refine((value) => /^[0-9]+$/.test(value), {
        message: 'Must be a string containing only numeric characters',
    }),
});

export type BankDetailsType = ZodInfer<typeof bankDetailsSchema>;
export type SellerBusinessInformationType = ZodInfer<typeof sellerBusinessInformationSchema>;
export type VerifyEmailOTPType = ZodInfer<typeof verifyEmailOTP>;
export type UserSignupType = ZodInfer<typeof signUpSchema>;
export type UserSigninType = ZodInfer<typeof signinSchema>;
export type ResendEmailOTPType = ZodInfer<typeof resendEmailOTP>;
