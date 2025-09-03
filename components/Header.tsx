'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/', label: 'INÍCIO' },
  { href: '/sobre', label: 'SOBRE' },
  { href: '/cursos', label: 'CURSOS' },
  { href: '/publicidade', label: 'PUBLICIDADE' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="container mx-auto max-w-6xl flex items-center justify-between px-6 py-4">
        {/* Links à esquerda */}
        <div className="flex gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition ${
                pathname === l.href ? 'font-semibold underline' : ''
              } text-white`}
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Lupa à direita */}
        <button className="text-white hover:opacity-80 transition">
        </button>
      </nav>
    </header>
  );
}
