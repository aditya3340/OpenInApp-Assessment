"use client";
import Dashboard from "@/component/Dashboard";
import Singin from "@/component/SignIn";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const page = () => {
  const session = useSession();

  console.log(session);

  if (session.status === "loading") {
    return <p>loading....</p>;
  }
  if (session.status === "authenticated") {
    return (
      <div className="py-2 lg:px-10 lg:py-10">
        <Dashboard />
      </div>
    );
  }
  if (session.status === "unauthenticated") {
    return <Singin />;
  }

  return <Singin />;
};

export default page;
