import { type FormEvent, useState } from "react";
import { Rocket } from "lucide-react";
import DarkVeil from "../components/ui/DarkVeil";
import { Button } from "../components/ui/Button";

export default function ComingSoon() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const isValid =
    !submitted && email.trim() !== "" && /\S+@\S+\.\S+/.test(email);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) return;

    setStatus("sending");
    setError(null);

    try {
      const response = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const body = await response.json();

      if (!response.ok) {
        throw new Error(
          (body && (body.error || body.message)) ?? "Failed to send message.",
        );
      }

      setStatus("sent");
      setEmail("");
      setSubmitted(true);
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "Something went wrong while sending your message.";
      setStatus("error");
      setError(errorMessage);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-black/80 to-black">
      <div className="absolute inset-0 z-0 pointer-events transition-opacity">
        <DarkVeil
          hueShift={15}
          noiseIntensity={0}
          scanlineIntensity={0}
          speed={0.5}
          scanlineFrequency={0}
          warpAmount={0}
          resolutionScale={1}
        />
      </div>
      {/* <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/25 via-black/35 to-black/70" /> */}

      <div className="relative min-h-screen z-10 flex items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-base font-medium tracking-wide text-white/75">
            <span>Launch</span>
            <Rocket className="h-5 w-5 text-white" />
          </div>

          <h1 className="text-4xl font-heading font-semibold leading-tight tracking-tight md:text-6xl text-white">
            We&apos;re Coming Soon..
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70 md:text-xl">
            We&apos;re working on our new website. Join our newsletter and get
            notified.
          </p>

          <form
            className="mx-auto mt-10 flex w-full max-w-md flex-col items-center gap-4"
            onSubmit={handleSubmit}
          >
            <div className="flex w-full items-center gap-2 rounded-full border border-white/20 bg-white/5 p-2 backdrop-blur">
              <input
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setSubmitted(false);
                }}
                type="email"
                placeholder="you@example.com"
                className="h-11 w-full bg-transparent px-4 text-sm text-white placeholder:text-white/50 focus:outline-none"
                required
              />
              <Button
                type="submit"
                size="md"
                className="h-11 whitespace-nowrap rounded-full border border-white/35 bg-white/10 px-6 text-white hover:bg-white/20 hover:text-white shadow-none"
              >
                Notify Me
              </Button>
            </div>

            {submitted ? (
              <div className="text-sm text-white/70">
                Thanks! You&apos;re on the list.
              </div>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
