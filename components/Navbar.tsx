import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server"
import Link from "next/link"


const Navbar = async () => {
    const { userId } = await auth();
    return (
        <div className="bg-cyan-950 rounded-b-xl">
            <ul className="flex justify-between py-4 px-6">
                <div>
                    <Link href="/">
                        <li>Home</li>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Link href="/client">
                        <li>Client Page</li>
                    </Link> 
                </div>
                <div className="flex items-center gap-6">
                    {!userId ? (
                        <>
                            <Link href="/sign-in">
                                <li>Login</li>
                            </Link>
                            <Link href="/sign-up">
                                <li>Register</li>
                            </Link>
                        </>
                    ): (
                        <>
                            <Link href="/profile">
                                <li>Profile</li>
                            </Link>
                            <li className="flex items-center">
                                <UserButton />
                            </li>
                        </>
                    )}
                    
                </div>
            </ul>
        </div>
    )
}

export default Navbar