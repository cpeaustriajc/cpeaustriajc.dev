export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className="h-screen max-h-screen overscroll-none antialiased overflow-auto">
        {children}
      </body>
    </html>
  )
}
