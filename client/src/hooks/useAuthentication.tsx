import { useState } from "react";
import { toast } from "sonner";
import { useAuth } from "../store/AuthStore";
import { z } from "zod";
import { signInSchema, signUpSchema } from "../utils/validation";

const useAuthentication = () => {
  const [loading, setLoading] = useState(false);

  const { signin, signout } = useAuth();
  const signUp = async (data: z.infer<typeof signUpSchema>) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.status >= 400 && res.status < 500) {
        toast.info(result.error.message);
        return;
      }
      if (!res.ok) {
        throw res.statusText;
      }
      signin(result.data.user);
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (data: z.infer<typeof signInSchema>) => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (res.status >= 400 && res.status < 500) {
        toast.info(result.error.message);
        return;
      }
      if (!res.ok) {
        throw res.statusText;
      }
      signin(result.data.user);
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const result = await res.json();

      if (res.status >= 400 && res.status < 500) {
        toast.info(result.error.message);
        return;
      }
      if (!res.ok) {
        throw res.statusText;
      }
      signout();
    } catch (error) {
      toast.error("Oops! Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    signUp,
    signIn,
    signOut,
  };
};
export default useAuthentication;
