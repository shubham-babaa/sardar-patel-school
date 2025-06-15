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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Calendar,
  MessageSquare,
  Users,
  FileText,
  GraduationCap,
  Download,
  ChevronDown,
  Menu,
  ChevronLeft,
  LogOut,
} from "lucide-react";

export default function AcademicRecordsPage() {
  const [username] = useState("baba123");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-muted/30">
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8 pt-16 md:pt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">Academic Records</h1>
            <p className="text-muted-foreground">
              View your grades, transcripts, and academic progress
            </p>
          </div>
          <Button
            variant="outline"
            className="flex items-center gap-2 w-full md:w-auto"
          >
            <Download className="h-4 w-4" />
            <span>Download Transcript</span>
          </Button>
        </div>

        {/* Academic Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <h3 className="text-sm text-muted-foreground mb-1">
                  Current GPA
                </h3>
                <p className="text-4xl font-bold text-primary">3.85</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Class Rank: 12 of 150
                </p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <h3 className="text-sm text-muted-foreground mb-1">
                  Credits Earned
                </h3>
                <p className="text-4xl font-bold">78</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Required for Graduation: 120
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="sm:col-span-2 md:col-span-1">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <h3 className="text-sm text-muted-foreground mb-1">
                  Attendance Rate
                </h3>
                <p className="text-4xl font-bold text-green-600">98%</p>
                <p className="text-xs text-muted-foreground mt-1">
                  School Year 2024-2025
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="current">
          <TabsList className="mb-6 w-full overflow-x-auto flex-nowrap">
            <TabsTrigger value="current">Current</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="transcript">Transcript</TabsTrigger>
            <TabsTrigger value="progress">Progress</TabsTrigger>
          </TabsList>

          <TabsContent value="current">
            <Card>
              <CardHeader>
                <CardTitle>Spring 2025 Semester</CardTitle>
                <CardDescription>
                  Current grades for all enrolled courses
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Course</th>
                        <th className="text-left py-3 px-4">Teacher</th>
                        <th className="text-left py-3 px-4">Grade</th>
                        <th className="text-left py-3 px-4 hidden md:table-cell">
                          Updated
                        </th>
                        <th className="text-left py-3 px-4">Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        {
                          course: "Advanced Mathematics",
                          teacher: "Dr. Robert Chen",
                          grade: "A (92%)",
                          updated: "March 3, 2025",
                          gradeColor: "text-green-600",
                        },
                        {
                          course: "English Literature",
                          teacher: "Ms. Sarah Johnson",
                          grade: "A- (90%)",
                          updated: "March 2, 2025",
                          gradeColor: "text-green-600",
                        },
                        {
                          course: "Physics",
                          teacher: "Mr. James Wilson",
                          grade: "B+ (88%)",
                          updated: "March 1, 2025",
                          gradeColor: "text-blue-600",
                        },
                        {
                          course: "World History",
                          teacher: "Mrs. Emily Thompson",
                          grade: "A (94%)",
                          updated: "February 28, 2025",
                          gradeColor: "text-green-600",
                        },
                        {
                          course: "Spanish III",
                          teacher: "Sr. Miguel Rodriguez",
                          grade: "A- (91%)",
                          updated: "February 27, 2025",
                          gradeColor: "text-green-600",
                        },
                      ].map((course, index) => (
                        <tr key={index} className="border-b hover:bg-muted/50">
                          <td className="py-3 px-4 font-medium">
                            {course.course}
                          </td>
                          <td className="py-3 px-4">{course.teacher}</td>
                          <td
                            className={`py-3 px-4 font-bold ${course.gradeColor}`}
                          >
                            {course.grade}
                          </td>
                          <td className="py-3 px-4 text-muted-foreground hidden md:table-cell">
                            {course.updated}
                          </td>
                          <td className="py-3 px-4">
                            <Button
                              variant="ghost"
                              size="sm"
                              className="flex items-center gap-1"
                            >
                              <span>View</span>
                              <ChevronDown className="h-4 w-4" />
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Recent Assignments</CardTitle>
                  <CardDescription>Latest graded work</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        assignment: "Calculus Quiz 3",
                        course: "Advanced Mathematics",
                        grade: "92/100",
                        date: "March 2, 2025",
                        feedback:
                          "Excellent work on derivatives. Review integration by parts.",
                      },
                      {
                        assignment: "Essay: Symbolism in The Great Gatsby",
                        course: "English Literature",
                        grade: "90/100",
                        date: "February 28, 2025",
                        feedback:
                          "Strong analysis and well-structured. Work on transitions between paragraphs.",
                      },
                      {
                        assignment: "Lab Report: Momentum",
                        course: "Physics",
                        grade: "88/100",
                        date: "February 25, 2025",
                        feedback:
                          "Good experimental procedure. Include more analysis of error sources.",
                      },
                    ].map((assignment, index) => (
                      <div
                        key={index}
                        className="border-b pb-4 last:border-0 last:pb-0"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-bold">
                              {assignment.assignment}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {assignment.course}
                            </p>
                            <p className="text-xs text-muted-foreground mt-1">
                              Submitted: {assignment.date}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold">
                              {assignment.grade}
                            </span>
                          </div>
                        </div>
                        <div className="mt-2 bg-muted p-2 rounded-md">
                          <p className="text-xs italic">
                            Feedback: {assignment.feedback}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Academic History</CardTitle>
                <CardDescription>Past semester grades and GPA</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {[
                    {
                      term: "Fall 2024",
                      gpa: "3.82",
                      courses: [
                        { name: "Pre-Calculus", grade: "A" },
                        { name: "American Literature", grade: "A-" },
                        { name: "Chemistry", grade: "A" },
                        { name: "U.S. History", grade: "B+" },
                        { name: "Spanish II", grade: "A" },
                        {
                          name: "Introduction to Computer Science",
                          grade: "A+",
                        },
                      ],
                    },
                    {
                      term: "Spring 2024",
                      gpa: "3.75",
                      courses: [
                        { name: "Algebra II", grade: "A-" },
                        { name: "World Literature", grade: "B+" },
                        { name: "Biology", grade: "A" },
                        { name: "World Geography", grade: "A" },
                        { name: "Spanish I", grade: "A-" },
                        { name: "Art History", grade: "A" },
                      ],
                    },
                  ].map((semester, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-4">
                        <h3 className="text-xl font-bold">{semester.term}</h3>
                        <div className="bg-primary/10 px-3 py-1 rounded-full">
                          <span className="text-primary font-bold">
                            GPA: {semester.gpa}
                          </span>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {semester.courses.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="border rounded-md p-4"
                          >
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium">{course.name}</h4>
                              <span
                                className={`font-bold ${
                                  course.grade.startsWith("A")
                                    ? "text-green-600"
                                    : course.grade.startsWith("B")
                                    ? "text-blue-600"
                                    : "text-yellow-600"
                                }`}
                              >
                                {course.grade}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transcript">
            <Card>
              <CardHeader>
                <CardTitle>Official Transcript</CardTitle>
                <CardDescription>Complete academic record</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="bg-muted p-4 md:p-8 rounded-lg border overflow-x-auto">
                  <div className="text-center mb-8">
                    <h2 className="text-xl md:text-2xl font-bold">
                      Brightwood Academy
                    </h2>
                    <p className="text-muted-foreground">
                      123 Education Lane, Brightwood, CA 90210
                    </p>
                    <p className="text-muted-foreground">
                      (555) 123-4567 | records@brightwoodacademy.edu
                    </p>
                    <div className="mt-4 border-t border-b py-2">
                      <h3 className="text-lg md:text-xl font-bold">
                        OFFICIAL TRANSCRIPT
                      </h3>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Student Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p>
                          <span className="font-medium">Name:</span> {username}
                        </p>
                        <p>
                          <span className="font-medium">Student ID:</span>{" "}
                          202145789
                        </p>
                        <p>
                          <span className="font-medium">Date of Birth:</span>{" "}
                          01/15/2007
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-medium">Grade Level:</span> 11
                        </p>
                        <p>
                          <span className="font-medium">Enrollment Date:</span>{" "}
                          08/15/2022
                        </p>
                        <p>
                          <span className="font-medium">Graduation Year:</span>{" "}
                          2026
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Academic Summary</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p>
                          <span className="font-medium">Cumulative GPA:</span>{" "}
                          3.85
                        </p>
                        <p>
                          <span className="font-medium">Class Rank:</span> 12 of
                          150
                        </p>
                      </div>
                      <div>
                        <p>
                          <span className="font-medium">Credits Earned:</span>{" "}
                          78
                        </p>
                        <p>
                          <span className="font-medium">Credits Required:</span>{" "}
                          120
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-bold border-b pb-2 mb-2">
                        Academic Year 2024-2025
                      </h3>
                      <div className="mb-4">
                        <h4 className="font-medium">Fall 2024</h4>
                        <div className="overflow-x-auto">
                          <table className="w-full text-sm mt-2">
                            <thead>
                              <tr className="border-b">
                                <th className="text-left py-2">Course</th>
                                <th className="text-left py-2">Credits</th>
                                <th className="text-left py-2">Grade</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="border-b">
                                <td className="py-2">Pre-Calculus</td>
                                <td className="py-2">4.0</td>
                                <td className="py-2">A</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">American Literature</td>
                                <td className="py-2">4.0</td>
                                <td className="py-2">A-</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">Chemistry</td>
                                <td className="py-2">4.0</td>
                                <td className="py-2">A</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">U.S. History</td>
                                <td className="py-2">4.0</td>
                                <td className="py-2">B+</td>
                              </tr>
                              <tr className="border-b">
                                <td className="py-2">Spanish II</td>
                                <td className="py-2">3.0</td>
                                <td className="py-2">A</td>
                              </tr>
                            </tbody>
                            <tfoot>
                              <tr>
                                <td className="py-2 font-bold">
                                  Term GPA: 3.82
                                </td>
                                <td className="py-2 font-bold">
                                  Credits: 22.0
                                </td>
                                <td></td>
                              </tr>
                            </tfoot>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground mb-2">
                      This transcript is official only with the school seal and
                      signature.
                    </p>
                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-4">
                      <div className="text-center">
                        <div className="border-b pb-2 mb-1 w-48">
                          <p className="italic text-muted-foreground">
                            Digital Signature
                          </p>
                        </div>
                        <p className="text-sm">Dr. James Wilson, Principal</p>
                      </div>
                      <div className="border border-dashed rounded-full w-24 h-24 flex items-center justify-center text-muted-foreground">
                        School Seal
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground mt-6">
                      Generated on March 4, 2025
                    </p>
                  </div>
                </div>

                <div className="flex justify-end mt-4">
                  <Button className="flex items-center gap-2 w-full md:w-auto">
                    <Download className="h-4 w-4" />
                    <span>Download PDF</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="progress">
            <Card>
              <CardHeader>
                <CardTitle>Progress Reports</CardTitle>
                <CardDescription>Periodic academic evaluations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {[
                    {
                      period: "Mid-Term Progress Report - Spring 2025",
                      date: "February 15, 2025",
                      summary:
                        "Excellent academic performance across all subjects. Consistently meeting or exceeding expectations in coursework and assessments.",
                      recommendations:
                        "Continue current study habits and consider additional enrichment opportunities in mathematics and science.",
                    },
                    {
                      period: "Quarter 1 Progress Report - Fall 2024",
                      date: "October 15, 2024",
                      summary:
                        "Strong start to the academic year with high marks in all subjects. Particularly excelling in mathematics and computer science.",
                      recommendations:
                        "Focus on improving analytical writing skills in English Literature. Consider joining the debate club to enhance public speaking abilities.",
                    },
                  ].map((report, index) => (
                    <div key={index} className="border rounded-lg p-4 md:p-6">
                      <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
                        <div>
                          <h3 className="text-lg md:text-xl font-bold">
                            {report.period}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            Issued: {report.date}
                          </p>
                        </div>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2 w-full md:w-auto"
                        >
                          <Download className="h-4 w-4" />
                          <span>Download</span>
                        </Button>
                      </div>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-bold text-sm mb-1">Summary</h4>
                          <p className="text-muted-foreground">
                            {report.summary}
                          </p>
                        </div>
                        <div>
                          <h4 className="font-bold text-sm mb-1">
                            Recommendations
                          </h4>
                          <p className="text-muted-foreground">
                            {report.recommendations}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
