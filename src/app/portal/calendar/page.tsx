"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  CalendarIcon,
  MessageSquare,
  Users,
  FileText,
  GraduationCap,
  ChevronLeft,
  ChevronRight,
  Plus,
  Clock,
  MapPin,
  Menu,
  LogOut,
} from "lucide-react";

export default function CalendarPage() {
  const [username] = useState("baba123");
  const [currentMonth] = useState("March 2025");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample calendar data
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const startDay = 6; // Saturday (0 = Sunday, 6 = Saturday)
  const totalDays = 31;

  // Calculate empty cells before the first day of the month
  const emptyCells = Array.from({ length: startDay }, (_, i) => i);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-muted/30">
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-6 pt-16 md:pt-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Calendar</h1>
            <p className="text-muted-foreground">
              View school events, assignments, and schedule appointments
            </p>
          </div>
          <Button className="flex items-center gap-2 w-full md:w-auto">
            <Plus className="h-4 w-4" />
            <span>Add Event</span>
          </Button>
        </div>

        {/* Calendar Navigation */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <h2 className="text-xl font-bold">{currentMonth}</h2>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex gap-2 overflow-x-auto w-full sm:w-auto">
            <Button variant="outline" size="sm">
              Today
            </Button>
            <Button variant="outline" size="sm">
              Month
            </Button>
            <Button variant="outline" size="sm">
              Week
            </Button>
            <Button variant="outline" size="sm">
              Day
            </Button>
          </div>
        </div>

        {/* Calendar Grid - Hidden on small screens */}
        <Card className="mb-8 hidden sm:block">
          <CardContent className="p-6">
            <div className="grid grid-cols-7 gap-1">
              {/* Day headers */}
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
                <div key={day} className="text-center font-medium py-2">
                  {day}
                </div>
              ))}

              {/* Empty cells for days before the 1st */}
              {emptyCells.map((_, index) => (
                <div
                  key={`empty-${index}`}
                  className="h-28 border rounded-md bg-muted/30"
                ></div>
              ))}

              {/* Calendar days */}
              {days.slice(0, totalDays).map((day) => (
                <div
                  key={day}
                  className={`h-28 border rounded-md p-1 ${
                    day === 5 ? "bg-primary/5 border-primary/30" : ""
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span
                      className={`text-sm font-medium ${
                        day === 5
                          ? "bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center"
                          : ""
                      }`}
                    >
                      {day}
                    </span>
                    {day === 4 && (
                      <span className="bg-red-100 text-red-800 text-xs px-1 rounded">
                        3 Due
                      </span>
                    )}
                  </div>

                  {/* Events for specific days */}
                  {day === 5 && (
                    <div className="mt-1 space-y-1">
                      <div className="bg-blue-100 text-blue-800 text-xs p-1 rounded truncate">
                        Math Test (10:30 AM)
                      </div>
                      <div className="bg-green-100 text-green-800 text-xs p-1 rounded truncate">
                        Science Club (3:30 PM)
                      </div>
                    </div>
                  )}

                  {day === 6 && (
                    <div className="mt-1 space-y-1">
                      <div className="bg-purple-100 text-purple-800 text-xs p-1 rounded truncate">
                        Basketball Practice (3:30 PM)
                      </div>
                    </div>
                  )}

                  {day === 7 && (
                    <div className="mt-1 space-y-1">
                      <div className="bg-yellow-100 text-yellow-800 text-xs p-1 rounded truncate">
                        Science Project Due (9:00 AM)
                      </div>
                    </div>
                  )}

                  {day === 10 && (
                    <div className="mt-1 space-y-1">
                      <div className="bg-orange-100 text-orange-800 text-xs p-1 rounded truncate">
                        Parent-Teacher Conference
                      </div>
                    </div>
                  )}

                  {day === 15 && (
                    <div className="mt-1 space-y-1">
                      <div className="bg-indigo-100 text-indigo-800 text-xs p-1 rounded truncate">
                        Spring Break Begins
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Mobile Calendar View - List format */}
        <Card className="mb-8 sm:hidden">
          <CardHeader>
            <CardTitle>March 2025</CardTitle>
            <CardDescription>Upcoming events this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "March 5",
                  events: [
                    {
                      title: "Math Test",
                      time: "10:30 AM - 12:00 PM",
                      type: "Academic",
                    },
                    {
                      title: "Science Club Meeting",
                      time: "3:30 PM - 4:30 PM",
                      type: "Extracurricular",
                    },
                  ],
                },
                {
                  date: "March 6",
                  events: [
                    {
                      title: "Basketball Practice",
                      time: "3:30 PM - 5:30 PM",
                      type: "Athletics",
                    },
                  ],
                },
                {
                  date: "March 7",
                  events: [
                    {
                      title: "Science Project Due",
                      time: "9:00 AM",
                      type: "Academic",
                    },
                  ],
                },
                {
                  date: "March 10-11",
                  events: [
                    {
                      title: "Parent-Teacher Conferences",
                      time: "3:30 PM - 7:30 PM",
                      type: "School Event",
                    },
                  ],
                },
                {
                  date: "March 15",
                  events: [
                    {
                      title: "Spring Break Begins",
                      time: "All Day",
                      type: "School Event",
                    },
                  ],
                },
              ].map((day, index) => (
                <div
                  key={index}
                  className="border-b pb-4 last:border-0 last:pb-0"
                >
                  <h3 className="font-bold text-sm bg-muted px-2 py-1 rounded mb-2">
                    {day.date}
                  </h3>
                  <div className="space-y-2">
                    {day.events.map((event, eventIndex) => (
                      <div key={eventIndex} className="flex gap-2">
                        <div
                          className={`
                          w-2 self-stretch rounded-full
                          ${
                            event.type === "Academic"
                              ? "bg-blue-500"
                              : event.type === "Athletics"
                              ? "bg-purple-500"
                              : event.type === "Extracurricular"
                              ? "bg-green-500"
                              : "bg-orange-500"
                          }
                        `}
                        ></div>
                        <div>
                          <p className="font-medium">{event.title}</p>
                          <p className="text-xs text-muted-foreground">
                            {event.time}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Upcoming Events */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>School events and activities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    title: "Math Test: Calculus",
                    date: "March 5, 2025",
                    time: "10:30 AM - 12:00 PM",
                    location: "Room 203",
                    type: "Academic",
                  },
                  {
                    title: "Science Club Meeting",
                    date: "March 5, 2025",
                    time: "3:30 PM - 4:30 PM",
                    location: "Science Lab",
                    type: "Extracurricular",
                  },
                  {
                    title: "Basketball Practice",
                    date: "March 6, 2025",
                    time: "3:30 PM - 5:30 PM",
                    location: "Gymnasium",
                    type: "Athletics",
                  },
                ].map((event, index) => (
                  <div
                    key={index}
                    className="flex gap-3 pb-4 border-b last:border-0 last:pb-0"
                  >
                    <div
                      className={`
                      p-2 rounded-md h-fit text-center min-w-[50px]
                      ${
                        event.type === "Academic"
                          ? "bg-blue-100 text-blue-800"
                          : event.type === "Athletics"
                          ? "bg-purple-100 text-purple-800"
                          : event.type === "Extracurricular"
                          ? "bg-green-100 text-green-800"
                          : "bg-orange-100 text-orange-800"
                      }
                    `}
                    >
                      <p className="text-xs font-medium">
                        {event.date
                          .split(", ")[0]
                          .split(" ")[1]
                          ?.replace("-", "") ||
                          event.date.split(" ")[1]?.replace(",", "")}
                      </p>
                      <p className="text-lg font-bold">
                        {event.date.split(" ")[1]?.replace(",", "") || ""}
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold">{event.title}</h3>
                      <div className="flex items-center text-xs text-muted-foreground gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground gap-1 mt-1">
                        <MapPin className="h-3 w-3" />
                        <span>{event.location}</span>
                      </div>
                      <div className="mt-2">
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${
                            event.type === "Academic"
                              ? "bg-blue-100 text-blue-800"
                              : event.type === "Athletics"
                              ? "bg-purple-100 text-purple-800"
                              : event.type === "Extracurricular"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                          }`}
                        >
                          {event.type}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Upcoming Assignments</CardTitle>
              <CardDescription>Homework and projects due soon</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  {
                    assignment: "Calculus Problem Set #8",
                    course: "Advanced Mathematics",
                    dueDate: "March 8, 2025",
                    status: "Not Started",
                  },
                  {
                    assignment: "Literary Analysis Essay",
                    course: "English Literature",
                    dueDate: "March 10, 2025",
                    status: "In Progress",
                  },
                  {
                    assignment: "Physics Lab Report",
                    course: "Physics",
                    dueDate: "March 12, 2025",
                    status: "Not Started",
                  },
                ].map((assignment, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0"
                  >
                    <div>
                      <h3 className="font-bold">{assignment.assignment}</h3>
                      <p className="text-sm text-muted-foreground">
                        {assignment.course}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Due: {assignment.dueDate}
                      </p>
                    </div>
                    <div>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          assignment.status === "Not Started"
                            ? "bg-red-100 text-red-800"
                            : assignment.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {assignment.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
