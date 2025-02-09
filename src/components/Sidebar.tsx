
import { cn } from "@/lib/utils";
import { Home, Apple, Stethoscope, HeartPulse, ShoppingBag, Briefcase, MessageSquare } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Apple, label: "Pawssible Bites", path: "/food" },
  { icon: HeartPulse, label: "TailMetrics", path: "/health" },
  { icon: MessageSquare, label: "SnoutFeed", path: "/connect" },
  { icon: Stethoscope, label: "Diagnose", path: "/diagnose" },
  { icon: Briefcase, label: "Services", path: "/services" },
  { icon: ShoppingBag, label: "Shopping", path: "/shopping" },
  
];

export function Sidebar() {
  const location = useLocation();

  return (
    <aside className="min-h-screen w-64 bg-white/80 backdrop-blur-sm border-r border-gray-200 fixed left-0 top-0"
    style={{ backgroundColor: '#fae1e3' }}
    >
      <div className="flex flex-col h-full px-3 py-4">
      <div className="mb-8 px-4 flex flex-col items-center text-center">
  <div className="flex items-center space-x-2">
    <h1 className="text-4xl font-bold text-gray-800">Tailwise</h1>
    <img src="/dog.png" alt="Tailwise Logo" className="h-12 w-12" />
  </div>
  <p className="text-sm text-gray-500">Pet Care Companion</p>
</div>
        <nav className="flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 px-4 py-3 text-gray-700 rounded-lg transition-colors",
                    "hover:bg-primary hover:text-primary-foreground",
                    location.pathname === item.path &&
                      "bg-primary text-primary-foreground"
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
