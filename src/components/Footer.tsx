export function Footer() {
  return (
    <footer className="border-t border-slate-900 py-8 text-center text-xs text-slate-500">
      <p>
        &copy; {new Date().getFullYear()} Matheus Faleiro. Hosted on{' '}
        <a href="https://matheusfaleiro.dev" className="text-slate-400 hover:underline">
          matheusfaleiro.dev
        </a>
        .
      </p>
    </footer>
  )
}
