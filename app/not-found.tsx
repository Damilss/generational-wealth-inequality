import Link from "next/link";

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "grid",
        placeItems: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div>
        <h1 style={{ margin: 0, fontSize: "2rem" }}>404 - Page Not Found</h1>
        <p style={{ marginTop: "0.75rem", marginBottom: "1rem" }}>
          The page you are looking for does not exist.
        </p>
        <Link href="/">Back to main page</Link>
      </div>
    </main>
  );
}
