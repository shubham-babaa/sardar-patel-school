"use client"

import { useState } from "react"
import { Search, Users, UserPlus, Calendar, MessageSquare, Filter, ChevronDown, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Sample data for the community page
const people = [
  {
    id: 1,
    name: "Emma Thompson",
    role: "Math Teacher",
    department: "Faculty",
    email: "emma.t@school.edu",
    avatar: "/placeholder.svg?height=40&width=40&text=ET",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Student - Grade 11",
    department: "Student",
    email: "michael.c@school.edu",
    avatar: "/placeholder.svg?height=40&width=40&text=MC",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "English Teacher",
    department: "Faculty",
    email: "sarah.j@school.edu",
    avatar: "/placeholder.svg?height=40&width=40&text=SJ",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Student - Grade 10",
    department: "Student",
    email: "david.r@school.edu",
    avatar: "/placeholder.svg?height=40&width=40&text=DR",
  },
  {
    id: 5,
    name: "Lisa Wong",
    role: "School Counselor",
    department: "Staff",
    email: "lisa.w@school.edu",
    avatar: "/placeholder.svg?height=40&width=40&text=LW",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Principal",
    department: "Administration",
    email: "james.w@school.edu",
    avatar: "/placeholder.svg?height=40&width=40&text=JW",
  },
]

const groups = [
  {
    id: 1,
    name: "Math Club",
    members: 24,
    description: "For students interested in mathematics competitions and problem-solving.",
    category: "Academic",
  },
  {
    id: 2,
    name: "Environmental Club",
    members: 18,
    description: "Working together to make our school and community more sustainable.",
    category: "Service",
  },
  {
    id: 3,
    name: "Debate Team",
    members: 15,
    description: "Developing public speaking and critical thinking skills through debate.",
    category: "Academic",
  },
  {
    id: 4,
    name: "Basketball Team",
    members: 12,
    description: "Varsity basketball team practicing twice weekly.",
    category: "Sports",
  },
]

const events = [
  {
    id: 1,
    title: "Parent-Teacher Conference",
    date: "March 15, 2025",
    time: "3:00 PM - 7:00 PM",
    location: "Main Building",
    description: "Semester parent-teacher conferences to discuss student progress.",
  },
  {
    id: 2,
    title: "Science Fair",
    date: "March 22, 2025",
    time: "9:00 AM - 2:00 PM",
    location: "Gymnasium",
    description: "Annual science fair showcasing student projects across all grades.",
  },
  {
    id: 3,
    title: "Spring Concert",
    date: "April 5, 2025",
    time: "6:30 PM - 8:30 PM",
    location: "Auditorium",
    description: "Spring music concert featuring band, orchestra, and choir performances.",
  },
]

export default function CommunityPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedTab, setSelectedTab] = useState("directory")

  // Filter people based on search query
  const filteredPeople = people.filter(
    (person) =>
      person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      person.department.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  // Filter groups based on search query
  const filteredGroups = groups.filter(
    (group) =>
      group.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      group.category.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="container mx-auto px-4 py-6 md:py-8  overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Community</h1>
          <p className="text-muted-foreground mt-1">Connect with students, teachers, and groups</p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-2">
          <div className="relative w-[90%] sm:w-56 md:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search people or groups..."
              className="pl-8 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <DropdownMenu >
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1 w-[90%]">
                <Filter className="h-4 w-4 mr-1" />
                Filter
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSelectedTab("directory")}>All People</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedTab("directory")}>Faculty Only</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedTab("directory")}>Students Only</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSelectedTab("groups")}>All Groups</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Tabs defaultValue="directory" value={selectedTab} onValueChange={setSelectedTab} className="w-[90%]">
        <TabsList className="grid grid-cols-3 mb-6">
          <TabsTrigger value="directory" className="flex items-center gap-1">
            <Users className="h-4 w-4 mr-1 hidden sm:inline" />
            Directory
          </TabsTrigger>
          <TabsTrigger value="groups" className="flex items-center gap-1">
            <UserPlus className="h-4 w-4 mr-1 hidden sm:inline" />
            Groups
          </TabsTrigger>
          <TabsTrigger value="events" className="flex items-center gap-1">
            <Calendar className="h-4 w-4 mr-1 hidden sm:inline" />
            Events
          </TabsTrigger>
        </TabsList>

        <TabsContent value="directory" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredPeople.length > 0 ? (
              filteredPeople.map((person) => (
                <Card key={person.id}>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage src={person.avatar} alt={person.name} />
                          <AvatarFallback>
                            {person.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <CardTitle className="text-base">{person.name}</CardTitle>
                          <CardDescription>{person.role}</CardDescription>
                        </div>
                      </div>
                      <Badge variant="outline">{person.department}</Badge>
                    </div>
                  </CardHeader>
                  <CardFooter className="pt-2 flex justify-between">
                    <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1">
                      <Mail className="h-3.5 w-3.5 mr-1" />
                      Email
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs flex items-center gap-1">
                      <MessageSquare className="h-3.5 w-3.5 mr-1" />
                      Message
                    </Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <Users className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No people found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="groups" className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredGroups.length > 0 ? (
              filteredGroups.map((group) => (
                <Card key={group.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-base">{group.name}</CardTitle>
                        <CardDescription className="flex items-center mt-1">
                          <Users className="h-3.5 w-3.5 mr-1.5" />
                          {group.members} members
                        </CardDescription>
                      </div>
                      <Badge>{group.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{group.description}</p>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    <Button size="sm">Join Group</Button>
                  </CardFooter>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <UserPlus className="h-12 w-12 text-muted-foreground mb-4" />
                <h3 className="text-lg font-medium">No groups found</h3>
                <p className="text-muted-foreground mt-1">Try adjusting your search or filters</p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {events.map((event) => (
              <Card key={event.id}>
                <CardHeader>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                    <span className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1.5" />
                      {event.date}
                    </span>
                    <span className="hidden sm:inline">•</span>
                    <span>{event.time}</span>
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm mb-2">
                    <strong>Location:</strong> {event.location}
                  </p>
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    Add to Calendar
                  </Button>
                  <Button size="sm">RSVP</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

