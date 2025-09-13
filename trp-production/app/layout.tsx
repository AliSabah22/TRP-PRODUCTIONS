import './globals.css';

export const metadata = {
  title: 'TRP Creative - Simple Visions, Powerful Stories',
  description: 'Professional video production agency specializing in cinematic commercials, brand films, and compelling storytelling.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
