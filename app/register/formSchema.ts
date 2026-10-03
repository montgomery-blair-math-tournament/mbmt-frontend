import {
    divisions,
    individualRounds,
    t_shirt_sizes,
} from "@/lib/constants/settings";
import * as z from "zod";

const registrationFormSchemaPage1 = z.object({
    school_name: z.string().min(1, "School name is required"),
    chaperone_name: z.string().min(1, "Chaperone name is required"),
    chaperone_email: z.email("Invalid email address"),
    chaperone_phone: z
        .string(
            "Invalid phone number format. Phone number must be a 10-digit string",
        )
        .length(10, "Must be a 10-digit string"), // TODO: error on non-numeric characters
    chaperone_t_shirt_size: z.enum(t_shirt_sizes),
    division: z.enum(divisions),
});

const student = z.object({
    first_name: z.string().min(1, "First name is required"),
    last_name: z.string().min(1, "Last name is required"),
    subject_tests: z.array(z.enum(individualRounds)),
    grade: z.number().min(1, "Grade is required"),
    t_shirt_size: t_shirt_sizes,
});

const registrationFormSchemaPage2 = z.object({
    team_name: z.string(),
    student_1: student.required(),
    student_2: student.optional(),
    student_3: student.optional(),
    student_4: student.optional(),
    student_5: student.optional(),
    previous_competitors: z.boolean(),
});

export const registrationFormSchema = z.object({
    ...registrationFormSchemaPage1.shape,
    ...registrationFormSchemaPage2.shape,
    turnstileToken: z
        .string()
        .min(1, "Please complete the CAPTCHA verification."),
});

export type RegistrationFormSchema = z.infer<typeof registrationFormSchema>;
