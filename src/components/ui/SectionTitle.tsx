import { cn } from '@/utils/cn';

export function SectionTitle({ eyebrow, title, description, className }: { eyebrow: string; title: string; description?: string; className?: string }) {
  return (
    <header className={cn('section-title', className)}>
      <p className="eyebrow"><span />{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </header>
  );
}
