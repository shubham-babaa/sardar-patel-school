import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { BookOpen, Calendar, FileText, Users } from "lucide-react"

export default function PortalPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=300&width=1920&text=Student/Parent Portal"
          alt="sardar patel Student/Parent Portal"
          width={1920}
          height={300}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">Student/Parent Portal</h1>
          <p className="text-xl text-center max-w-2xl">
            Access important information and resources for <strong>Sardar Patel Hr. Sec School</strong> students and parents
          </p>
        </div>
      </section>

      {/* Login Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center">Portal Login</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="username">Username</Label>
                  <Input id="username" placeholder="Enter your username" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <Input id="password" type="password" placeholder="Enter your password" required />
                </div>
                <Button type="submit" className="w-full">
                  Log In
                </Button>
              </form>
              <div className="mt-4 text-center">
                <Link href="/portal/forgot-password" className="text-sm text-primary hover:underline">
                  Forgot password?
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Portal Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Academic Records",
                description: "Access grades, transcripts, and academic progress reports.",
                icon: <BookOpen className="h-10 w-10 text-primary mb-4" />,
              },
              {
                title: "Calendar",
                description: "View school events, assignment due dates, and schedule appointments.",
                icon: <Calendar className="h-10 w-10 text-primary mb-4" />,
              },
              {
                title: "Communication",
                description: "Message teachers, receive announcements, and access important documents.",
                icon: <FileText className="h-10 w-10 text-primary mb-4" />,
              },
              {
                title: "Community",
                description: "Participate in forums, join clubs, and connect with other parents and students.",
                icon: <Users className="h-10 w-10 text-primary mb-4" />,
              },
            ].map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Getting Started</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">New Users</h3>
            <p className="mb-4">If you're a new student or parent, follow these steps to access the portal:</p>
            <ol className="list-decimal list-inside space-y-2">
              <li>Contact the school office to receive your initial login credentials.</li>
              <li>Visit the portal login page and enter your provided username and temporary password.</li>
              <li>You will be prompted to change your password upon first login.</li>
              <li>Complete your user profile and set up communication preferences.</li>
            </ol>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Technical Requirements</h3>
            <p className="mb-4">To ensure the best experience, please use:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>A modern web browser (Chrome, Firefox, Safari, or Edge)</li>
              <li>A stable internet connection</li>
              <li>JavaScript enabled in your browser settings</li>
            </ul>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Need Help?</h3>
            <p className="mb-4">If you encounter any issues or have questions about using the portal:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Check our{" "}
                <Link href="/portal/faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                Contact our IT support team at{" "}
                <a href="mailto:support@sardarpatelschool.edu" className="text-primary hover:underline">
                  support@sardarpatelschool.edu
                </a>
              </li>
              <li>Visit the school office for in-person assistance during business hours</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Connected with <strong>Sardar Patel Hr. Sec School</strong></h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our portal is designed to keep you informed and engaged with your child's education. Log in regularly to
            stay up-to-date with all aspects of school life.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="#portal-login">Access Portal</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

