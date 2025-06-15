"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  BookOpen,
  Calendar,
  MessageSquare,
  Bell,
  FileText,
  Clock,
  MapPin,
  TrendingUp,
  Award,
  BookMarked,
  CheckCircle,
  BarChart3,
  Users,
} from "lucide-react"

export default function DashboardPage() {
  const [username] = useState("baba123")
  const [notifications] = useState([
    { id: 1, title: "Assignment Due", message: "Math homework due tomorrow", time: "1 hour ago", read: false },
    { id: 2, title: "Grade Posted", message: "New grade posted for English", time: "3 hours ago", read: false },
    { id: 3, title: "Event Reminder", message: "Science fair next week", time: "Yesterday", read: true },
  ])

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold">Welcome, {username}</h1>
          <p className="text-muted-foreground">Dashboard | Monday, March 4, 2025</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Button variant="outline" className="flex items-center gap-2">
              <Bell className="h-4 w-4" />
              <span>Notifications</span>
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs">
                {notifications.filter((n) => !n.read).length}
              </span>
            </Button>
          </div>
          <Button>Quick Actions</Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="border-l-4 border-l-green-500">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-green-100 text-green-700 p-3 rounded-full">
              <TrendingUp className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Current GPA</p>
              <p className="text-2xl font-bold">3.85</p>
              <p className="text-xs text-green-600">+0.1 from last semester</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-blue-500">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-blue-100 text-blue-700 p-3 rounded-full">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Assignments</p>
              <p className="text-2xl font-bold">
                4 <span className="text-sm text-muted-foreground">due this week</span>
              </p>
              <p className="text-xs text-blue-600">2 completed, 2 pending</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-purple-500">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-purple-100 text-purple-700 p-3 rounded-full">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Achievements</p>
              <p className="text-2xl font-bold">12</p>
              <p className="text-xs text-purple-600">3 new this semester</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 border-l-amber-500">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="bg-amber-100 text-amber-700 p-3 rounded-full">
              <Calendar className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Upcoming Events</p>
              <p className="text-2xl font-bold">3</p>
              <p className="text-xs text-amber-600">Next: Math Test (Mar 5)</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Main Dashboard Content */}
      <Tabs defaultValue="overview" className="mb-8">
        <TabsList className="mb-6 overflow-x-auto flex whitespace-nowrap w-full">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="academics">Academics</TabsTrigger>
          <TabsTrigger value="schedule">Schedule</TabsTrigger>
          <TabsTrigger value="progress">Progress</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              {/* Announcements */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    Announcements
                  </CardTitle>
                  <CardDescription>Latest school announcements</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Spring Break Schedule",
                        date: "March 3, 2025",
                        content:
                          "Spring break will be from March 15-23. All school facilities will be closed during this time.",
                      },
                      {
                        title: "Parent-Teacher Conferences",
                        date: "February 28, 2025",
                        content:
                          "Parent-teacher conferences will be held on March 10-11. Please sign up for a time slot through the portal.",
                      },
                      {
                        title: "Science Fair Registration",
                        date: "February 25, 2025",
                        content:
                          "Registration for the annual science fair is now open. The deadline to register is March 8.",
                      },
                    ].map((announcement, index) => (
                      <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold">{announcement.title}</h3>
                          <span className="text-xs text-muted-foreground">{announcement.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{announcement.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Grades */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" />
                    Recent Grades
                  </CardTitle>
                  <CardDescription>Your latest academic performance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        subject: "Advanced Mathematics",
                        assignment: "Calculus Quiz 3",
                        grade: "A",
                        score: "92/100",
                        date: "March 2, 2025",
                        color: "text-green-600",
                      },
                      {
                        subject: "English Literature",
                        assignment: "Essay: Symbolism in The Great Gatsby",
                        grade: "A-",
                        score: "90/100",
                        date: "February 28, 2025",
                        color: "text-green-600",
                      },
                      {
                        subject: "Physics",
                        assignment: "Lab Report: Momentum",
                        grade: "B+",
                        score: "88/100",
                        date: "February 25, 2025",
                        color: "text-blue-600",
                      },
                    ].map((grade, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center pb-4 border-b last:border-0 last:pb-0"
                      >
                        <div>
                          <h3 className="font-bold">{grade.subject}</h3>
                          <p className="text-sm text-muted-foreground">{grade.assignment}</p>
                          <p className="text-xs text-muted-foreground">{grade.date}</p>
                        </div>
                        <div className="text-right">
                          <span className={`text-xl font-bold ${grade.color}`}>{grade.grade}</span>
                          <p className="text-sm text-muted-foreground">{grade.score}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/portal/academic-records">View All Grades</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    Upcoming Events
                  </CardTitle>
                  <CardDescription>Your schedule for the week</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        title: "Math Test: Calculus",
                        date: "March 5, 2025",
                        time: "10:30 AM - 12:00 PM",
                        location: "Room 203",
                        color: "bg-blue-100 text-blue-800",
                      },
                      {
                        title: "Basketball Practice",
                        date: "March 6, 2025",
                        time: "3:30 PM - 5:30 PM",
                        location: "Gymnasium",
                        color: "bg-purple-100 text-purple-800",
                      },
                      {
                        title: "Science Project Due",
                        date: "March 7, 2025",
                        time: "9:00 AM",
                        location: "Room 156",
                        color: "bg-amber-100 text-amber-800",
                      },
                    ].map((event, index) => (
                      <div key={index} className="flex gap-3 pb-4 border-b last:border-0 last:pb-0">
                        <div className={`${event.color} p-2 rounded-md h-fit text-center min-w-[50px]`}>
                          <p className="text-xs font-medium">
                            {event.date.split(", ")[0]?.split(" ")[1] || event.date.split(" ")[1]}
                          </p>
                          <p className="text-lg font-bold">{event.date.split(" ")[1].replace(",", "")}</p>
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
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/portal/calendar">View Full Calendar</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Messages */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5" />
                    Recent Messages
                  </CardTitle>
                  <CardDescription>Latest communications</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        sender: "Ms. Johnson",
                        subject: "English Assignment Feedback",
                        preview: "I've reviewed your essay and wanted to provide some feedback...",
                        time: "Today, 10:23 AM",
                        unread: true,
                      },
                      {
                        sender: "Coach Williams",
                        subject: "Basketball Tournament Schedule",
                        preview: "Here's the schedule for the upcoming tournament this weekend...",
                        time: "Yesterday, 3:45 PM",
                        unread: true,
                      },
                      {
                        sender: "Principal Davis",
                        subject: "School Assembly Reminder",
                        preview:
                          "This is a reminder about the upcoming school assembly on Friday. All students must attend...",
                        time: "March 1, 2025",
                        unread: false,
                      },
                    ].map((message, index) => (
                      <div
                        key={index}
                        className={`pb-4 border-b last:border-0 last:pb-0 ${message.unread ? "bg-primary/5 -mx-4 px-4 py-2 rounded-md" : ""}`}
                      >
                        <div className="flex justify-between items-start mb-1">
                          <h3 className="font-bold">{message.sender}</h3>
                          <span className="text-xs text-muted-foreground">{message.time}</span>
                        </div>
                        <p className="text-sm font-medium">{message.subject}</p>
                        <p className="text-xs text-muted-foreground line-clamp-1">{message.preview}</p>
                        {message.unread && (
                          <div className="flex items-center mt-1">
                            <span className="bg-primary w-2 h-2 rounded-full mr-2"></span>
                            <span className="text-xs text-primary font-medium">Unread</span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <Button variant="outline" asChild className="w-full">
                      <Link href="/portal/communication">View All Messages</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="academics">
          {/* Academic content here */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Current Courses
              </CardTitle>
              <CardDescription>Your enrolled courses for Spring 2025</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-3 px-4 font-medium">Course</th>
                      <th className="text-left py-3 px-4 font-medium">Teacher</th>
                      <th className="text-left py-3 px-4 font-medium">Schedule</th>
                      <th className="text-left py-3 px-4 font-medium">Current Grade</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        course: "Advanced Mathematics",
                        teacher: "Dr. Robert Chen",
                        schedule: "MWF 9:00 AM - 10:30 AM",
                        grade: "A (92%)",
                        color: "text-green-600",
                      },
                      {
                        course: "English Literature",
                        teacher: "Ms. Sarah Johnson",
                        schedule: "TTh 11:00 AM - 12:30 PM",
                        grade: "A- (90%)",
                        color: "text-green-600",
                      },
                      {
                        course: "Physics",
                        teacher: "Mr. James Wilson",
                        schedule: "MWF 1:00 PM - 2:30 PM",
                        grade: "B+ (88%)",
                        color: "text-blue-600",
                      },
                    ].map((course, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="py-3 px-4 font-medium">{course.course}</td>
                        <td className="py-3 px-4">{course.teacher}</td>
                        <td className="py-3 px-4">{course.schedule}</td>
                        <td className={`py-3 px-4 font-bold ${course.color}`}>{course.grade}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="schedule">
          {/* Schedule content here */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Weekly Schedule
              </CardTitle>
              <CardDescription>Your classes and activities for the week</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                  <div key={day} className="border rounded-lg p-4">
                    <h3 className="font-bold text-center mb-3">{day}</h3>
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-2 rounded-md border border-blue-100">
                        <p className="text-xs font-bold">9:00 AM - 10:30 AM</p>
                        <p className="text-sm">Advanced Mathematics</p>
                      </div>
                      <div className="bg-green-50 p-2 rounded-md border border-green-100">
                        <p className="text-xs font-bold">11:00 AM - 12:30 PM</p>
                        <p className="text-sm">Spanish III</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="progress">
          {/* Progress content here */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Academic Progress
                </CardTitle>
                <CardDescription>Your performance over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-60 flex items-center justify-center bg-muted/30 rounded-md mb-4">
                  <p className="text-muted-foreground">GPA Trend Chart</p>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Current GPA</span>
                    <span className="font-bold text-green-600">3.85</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Previous Semester</span>
                    <span className="font-bold">3.75</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Achievements & Goals
                </CardTitle>
                <CardDescription>Your accomplishments and targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold mb-3">Recent Achievements</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <div className="bg-green-100 p-2 rounded-full">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                          <p className="font-medium">Honor Roll</p>
                          <p className="text-sm text-muted-foreground">Fall 2024 Semester</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      {/* Quick Access Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="hover:bg-muted/50 cursor-pointer transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <FileText className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold">Transcripts</h3>
            <p className="text-sm text-muted-foreground">View and download your official transcripts</p>
          </CardContent>
        </Card>
        <Card className="hover:bg-muted/50 cursor-pointer transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold">Faculty Directory</h3>
            <p className="text-sm text-muted-foreground">Connect with your teachers and staff</p>
          </CardContent>
        </Card>
        <Card className="hover:bg-muted/50 cursor-pointer transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <BookMarked className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold">Course Catalog</h3>
            <p className="text-sm text-muted-foreground">Browse available courses and descriptions</p>
          </CardContent>
        </Card>
        <Card className="hover:bg-muted/50 cursor-pointer transition-colors">
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="bg-primary/10 p-3 rounded-full mb-3">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-bold">School Calendar</h3>
            <p className="text-sm text-muted-foreground">View important dates and events</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

