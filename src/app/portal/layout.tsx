"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Calendar,
  MessageSquare,
  Users,
  FileText,
  GraduationCap,
  Settings,
  BookMarked,
  LogOut,
  Menu,
  X,
} from "lucide-react"

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  const [username] = useState("baba123")
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Mobile Sidebar Toggle
      <div className="fixed top-4 left-4 z-50 md:hidden">
        <Button variant="outline" size="icon" onClick={toggleSidebar} className="bg-background shadow-md">
          {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div> */}

      {/* Sidebar - Desktop (always visible) and Mobile (toggleable) */}
      {/* <div
        className={`fixed inset-0 z-40 md:relative md:z-0 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 bg-background md:w-64 md:min-w-64 flex-shrink-0 shadow-lg md:shadow-none`}
      >
        <div className="flex flex-col h-full p-6 overflow-y-auto">
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap className="h-8 w-8 text-primary" />
            <span className="font-bold text-xl">Student Portal</span>
          </div>

          <nav className="space-y-1">
            <Link
              href="/portal/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsSidebarOpen(false)}
            >
              <BookOpen className="h-5 w-5" />
              <span>Dashboard</span>
            </Link>
            <Link
              href="/portal/academic-records"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsSidebarOpen(false)}
            >
              <FileText className="h-5 w-5" />
              <span>Academic Records</span>
            </Link>
            <Link
              href="/portal/calendar"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Calendar className="h-5 w-5" />
              <span>Calendar</span>
            </Link>
            <Link
              href="/portal/communication"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsSidebarOpen(false)}
            >
              <MessageSquare className="h-5 w-5" />
              <span>Communication</span>
            </Link>
            <Link
              href="/portal/community"
              className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted"
              onClick={() => setIsSidebarOpen(false)}
            >
              <Users className="h-5 w-5" />
              <span>Community</span>
            </Link>
          </nav>

          <div className="mt-8 pt-8 border-t">
            <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Links</h3>
            <nav className="space-y-1">
              <Link
                href="/portal/settings"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm"
                onClick={() => setIsSidebarOpen(false)}
              >
                <Settings className="h-4 w-4" />
                <span>Settings</span>
              </Link>
              <Link
                href="/portal/help"
                className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted text-sm"
                onClick={() => setIsSidebarOpen(false)}
              >
                <BookMarked className="h-4 w-4" />
                <span>Help Center</span>
              </Link>
            </nav>
          </div>


        </div>
      </div> */}

      {/* Overlay for mobile when sidebar is open */}
      {/* {isSidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )} */}

      {/* Main Content */}
      <div className="flex-1 md:pl-0 pt-16 md:pt-0 overflow-auto">{children}</div>
    </div>
  )
}

