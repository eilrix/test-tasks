export async function fetchApi(path: string, options: RequestInit = {}) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || `http://localhost:3001`}/api/${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!res.ok) {
    throw new Error(await res.text());
  }

  return res.json();
}
