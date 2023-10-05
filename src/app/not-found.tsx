import Link from "next/link"
export default function NotFound() {
    return (
        <main className="h-screen flex items-center justify-center">
             <h1 className="">404</h1>
             <h1>Page Not Found</h1>
             <h4>Please Continue To Our <Link href="/">Home Page</Link></h4>
        </main>
       
    )
}