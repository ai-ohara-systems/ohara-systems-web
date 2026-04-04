export function loadProductData(product: string, lang: 'de' | 'en') {
  // Dynamic imports don't work well in Astro frontmatter for JSON,
  // so we'll use a map approach
  const modules = import.meta.glob('../data/products/**/*.json', { eager: true });
  const key = `../data/products/${product}/${lang}.json`;
  const mod = modules[key] as { default: any } | undefined;
  if (!mod) throw new Error(`Product data not found: ${key}`);
  return mod.default;
}
