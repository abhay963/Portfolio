import { useEffect } from "react";

export default function VapiWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://unpkg.com/@vapi-ai/client-sdk-react/dist/embed/widget.umd.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <vapi-widget
      public-key={import.meta.env.VITE_VAPI_PUBLIC_KEY}
      assistant-id={import.meta.env.VITE_VAPI_ASSISTANT_ID}
      mode="voice"
      theme="dark"
      base-bg-color="#0d1117"
      accent-color="#3b82f6"
      cta-button-color="#1f2937"
      cta-button-text-color="#ffffff"
      border-radius="medium"
      size="compact"
      position="bottom-right"
      title="Talk With My Assistant 🤖"
      chat-first-message="Hello! I am Abhay Assistant. How can I help you?"
    ></vapi-widget>
  );
}
