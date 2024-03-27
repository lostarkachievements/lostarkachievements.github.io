import "../style/globals.css"

import type { LAYOUT } from "../repos/layout"

export default function RootLayout({ children }: LAYOUT) {
    return (
        <html lang="en">
            <title>LA Achievements</title>
            <body>{children}</body>
        </html>
    )
}