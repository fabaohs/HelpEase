"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useMutateLogin } from "@/hooks/auth/mutations/useMutateLogin";
import { ReloadIcon } from "@radix-ui/react-icons";

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Invalid email" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(8, { message: "Password must be at least 6 characters" }),
});

export type LoginData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = form;

  const { mutateAsync: login, isPending } = useMutateLogin();

  async function submit(data: LoginData) {
    await login({ login: data });
  }

  return (
    <Card className="min-w-96 w-[40%] border-muted">
      <CardHeader>
        <CardTitle className="text-4xl font-black">HelpEase</CardTitle>
        <CardDescription className="text-lg font-semibold">
          The easiest way to get help
        </CardDescription>
        <Separator />
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(submit)();
            }}
            className="space-y-4"
          >
            <FormField
              control={control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="email">Email</Label>
                  <Input {...field} id="email" placeholder="email@email.com" />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <Label htmlFor="password">Password</Label>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="********"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" disabled={isPending}>
              {isPending && <ReloadIcon className="animate-spin mr-2" />}Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
