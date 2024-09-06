import { useEffect } from "react";
import { useAuthStore } from "@/stores";

export const Signin = () => {
  const authStore = useAuthStore();

  useEffect(() => {
    // authStore.authenticate({
    //   email: "admin@admin.com",
    //   password: "admin123$",
    //   phone_number: "+77474006161",
    // });

    authStore.authorize({
      email: "admin@admin.com",
      password: "admin123$",
    });
  }, []);

  return <div className="">Signin Page</div>;
};
