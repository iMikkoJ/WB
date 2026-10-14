import { COMPANY, LINKS } from "@/lib/constants";

export function MobileCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-blue/20 bg-blue px-4 py-3 md:hidden"
      role="complementary"
      aria-label="Pikasoitto"
    >
      <a
        href={LINKS.tel}
        className="btn btn-yellow w-full"
        aria-label={`Soita numeroon ${COMPANY.phoneDisplay}`}
      >
        Soita {COMPANY.phoneDisplay}
      </a>
    </div>
  );
}
