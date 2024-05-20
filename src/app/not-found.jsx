import Link from "next/link";

export default function NotFound() {
    return (
        <div>
            <h2>Not Found jaa</h2>
            <p>Sorry, the page you are looking for doesn't exist.</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}