export type ApiError = {
  status: number;
  message: string;
  details?: unknown;
};

const API_BASE = import.meta.env.VITE_API_BASE ?? "https://api.example.com";

async function parseError(res: Response): Promise<ApiError> {
  let details: unknown = undefined;
  try {
    details = await res.json();
  } catch {}

  return {
    status: res.status,
    message: (details as any)?.message || res.statusText || "Request failed",
    details
  };
}

export async function api<T>(
  path: string,
  options: RequestInit & { auth?: boolean } = {}
): Promise<T> {
  const headers = new Headers(options.headers);

  if (!headers.has("Content-Type") && options.body) {
    headers.set("Content-Type", "application/json");
  }

  // later: auth/refresh token can be added here
  // if (options.auth) headers.set("Authorization", `Bearer ${token}`);

  const res = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers
  });

  if (!res.ok) throw await parseError(res);
  return (await res.json()) as T;
}
