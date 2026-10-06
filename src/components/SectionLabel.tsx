type SectionLabelProps = {
  index: string
  children: string
  light?: boolean
}

export function SectionLabel({ index, children, light = false }: SectionLabelProps) {
  return (
    <div className={`section-label ${light ? 'section-label--light' : ''}`}>
      <span className="section-label__line" aria-hidden="true" />
      <span>{index}</span>
      <span className="section-label__title">{children}</span>
    </div>
  )
}
