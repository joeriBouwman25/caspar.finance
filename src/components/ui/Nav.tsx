import { NavLink } from "react-router";

interface NavProps {
  navItems: { label: string; href: string }[];
  direction?: "row" | "col";
  onNavigate?: () => void;
}
export const Nav = ({ navItems, direction = "row", onNavigate }: NavProps) => {
  return (
    <nav>
      <ul
        className={
          direction === "col"
            ? "flex flex-col gap-6 py-10 px-6"
            : "flex items-center gap-10"
        }
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <NavLink
              to={item.href}
              viewTransition
              className={({ isActive }) =>
                [
                  "relative inline-block pb-2 tracking-wide transition-colors",
                  "text-[#dddddd] hover:text-white text-lg",
                  isActive
                    ? "text-white after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-14 after:bg-[var(--color-primary-500)]"
                    : "after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-[var(--color-primary-500)] hover:after:w-14 after:transition-all",
                ].join(" ")
              }
              onClick={onNavigate}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
