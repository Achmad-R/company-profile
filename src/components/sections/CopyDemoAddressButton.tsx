"use client";

import { useId, useState } from "react";
import { contactContent } from "@/content/site-content";

type CopyDemoAddressButtonProps = {
  email: string;
  description: string;
};

// Copies a demonstration address and reports the real clipboard outcome.
// On failure (or when the clipboard API is unavailable) the user is told to
// select the address text manually; success is never claimed early.
export default function CopyDemoAddressButton({
  email,
  description,
}: CopyDemoAddressButtonProps) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const statusId = useId();

  const copyAddress = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("unavailable");
      await navigator.clipboard.writeText(email);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <div>
      <button
        type="button"
        onClick={copyAddress}
        aria-label={description}
        aria-describedby={status === "idle" ? undefined : statusId}
        className="inline-flex min-h-11 items-center justify-center rounded-control border border-control-border px-6 py-2.5 text-control font-semibold text-primary-text transition duration-(--duration-micro) ease-signal hover:border-signal-cyan hover:text-signal-cyan active:scale-[0.98]"
      >
        {contactContent.copyButtonLabel}
      </button>
      {status !== "idle" ? (
        <p
          id={statusId}
          role="status"
          className={`mt-3 text-sm leading-relaxed ${
            status === "success" ? "text-success" : "text-secondary-text"
          }`}
        >
          {status === "success"
            ? contactContent.copySuccess
            : contactContent.copyFailure}
        </p>
      ) : null}
    </div>
  );
}
