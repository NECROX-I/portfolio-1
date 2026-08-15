interface SectionLabelProps {
  index: string;
  label: string;
}

/** The recurring "01 · ABOUT" style heading used at the top of every section. */
export function SectionLabel({ index, label }: SectionLabelProps) {
  return (
    <div className="section-label">
      <span>{index}</span>
      <span>{label}</span>
    </div>
  );
}
