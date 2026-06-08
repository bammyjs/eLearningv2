type NetlifyResponse = {
  statusCode: number;
  headers?: Record<string, string>;
  body: string;
};

const jsonHeaders = {
  "content-type": "application/json",
};

function respond(
  statusCode: number,
  body: Record<string, unknown>,
): NetlifyResponse {
  return {
    statusCode,
    headers: jsonHeaders,
    body: JSON.stringify(body),
  };
}

export async function handler(event: {
  httpMethod?: string;
  body?: string | null;
}): Promise<NetlifyResponse> {
  if (event.httpMethod !== "POST") {
    return respond(405, { error: "Method not allowed." });
  }

  if (!event.body) {
    return respond(400, { error: "Request body is required." });
  }

  let payload: {
    email?: unknown;
  };
  try {
    payload = JSON.parse(event.body);
  } catch {
    return respond(400, { error: "Invalid JSON body." });
  }

  const {email} = payload;

  if (typeof email !== "string" || !email.trim()) {
    return respond(400, { error: "All fields are required." });
  }

  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!botToken || !chatId) {
    return respond(500, { error: "Telegram bot configuration is missing." });
  }

  const text = `📩 New contact form submission\n\nEmail: ${email.trim()}`;
  const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const response = await fetch(telegramUrl, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify({
      chat_id: chatId,
      text,
      disable_web_page_preview: true,
    }),
  });

  const responseBody = await response.json().catch(() => null);

  if (!response.ok || responseBody?.ok !== true) {
    return respond(500, {
      error:
        responseBody?.description || "Failed to send message via Telegram.",
    });
  }

  return respond(200, { ok: true });
}
