import { GoogleMap } from "../components/GoogleMap";
import { Heading } from "../components/ui/Heading";
import { CONTACT_ITEMS } from "../constants/contactItems";

export const ContactPage = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-28 pb-24 text-gray-200">
      <Heading title="Contact" />
      <p className="text-lg leading-relaxed text-gray-300 max-w-3xl mb-14">
        Neem telefonisch of per email contact op voor een gratis en vrijblijvend
        gesprek om te ontdekken waar we je bij kunnen ondersteunen!
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <div className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 p-6 md:p-8 shadow-sm flex flex-col h-full">
          <h2 className="text-2xl font-light tracking-tight mb-8">
            Contact informatie
          </h2>
          <ul className="space-y-5 flex-1">
            {CONTACT_ITEMS.map(({ Icon, label }, idx) => (
              <li key={idx} className="flex items-start gap-4 text-gray-300">
                <span className="mt-0.5 flex-none">
                  <Icon className="w-5 h-5 text-primary-400" />
                </span>
                <span className="text-base leading-relaxed">{label}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 text-sm text-gray-400">
            Laat een bericht achter en we nemen spoedig contact op.
          </div>
        </div>

        <div className="flex flex-col h-full">
          <GoogleMap showTitle={false} />
        </div>
      </div>
    </section>
  );
};
