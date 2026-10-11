export interface ToastProps {
  show: boolean
  message: string
}

export function Toast({ show, message }: ToastProps) {
  if (!show) return null

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-surface-container-high border border-tag-emerald/40 text-on-surface px-4 py-2.5 rounded-lg shadow-2xl font-mono text-xs transition-all animate-in fade-in slide-in-from-bottom-2"
    >
      <span className="w-2 h-2 rounded-full bg-tag-emerald" />
      <span>{message}</span>
    </div>
  )
}
