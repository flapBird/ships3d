import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site.config";

export const metadata = buildMetadata({ title: "Contact", path: "/contact" });

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <h1 className="font-heading font-extrabold text-3xl sm:text-4xl text-text-dark mb-4">
        Contact Us
      </h1>
      <p className="mb-8 leading-relaxed text-text-dark/70">
        Found incorrect information or having trouble launching the game?
        Send the site operator an email below.
      </p>

      <div className="rounded-2xl border border-text-dark/10 bg-white p-6 shadow-sm">
        <p className="mb-2 text-sm text-text-dark/60">Email:</p>
       <a
         href={`mailto:${siteConfig.contact.email}`}
         className="text-primary font-medium text-lg hover:underline"
       >
         {siteConfig.contact.email}
       </a>
     </div>

      <p className="mt-8 text-sm leading-6 text-text-dark/60">
        Include your browser and device type when reporting a loading problem.
        Please contact the game developer directly for account or in-game support.
      </p>
    </div>
  );
}
