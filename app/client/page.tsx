"use client"

import {  useUser } from "@clerk/nextjs";


const ClientPage = () => {
    const { isLoaded, isSignedIn, user } = useUser();

    if(!isLoaded || !isSignedIn) {
        return null;
    }
  return (
    <div className="flex flex-col items-center justify-center text-2xl h-full">
        Hello, {user.firstName} welcome to Feest
    </div>
  )
}

export default ClientPage