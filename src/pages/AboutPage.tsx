import teamColorImg from "../assets/team kleur.jpg";
import { TeamMemberCard } from "../components/ui/TeamMemberCard";
import { TEAM_MEMBERS } from "../constants/crew";
import { Heading } from "../components/ui/Heading";

export const AboutPage = () => {
  return (
    <section className="relative mx-auto max-w-6xl px-5 pt-28 pb-24 text-gray-200">
      <Heading title="Wie zijn wij?" />
      <p className="text-lg leading-relaxed text-gray-300 max-w-3xl">
        In 1995 heeft Paul Hermans de coöperatieve werkvereniging, Caspar
        Finance opgericht. In 2025 zijn de werkzaamheden vervolgd in Caspar
        Finance B.V. Caspar Finance is gevestigd in Naarden en is een allround
        kantoor op het gebied van administratie en belastingaangiften.
        <br />
        Ons kantoor heeft een vaste, diverse, trouwe klantenkring die ieder jaar
        verder uitgroeit.
        <br />
        Onze klanten vinden het heel prettig dat wij aan de voorkant duidelijk
        zijn over de kosten door te werken met een abonnement en geen extra
        kosten in rekening brengen bij vragen.
      </p>
      <div className="mt-16 grid gap-10 md:grid-cols-2 ">
        {TEAM_MEMBERS.map((member) => (
          <TeamMemberCard
            key={member.name}
            name={member.name}
            img={member.img}
            alt={member.alt}
          >
            {member.body}
          </TeamMemberCard>
        ))}
        <article className="relative rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/5 p-4 shadow-sm flex items-center justify-center">
          <img
            src={teamColorImg}
            alt="Team CF"
            className="w-full h-auto object-contain select-none"
            draggable={false}
          />
        </article>
      </div>
    </section>
  );
};
