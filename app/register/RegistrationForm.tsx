"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Field,
    FieldDescription,
    FieldError,
    FieldLabel,
} from "@/components/ui/field";
import {
    registrationFormSchema,
    type RegistrationFormSchema,
} from "./formSchema";
import { registerAction } from "./register";
import { toast } from "@/components/ui/toast";

export default function RegistrationForm() {
    const {
        register,
        handleSubmit,
        control,
        formState: { errors, isSubmitting },
    } = useForm<RegistrationFormSchema>({
        resolver: zodResolver(registrationFormSchema),
        defaultValues: {
            school_name: "",
            chaperone_name: "",
            chaperone_email: "",
            chaperone_phone: "",
            team_name: "",
            turnstileToken: "",
        },
    });

    const onSubmit = async (data: RegistrationFormSchema) => {
        const result = await registerAction(data);
        if (!result.success) {
            console.error(result.error);
            return;
        }
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            onReset={(e) => {
                const form = e.currentTarget;
                const radioItems = form.querySelectorAll(
                    '[role="radio"], [data-slot="radio-group-item"]',
                );
                radioItems.forEach((item) => {
                    item.setAttribute("aria-checked", "false");
                    item.setAttribute("data-state", "unchecked");
                });
                toast.add({ type: "success", description: "Cleared form." });
            }}
            className="w-full max-w-sm flex justify-center flex-col gap-6"
        >
            <Controller
                name="school_name"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="school_name">
                            School Name
                            <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                            id="school_name"
                            placeholder="Montgomery Blair High School"
                            aria-invalid={fieldState.invalid}
                            {...field}
                            value={field.value ?? ""}
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            <Controller
                name="school_name"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="chaperone_name">
                            Chaperone Name
                            <span className="text-destructive">*</span>
                        </FieldLabel>
                        <FieldDescription>
                            Each team is required to have at least one adult
                            chaperone at Blair during the tournament. One adult
                            can chaperone multiple teams. Food and amenities
                            will be provided.
                        </FieldDescription>
                        <Input
                            id="chaperone_name"
                            placeholder="Jeremy Schwartz"
                            aria-invalid={fieldState.invalid}
                            {...field}
                            value={field.value ?? ""}
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            <Controller
                name="chaperone_email"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="chaperone_email">
                            Chaperone Email
                            <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                            id="chaperone_email"
                            type="email"
                            placeholder="my_email@example.com"
                            aria-invalid={fieldState.invalid}
                            autoComplete="email"
                            {...field}
                            value={field.value ?? ""}
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            <Controller
                name="chaperone_phone"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="chaperone_phone">
                            Chaperone Phone
                            <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                            id="chaperone_phone"
                            placeholder="1234567890 (no spaces or non-numeric characters)"
                            aria-invalid={fieldState.invalid}
                            {...field}
                            value={field.value ?? ""}
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            <Controller
                name="team_name"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor="team_name">
                            Team Name
                            <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                            id="team_name"
                            placeholder="Team Name"
                            aria-invalid={fieldState.invalid}
                            {...field}
                            value={field.value ?? ""}
                        />
                        {fieldState.invalid && (
                            <FieldError errors={[fieldState.error]} />
                        )}
                    </Field>
                )}
            />

            {/* TODO: add radio for division */}

            {/* TODO: add radio for chaperone t-shirt size */}

            {/* TODO: add an interface for adding, editing, and removing team members */}

            {/* TODO: add radio asking "Has anyone on your team competed in MBMT before?" */}

            <Controller
                name="turnstileToken"
                control={control}
                render={({ field, fieldState: { error } }) => (
                    <Field>
                        <FieldLabel>Verification</FieldLabel>
                        <Turnstile
                            siteKey={
                                process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!
                            }
                            onSuccess={(token) => field.onChange(token)}
                            onError={() => field.onChange("")}
                            onExpire={() => field.onChange("")}
                            options={{
                                theme: "auto",
                                size: "normal",
                            }}
                        />
                        {error && (
                            <p className="text-sm text-red-500">
                                {error.message}
                            </p>
                        )}
                    </Field>
                )}
            />

            {/* TODO: add reset button */}

            {/* Idea: on submit, show confirm modal asking for double-check */}

            <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Registration"}
            </Button>
        </form>

        // TODO: on successful submit, send a success toast and hide form; show post-submission screen:
        /*
            Thank you for registering for MBMT 11! We look forward to seeing you there!

            A $25-off discount code will be provided to all participants, valid for any classes at LIVE. This code will be active for two weeks post-competition.
        */
    );
}
