"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useAlertStore } from "@/stores/useAlertStore";

const Sidebar = () => {
  const path = usePathname();
  
  let alerts = useAlertStore(state => state.newAlerts)

  const links = [
    // { href: "/", icon: "📜", label: "History" },
    { href: "/", icon: "🔔", label: "Alerts" },
    { href: "/monitor", icon: "📡", label: "Monitor" },
  ];

  return (
    <div className="w-80 h-screen p-6 bg-[#2C6E49] flex flex-col justify-between">
      <div>
        <h1 className="font-bold text-3xl text-white mb-4">Rainforest Monitoring</h1>

        {/* Separator Bar */}
        <div className="w-full h-[2px] bg-white bg-opacity-30 mb-6"></div>

        <nav className="space-y-4">
          {links.map(({ href, icon, label }) => {
            const isActive = path === href;

            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center transition-colors ${
                  isActive ? "text-[#A3C9A8] font-semibold" : "text-white hover:text-[#A3C9A8]"
                }`}
              >
                <span className="relative mr-3 text-xl">
                  {icon}
                  {label === "Alerts" && alerts > 0 && (
                    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full px-2">
                      {alerts}
                    </span>
                  )}
                </span>
                {label}

              </Link>
            );
          })}
        </nav>
      </div>

      <footer className="text-white text-sm">
        CPE 3B MicroTron
      </footer>
    </div>
  );
};

export default Sidebar;
