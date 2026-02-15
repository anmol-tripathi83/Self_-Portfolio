const FORMSPREE_URL = "https://formspree.io/f";
const FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID;

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitContactForm(payload: ContactPayload): Promise<{ ok: boolean; error?: string }> {
  if (!FORM_ID || FORM_ID === "your-formspree-form-id") {
    return { ok: false, error: "Contact form is not configured. Add VITE_FORMSPREE_FORM_ID to .env" };
  }

  try {
    const res = await fetch(`${FORMSPREE_URL}/${FORM_ID}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const msg = Array.isArray(data.errors) ? data.errors.map((e: { message?: string }) => e.message).join(", ") : "Failed to send message.";
      return { ok: false, error: msg };
    }

    return { ok: true };
  } catch (err) {
    return { ok: false, error: "Network error. Please try again." };
  }
}
