'use client';
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white">404 - Page Not Found</h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">The page you are looking for does not exist.</p>
            <Link href="/" className="mt-6 text-blue-500 hover:underline">Go back to Home</Link>
        </div>
    );
}