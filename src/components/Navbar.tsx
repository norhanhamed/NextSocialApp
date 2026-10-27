
"use client";

import {
  Search,
  Bell,
  Plus,
  Menu,
  UserRound,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

type NavbarProps = {
  onMenuClick: () => void;
};

export default function Navbar({ onMenuClick }: NavbarProps) {
  return (
    <header className="sticky top-0 z-30 border-b bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">

        {/* Mobile Sidebar Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Open menu"
          onClick={onMenuClick}
        >
          <Menu size={22} />
        </Button>

        {/* Logo */}
        <a
          href="/"
          className="shrink-0 text-xl font-bold text-blue-600"
        >
          Social App
        </a>

        {/* Search */}
        <div className="relative hidden w-full max-w-md md:block">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />

          <Input
            placeholder="Search people and posts..."
            className="rounded-full bg-gray-100 pl-10"
          />
        </div>

        {/* Desktop Actions */}
        <div className="flex items-center gap-2">
          <Button className="hidden rounded-full sm:flex">
            <Plus size={18} />
            Create Post
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Notifications"
          >
            <Bell size={21} />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            aria-label="Profile"
          >
            <Avatar>
              <AvatarFallback>
                <UserRound size={20} />
              </AvatarFallback>
            </Avatar>
          </Button>
        </div>
      </nav>
    </header>
  );
}
