import { InfoCard } from "../components/ui/InfoCard";
import { RATES } from "../constants/rate";
import { Heading } from "../components/ui/Heading";

export const WerkwijzePage = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-28 pb-24 text-gray-200">
      <Heading title="Hoe werken wij?" />
      <div className="grid gap-10 md:grid-cols-2">
        {RATES.map((rate) => (
          <InfoCard
            key={rate.title}
            title={rate.title}
            icon={
              <rate.Icon className="h-6 w-6 text-primary-500 group-hover:scale-110 transition-transform duration-300" />
            }
          >
            {rate.description}
          </InfoCard>
        ))}
      </div>
    </section>
  );
};
