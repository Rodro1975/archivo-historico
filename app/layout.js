// `app/layout.js`
import "animate.css";
import "tailwindcss/tailwind.css"; // Tailwind CSS
import "../styles/globals.css"; // Tus estilos globales

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
