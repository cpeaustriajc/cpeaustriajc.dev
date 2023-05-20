import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-950 dark:text-slate-50">
        <main className="max-w-prose">{children}</main>
      </body>
    </html>
  );
}
