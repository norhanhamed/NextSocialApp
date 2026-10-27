
"use client";

import Link from "next/link";
import { useState } from "react";
import {
  House,
  UserRound,
  UsersRound,
  Bookmark,
  Settings,
  LogOut,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Home", href: "/", icon: House },
  { label: "My Profile", href: "/profile", icon: UserRound },
  { label: "Friends", href: "/friends", icon: UsersRound },
  { label: "Saved Posts", href: "/saved", icon: Bookmark },
  { label: "Settings", href: "/settings", icon: Settings },
];

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function Sidebar({
  isOpen,
  onClose,
}: SidebarProps) {
  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <button
          type="button"
          aria-label="Close sidebar"
          className="fixed inset-0 z-40 bg-black/40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-16 z-50 h-[calc(100vh-4rem)] w-64
          border-r bg-white p-4 transition-transform duration-300
          md:sticky md:top-16 md:z-0 md:block md:h-[calc(100vh-4rem)]
          md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Mobile Close Button */}
        <div className="mb-4 flex justify-end md:hidden">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close menu"
            onClick={onClose}
          >
            <X size={20} />
          </Button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-gray-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
              >
                <Icon size={21} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Log Out */}
        <div className="mt-6 border-t pt-4">
          <button
            type="button"
           className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-gray-700 transition-colors hover:bg-red-50 hover:text-red-600"
            onClick={() => {
              onClose();
              alert("Logout will be implemented later");
            }}
          >
            <LogOut size={21} />
            <span>Log out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
