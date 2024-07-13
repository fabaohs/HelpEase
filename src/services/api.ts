import crypto from "crypto";

export interface iApiConfig {
  path: string;
  config: RequestInit;
}

// BODY NEED TO BE A JSON STRING
function cryptBody(body: string) {
  const secret = process.env.NEXT_PUBLIC_API_SECRET;

  if (!secret) {
    throw new Error("API_SECRET is not defined");
  }
  const key = crypto
    .createHash("sha256")
    .update(String(secret))
    .digest("base64")
    .substr(0, 32);

  const cipher = crypto.createCipheriv(
    "aes-256-cbc",
    key,
    crypto.randomBytes(16)
  );

  let encrypted = cipher.update(JSON.stringify(body), "utf8", "hex");
  encrypted += cipher.final("hex");
  return encrypted;
}

export async function api({ path, config }: iApiConfig) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/${path}`;

  let newConfig = config;

  if (
    config.method === "POST" ||
    config.method === "PUT" ||
    config.method === "PATCH"
  ) {
    newConfig = {
      ...config,
      headers: {
        ...config.headers,
        "Access-Control-Allow-Origin": "*",
      },
      // body: cryptBody(JSON.stringify(config.body)),
      body: JSON.stringify(config.body),
    };
  }

  const response = await fetch(url, newConfig).then((res) => res.json());

  return response;
}
