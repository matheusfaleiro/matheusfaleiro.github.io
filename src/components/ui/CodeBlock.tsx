export interface CodeBlockProps {
  comment?: string
  lines: string[]
  className?: string
}

export function CodeBlock({ comment, lines, className = '' }: CodeBlockProps) {
  return (
    <pre
      className={`bg-surface-container-lowest p-3 rounded font-mono text-xs text-primary leading-relaxed overflow-x-auto ${className}`}
      data-testid="code-block"
    >
      <code>
        {comment && <div className="text-outline select-none">{comment}</div>}
        {lines.map((line, idx) => (
          <div key={idx}>{line}</div>
        ))}
      </code>
    </pre>
  )
}
