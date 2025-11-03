import { ReactNode } from "react";

interface InfoCardProps {
  title: string;
  icon: ReactNode;
  children: ReactNode;
}

export const InfoCard = ({ title, icon, children }: InfoCardProps) => {
  return (
    <article className="group relative rounded-xl border border-white/10 bg-white/5 backdrop-blur px-6 py-7 shadow-sm ring-1 ring-white/5 transition hover:shadow-md">
      <h2 className="flex items-center gap-3 text-lg sm:text-xl font-semibold">
        {icon}
        {title}
      </h2>
      <div className="mt-4 leading-relaxed text-gray-300 text-base">
        {children}
      </div>
    </article>
  );
};
