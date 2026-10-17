const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });

export function formatPrice(value: number) {
  return currency.format(value);
}

export function Price({ value, className }: { value: number; className?: string }) {
  return <span className={className ?? 'price'}>{formatPrice(value)}</span>;
}
