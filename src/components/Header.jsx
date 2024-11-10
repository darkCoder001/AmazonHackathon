import { Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-4 md:px-6 fixed top-0 left-0 w-full bg-white z-50">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer">
        <div className="h-8 w-[100px] flex items-center justify-center">
          <img src="/images/logo.png" alt="logo" />
        </div>
      </div>

      {/* Navigation Links - Hidden on small screens */}
      <div className="hidden md:flex gap-8">
        <div className="cursor-pointer flex items-center gap-1">
          Start
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="cursor-pointer flex items-center gap-1">
          Grow
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="cursor-pointer flex items-center gap-1">
          Pricing
          <ChevronDown className="h-4 w-4" />
        </div>
        <div className="cursor-pointer flex items-center gap-1">
          Resources
          <ChevronDown className="h-4 w-4" />
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        {/* Start Selling Button - Hidden on small screens */}
        <div className="hidden md:flex bg-[#f59e0b] px-6 py-2 rounded-2xl cursor-pointer hover:bg-[#FF9900]/90">
          Start Selling
        </div>

        {/* Search Icon - Visible on all screens */}
        <div className="flex items-center justify-center cursor-pointer p-2">
          <Search className="h-5 w-5" />
          <span className="sr-only">Search</span>
        </div>
      </div>
    </div>
  );
}
