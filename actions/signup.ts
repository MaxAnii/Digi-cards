import { signupSchema } from "@/schemas";
import * as z from "zod";
export const signup = async (values: z.infer<typeof signupSchema>) => {};
