import React, { ReactNode } from "react";

interface TeamMemberCardProps {
  name: string;
  img: string;
  alt: string;
  children: ReactNode; // biography paragraph(s)
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  img,
  alt,
  children,
  className = "",
}) => {
  return (
    <article
      className={`group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 via-white/5 to-white/5 backdrop-blur-sm p-6 shadow-sm ring-1 ring-white/5 transition duration-500 hover:shadow-xl hover:-translate-y-1 will-change-transform overflow-hidden before:absolute before:inset-0 before:-z-10 before:opacity-0 before:transition before:duration-500 before:bg-[radial-gradient(circle_at_30%_20%,rgba(190,157,104,0.35),transparent_60%)] group-hover:before:opacity-100 dark:before:bg-[radial-gradient(circle_at_70%_80%,rgba(190,157,104,0.25),transparent_65%)] ${className}`}
    >
      <div className="mb-5 overflow-hidden rounded-lg ring-1 ring-white/10 shadow-sm relative">
        <img
          src={img}
          alt={alt}
          className="w-full h-100 object-cover transition duration-700 ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />
      </div>
      <h3 className="text-xl font-semibold mb-5 tracking-tight text-primary-400">
        {name}
      </h3>
      <div className="text-gray-300 leading-relaxed text-base">{children}</div>
    </article>
  );
};
