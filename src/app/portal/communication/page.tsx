"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import {
  BookOpen,
  Calendar,
  MessageSquare,
  Users,
  FileText,
  GraduationCap,
  Inbox,
  Send,
  File,
  Trash2,
  Star,
  Search,
  Menu,
  LogOut,
  ChevronLeft,
} from "lucide-react"

export default function CommunicationPage() {
  const [username] = useState("baba123")
  const [activeTab, setActiveTab] = useState("inbox")
  const [selectedMessage, setSelectedMessage] = useState(0)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Sample messages data
  const messages = [
    {
      id: 1,
      sender: "Mrs. Johnson",
      subject: "Math Homework Update",
      preview: "I wanted to inform you about the upcoming math test scheduled for next week...",
      date: "Today, 2:30 PM",
      read: false,
      avatar: "/placeholder.svg?height=40&width=40&text=J",
    },
    {
      id: 2,
      sender: "Principal Williams",
      subject: "School Assembly Announcement",
      preview: "We will be holding a special assembly next Friday to celebrate student achievements...",
      date: "Yesterday",
      read: true,
      avatar: "/placeholder.svg?height=40&width=40&text=W",
    },
    {
      id: 3,
      sender: "Coach Davis",
      subject: "Basketball Practice Schedule",
      preview: "This is a reminder that basketball practice will be held on Monday and Wednesday...",
      date: "Mar 15",
      read: true,
      avatar: "/placeholder.svg?height=40&width=40&text=D",
    },
    {
      id: 4,
      sender: "Science Department",
      subject: "Science Fair Information",
      preview: "The annual science fair is approaching. Please find attached the guidelines...",
      date: "Mar 12",
      read: true,
      avatar: "/placeholder.svg?height=40&width=40&text=S",
    },
    {
      id: 5,
      sender: "Library",
      subject: "Overdue Book Notice",
      preview: "This is a friendly reminder that you have an overdue book: 'The Great Gatsby'...",
      date: "Mar 10",
      read: true,
      avatar: "/placeholder.svg?height=40&width=40&text=L",
    },
  ]

  // Full message content for the selected message
  const messageContent = {
    1: `
Dear Student,

I wanted to inform you about the upcoming math test scheduled for next week on Thursday, March 21st. The test will cover chapters 7-9 from our textbook, focusing on algebraic expressions, equations, and problem-solving techniques.

To help you prepare, I've scheduled an optional review session on Tuesday after school from 3:30 PM to 4:30 PM in room 204. I strongly encourage you to attend if you have any questions or need additional clarification on any topics.

Please make sure to review your notes, homework assignments, and practice problems. The study guide is available on the class portal under "Resources."

If you have any questions before the test, feel free to email me or stop by during my office hours.

Best regards,
Mrs. Johnson
Mathematics Department
`,
    2: `
Dear Students and Parents,

We will be holding a special assembly next Friday, March 22nd, from 10:00 AM to 11:30 AM in the main auditorium to celebrate student achievements from this quarter.

The assembly will feature:
- Academic awards presentation
- Performances by the school choir and band
- Recognition of sports achievements
- Special guest speaker (to be announced)

Parents are welcome to attend. If you plan to join us, please arrive 15 minutes early to sign in at the front office.

We look forward to celebrating our students' accomplishments together!

Sincerely,
Principal Williams
`,
    3: `
Team,

This is a reminder that basketball practice will be held on Monday and Wednesday this week from 4:00 PM to 5:30 PM in the main gymnasium.

Please note the following:
- Bring proper athletic attire and basketball shoes
- Water bottles are required
- We will be focusing on defensive strategies and free throws
- The team roster for the upcoming tournament will be finalized this week

If you cannot attend practice, please notify me in advance.

Coach Davis
Athletics Department
`,
    4: `
Dear Students,

The annual science fair is approaching on April 10th. Please find attached the guidelines for your projects.

Important dates:
- Project proposal submission: March 25th
- Progress report: April 1st
- Final project submission: April 8th
- Science Fair: April 10th (9:00 AM - 3:00 PM)

This year's theme is "Sustainable Innovations." We encourage you to explore projects related to environmental sustainability, renewable energy, or conservation.

If you need assistance or have questions about your project, the Science Department faculty will be available during lunch periods on Tuesdays and Thursdays.

Best of luck with your projects!

Science Department
`,
    5: `
Dear Student,

This is a friendly reminder that you have an overdue book: 'The Great Gatsby' by F. Scott Fitzgerald. The book was due on March 3rd.

Please return the book to the library as soon as possible. If you need to renew the book, you can do so online through your library account or visit the library desk.

Current fines: $1.40 (7 days overdue at $0.20 per day)

If you have already returned the book, please disregard this notice.

Thank you for your prompt attention to this matter.

Sincerely,
Library Services
`,
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-muted/30">
    


  

       



      <div className="flex-1 p-4 md:p-6 pt-16 md:pt-6">
        <div className="bg-background rounded-lg shadow-sm border overflow-hidden">

          <div className="p-4 border-b md:flex justify-between items-center gap-2 text-center space-y-2">
            <h1 className="text-lg font-bold">Communication Center</h1>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search messages..."
                className="pl-10 pr-4 py-2 rounded-md border text-sm w-full md:w-64"
              />
            </div>
          </div>

          {/* Communication Tabs */}
          <div className="flex border-b overflow-x-auto">
            <button
              className={`px-4 py-3 text-sm font-medium flex items-center gap-2 ${activeTab === "inbox" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("inbox")}
            >
              <Inbox className="h-4 w-4" />
              <span>Inbox</span>
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium flex items-center gap-2 ${activeTab === "sent" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("sent")}
            >
              <Send className="h-4 w-4" />
              <span>Sent</span>
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium flex items-center gap-2 ${activeTab === "drafts" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("drafts")}
            >
              <File className="h-4 w-4" />
              <span>Drafts</span>
            </button>
            <button
              className={`px-4 py-3 text-sm font-medium flex items-center gap-2 ${activeTab === "trash" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
              onClick={() => setActiveTab("trash")}
            >
              <Trash2 className="h-4 w-4" />
              <span>Trash</span>
            </button>
          </div>

          {/* Message List and Detail View */}
          <div className="flex flex-col md:flex-row h-[calc(100vh-16rem)]">
            {/* Message List */}
            <div className={`w-full md:w-1/3 border-r overflow-y-auto ${selectedMessage && "hidden md:block"}`}>
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`p-4 border-b cursor-pointer hover:bg-muted/50 transition-colors ${selectedMessage === message.id ? "bg-muted" : ""} ${!message.read ? "font-medium" : ""}`}
                  onClick={() => setSelectedMessage(message.id)}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="relative w-8 h-8 rounded-full overflow-hidden bg-primary/10 flex-shrink-0">
                      <Image
                        src={message.avatar || "/placeholder.svg"}
                        alt={message.sender}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <p className="truncate">{message.sender}</p>
                        <p className="text-xs text-muted-foreground whitespace-nowrap ml-2">{message.date}</p>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm truncate mb-1">{message.subject}</h3>
                  <p className="text-xs text-muted-foreground truncate">{message.preview}</p>
                </div>
              ))}
            </div>

            {/* Message Detail */}
            <div
              className={`w-full md:w-2/3 p-4 overflow-y-auto ${!selectedMessage && "hidden md:flex md:items-center md:justify-center"}`}
            >
              {selectedMessage ? (
                <div>
                  {/* Mobile back button */}
                  <button
                    className="md:hidden flex items-center text-sm text-muted-foreground mb-4"
                    onClick={() => setSelectedMessage(0)}
                  >
                    <ChevronLeft className="h-4 w-4 mr-1" />
                    Back to messages
                  </button>

                  {/* Message header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary/10">
                        <Image
                          src={messages.find((m) => m.id === selectedMessage)?.avatar || ""}
                          alt="Sender"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h2 className="font-medium">{messages.find((m) => m.id === selectedMessage)?.sender}</h2>
                        <p className="text-xs text-muted-foreground">
                          {messages.find((m) => m.id === selectedMessage)?.date}
                        </p>
                      </div>
                    </div>
                    <button className="text-muted-foreground hover:text-foreground">
                      <Star className="h-5 w-5" />
                    </button>
                  </div>

                  {/* Subject */}
                  <h1 className="text-xl font-bold mb-4">{messages.find((m) => m.id === selectedMessage)?.subject}</h1>

                  {/* Message content */}
                  <div className="prose prose-sm max-w-none">
                    {messageContent[selectedMessage as keyof typeof messageContent]
                      .split("\n")
                      .map((paragraph, index) => (
                        <p key={index} className="mb-4">
                          {paragraph}
                        </p>
                      ))}
                  </div>

                  {/* Reply buttons */}
                  <div className="mt-6 pt-6 border-t flex gap-3">
                    <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium">
                      Reply
                    </button>
                    <button className="px-4 py-2 border rounded-md text-sm font-medium">Forward</button>
                  </div>
                </div>
              ) : (
                <div className="text-center text-muted-foreground">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 opacity-20" />
                  <p>Select a message to view</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

