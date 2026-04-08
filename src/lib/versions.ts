const GITHUB_API = 'https://api.github.com/repos/ai-ohara-systems/model-prism/releases/latest';
const FALLBACK_VERSION = 'v1.9.2';

let cached: string | null = null;

export async function getModelPrismVersion(): Promise<string> {
  if (cached) return cached;

  try {
    const res = await fetch(GITHUB_API, {
      headers: { Accept: 'application/vnd.github+json' },
    });
    if (!res.ok) throw new Error(`GitHub API ${res.status}`);
    const data = await res.json();
    // tag_name is e.g. "v1.2.0" — keep as-is
    cached = data.tag_name ?? FALLBACK_VERSION;
  } catch {
    cached = FALLBACK_VERSION;
  }

  return cached;
}
