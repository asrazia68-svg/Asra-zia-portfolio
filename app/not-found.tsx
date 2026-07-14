import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-mono text-accent-highlight text-sm mb-4">404</p>
      <h1 className="font-heading font-bold text-4xl mb-4">Page not found</h1>
      <p className="text-text-secondary mb-8 max-w-md">
        The page you're looking for doesn't exist or may have moved.
      </p>
      <Link href="/" className="btn-primary px-6 py-3 text-white font-medium">
        Back to Home
      </Link>
    </div>
  );
}
