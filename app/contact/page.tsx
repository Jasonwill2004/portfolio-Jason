import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact | Creative Developer Portfolio",
  description: "Get in touch with me for collaboration or inquiries",
}

export default function ContactPage() {
  return <ContactPageClient />
}
