
"use client";

import { useState } from "react";
import {
  Search,
  Bell,
  Plus,
  Menu,
  X,
  UserRound,
  Settings,
  LogOut,
} from "lucide-react";


import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4">

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
        <div className="hidden items-center gap-2 md:flex">
          <Button className="rounded-full">
            <Plus size={18} />
            Create Post
          </Button>

          <Button variant="ghost" size="icon">
            <Bell size={21} />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="rounded-full"
              >
                <Avatar>
                  <AvatarFallback>NH</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <UserRound size={16} />
                Profile
              </DropdownMenuItem>

              <DropdownMenuItem>
                <Settings size={16} />
                Settings
              </DropdownMenuItem>

              <DropdownMenuItem>
                <LogOut size={16} />
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="space-y-3 border-t bg-white p-4 md:hidden">
          <div className="relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />

            <Input
              placeholder="Search..."
              className="rounded-full pl-10"
            />
          </div>

          <Button className="w-full">
            <Plus size={18} />
            Create Post
          </Button>

          <Button variant="outline" className="w-full">
            <Bell size={18} />
            Notifications
          </Button>

          <Button variant="outline" className="w-full">
            <UserRound size={18} />
            Profile
          </Button>
        </div>
      )}
    </header>
  );
}
