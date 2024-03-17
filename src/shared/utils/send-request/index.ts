export type RequestConfig = {
  url: string;
  method?: "POST" | "GET" | "PUT" | "DELETE";
  body?: unknown;
  params?: Record<string, unknown>;
  headers?: Record<string, string>;
};

const BASE_URL = "https://auth-qa.qencode.com/v1/auth";

export default async function sendRequest<ResponseData = unknown>({
  url,
  method = "GET",
  params,
  headers = {},
  body,
}: RequestConfig) {
  const searchParams = params
    ? `?${new URLSearchParams(normalizeParams(params))}`
    : "";

  const response = await fetch(`${BASE_URL}/${url}${searchParams}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: body ? JSON.stringify(body) : null,
  });

  let responseData: unknown;

  try {
    responseData = await response.json();
  } catch {
    // do nothing
  }

  if (!response.ok) {
    const errorInfo = JSON.stringify({
      request: {
        url: response.url,
        method,
        body,
        params,
      },
      response: {
        status: response.status,
        data: responseData,
      },
    });
    const errorMessage = `Request failed, info: ${errorInfo}`;
    console.error(errorMessage);
    throw new Error("", {
      cause: responseData,
    });
  }

  return responseData as ResponseData;
}

function normalizeParams(
  params: Record<string, unknown>,
): Record<string, string> {
  return Object.entries(params).reduce<Record<string, string>>(
    (acc, [key, value]) => {
      if (typeof value !== "undefined") {
        acc[key] = encodeURIComponent(String(value));
      }

      return acc;
    },
    {},
  );
}
