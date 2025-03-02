"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, GraduationCap } from "lucide-react";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const menuItems = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "About",
    //   href: "/about",
      dropdown: [
        { name: "About", href: "/about" },
        { name: "Our History", href: "/about/history" },
        { name: "Mission & Values", href: "/about/mission" },
        // { name: "Leadership", href: "/about/leadership" },
        // { name: "Campus", href: "/about/campus" },
      ],
    },
    {
      name: "Academics",
      href: "/academics",
    //   dropdown: [
    //     { name: "Elementary School", href: "/academics/elementary" },
    //     { name: "Middle School", href: "/academics/middle" },
    //     { name: "High School", href: "/academics/high" },
    //     { name: "Curriculum", href: "/academics/curriculum" },
    //   ],
    },
    {
      name: "Admissions",
      href: "/admissions",
    //   dropdown: [
    //     { name: "Process", href: "/admissions/process" },
    //     { name: "Tuition & Aid", href: "/admissions/tuition" },
    //     { name: "Visit Us", href: "/admissions/visit" },
    //     { name: "Apply", href: "/admissions/apply" },
    //   ],
    },
    // {
    //   name: "Student Life",
    //   href: "/student-life",
    //   dropdown: [
    //     { name: "Athletics", href: "/student-life/athletics" },
    //     { name: "Arts", href: "/student-life/arts" },
    //     { name: "Clubs", href: "/student-life/clubs" },
    //     { name: "Community Service", href: "/student-life/service" },
    //   ],
    // },
    { name: "News & Events", href: "/news" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-center">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Avatar className="w-15 h-15 rounded-full">
              <AvatarImage src="/logo.jpg" alt="User Profile" className="rounded-full "/>
            </Avatar>
            <span className="font-bold text-xl hidden sm:inline-block">
              Sardar Patel Hr. Sec. School
            </span>
            <span className="font-bold text-xl sm:hidden">Sardar patel</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.dropdown ? (
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
              ) : (
                <Link
                  href={item.href}
                  className="text-sm font-medium transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
              )}

              {item.dropdown && (
                <div
                  className={`absolute left-0 top-full w-48 p-2 bg-background rounded-md shadow-md border ${
                    openDropdown === item.name ? "block" : "hidden"
                  } group-hover:block`}
                >
                  {item.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      href={subItem.href}
                      className="block px-3 py-2 text-sm rounded-sm hover:bg-muted"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* <div className="hidden lg:flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/portal">Student/Parent Portal</Link>
          </Button>
          <Button asChild size="sm">
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
        </div> */}

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="container py-4">
            <nav className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div>
                      <button
                        onClick={() => toggleDropdown(item.name)}
                        className="flex items-center justify-between w-full py-2 text-sm font-medium"
                      >
                        {item.name}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openDropdown === item.name ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {openDropdown === item.name && (
                        <div className="ml-4 mt-2 flex flex-col gap-2 border-l pl-4">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className="py-2 text-sm"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block py-2 text-sm font-medium"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
            {/* <div className="mt-6 flex flex-col gap-4"> */}
              {/* <Button asChild variant="outline" className="w-full">
                <Link href="/portal" onClick={() => setIsMenuOpen(false)}>
                  Student/Parent Portal
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link
                  href="/admissions/apply"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Apply Now
                </Link>
              </Button> */}
            {/* </div> */}
          </div>
        </div>
      )}
    </header>
  );
}
