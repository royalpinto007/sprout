import { useEffect, useState } from 'react'
import { NAV, APP } from '../data/app'

export function Nav({ path = '/' }: { path?: string }) {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  const active = (href: string) =>
    path === href || (href !== '/' && path.startsWith(href))
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? 'border-b border-[var(--color-line)] bg-[var(--color-mist)]/85 backdrop-blur'
          : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
        <a
          href="/"
          className="flex items-center gap-2 font-display text-2xl font-semibold"
        >
          <span className="grid h-8 w-8 place-items-center rounded-full bg-[var(--color-leaf)] text-base">
            🌱
          </span>
          {APP.name}
        </a>
        <ul className="hidden items-center gap-8 text-sm font-bold md:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className={`transition-colors hover:text-[var(--color-leaf-deep)] ${
                  active(n.href)
                    ? 'text-[var(--color-leaf-deep)]'
                    : 'text-[var(--color-ink)]'
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/pricing"
          className="hidden rounded-full bg-[var(--color-leaf)] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--color-leaf-deep)] md:inline-block"
        >
          Get Sprout
        </a>
        <button
          className="md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-7 rounded-full bg-current" />
          <span className="mt-2 block h-0.5 w-7 rounded-full bg-current" />
        </button>
      </nav>
      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-line)] bg-[var(--color-mist)] px-6 py-4 text-lg font-bold md:hidden">
          {NAV.map((n) => (
            <li key={n.href}>
              <a className="block py-2.5" href={n.href}>
                {n.label}
              </a>
            </li>
          ))}
          <li>
            <a
              className="mt-2 block rounded-full bg-[var(--color-leaf)] px-5 py-3 text-center text-base text-white"
              href="/pricing"
            >
              Get Sprout
            </a>
          </li>
        </ul>
      )}
    </header>
  )
}
