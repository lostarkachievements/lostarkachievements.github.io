import "../style/globals.css"

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en">
            <title>LA Achievements</title>
            <body>
                <div className="layout">
                    <header>
                        <h1>Achievements</h1>
                    </header>
                    <aside></aside>
                    <main>{children}</main>
                </div>
            </body>
        </html>
    )
}