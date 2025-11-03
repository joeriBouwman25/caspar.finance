export const Heading = ({ title }: { title: string }) => {
  return (
    <h1 className="text-3xl sm:text-4xl font-light tracking-tight mb-12 relative">
      {title}
      <span className="mt-5 block h-1 w-28 rounded-full bg-primary-500" />
    </h1>
  );
};
