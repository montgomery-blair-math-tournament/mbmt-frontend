"use server";

import {
    registrationFormSchema,
    type RegistrationFormSchema,
} from "./formSchema";

export async function registerAction(data: RegistrationFormSchema) {
    const parsed = registrationFormSchema.safeParse(data);
    if (!parsed.success) {
        return { success: false, errors: parsed.error };
    }

    const verifyRes = await fetch(
        "https://challenges.cloudflare.com/turnstile/v0/siteverify",
        {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
                secret: process.env.TURNSTILE_SECRET_KEY!,
                response: parsed.data.turnstileToken,
            }),
        },
    );

    const verification = await verifyRes.json();
    if (!verification.success) {
        return { success: false, error: "CAPTCHA verification failed." };
    }

    // TODO: push response to the database

    return { success: true };
}
