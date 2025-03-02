import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Calendar,
  ChevronRight,
  GraduationCap,
  MapPin,
  Phone,
  Users,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[600px] overflow-hidden">
        <Image
          src="/school.webp"
          alt="School campus"
          width={1920}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Sardar Patel Hr. Sec. School
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Empowering minds, shaping futures, and building tomorrow's leaders
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              <Link href="/admissions">Apply Now</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Announcement Banner */}
      <section className="bg-primary text-primary-foreground py-3 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="font-medium">
            Now accepting applications for Fall 2025!
          </p>
          <Link
            href="/admissions"
            className="flex items-center text-sm font-medium underline mt-2 md:mt-0"
          >
            Learn more <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <GraduationCap className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-2">Academic Excellence</h2>
              <p className="text-muted-foreground mb-4">
                Our rigorous curriculum prepares student's for success in
                college and beyond.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/academics">Explore Programs</Link>
              </Button>
            </div>
            <div className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-2">Student Life</h2>
              <p className="text-muted-foreground mb-4">
                Discover our vibrant community and extracurricular activities.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/student-life">Learn More</Link>
              </Button>
            </div>
            <div className="bg-background rounded-lg shadow-md p-6 flex flex-col items-center text-center">
              <Calendar className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-xl font-bold mb-2">Upcoming Events</h2>
              <p className="text-muted-foreground mb-4">
                Stay updated with school events, parent meetings, and important
                dates.
              </p>
              <Button asChild variant="outline" className="mt-auto">
                <Link href="/events">View Calendar</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              <strong>Sardar Patel Hr. Sec. School</strong>
            </h2>
            <p className="text-muted-foreground mb-4">
              Founded in 1997, Sardar Patel Hr. Sec. School has been dedicated to
              providing quality education for over two decades. Our mission is
              to foster intellectual growth, creativity, and strong character in
              a supportive yet challenging environment.
            </p>
            <p className="text-muted-foreground mb-6">
              With a student-teacher ratio of 15:1, we ensure personalized
              attention for every student, helping them discover their unique
              potential and develop the skills needed for lifelong success.
            </p>
            <Button asChild>
              <Link href="/about">About Our School</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/school-2.webp"
              alt="Students in classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">98%</p>
              <p className="text-xl">College Acceptance</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">15:1</p>
              <p className="text-xl">Student-Teacher Ratio</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-xl">Extracurricular Activities</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-2">35+</p>
              <p className="text-xl">Years of Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="py-16 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Latest News & Events</h2>
          <Link
            href="/news"
            className="text-primary flex items-center mt-4 md:mt-0"
          >
            View all news <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="border rounded-lg overflow-hidden shadow-sm"
            >
              <div className="relative h-48">
                <Image
                  src={`/n1.webp`}
                  alt={`News ${item}`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">
                  March {item + 10}, 2025
                </p>
                <h3 className="text-xl font-bold mb-2">
                  School Wins National Science Competition
                </h3>
                <p className="text-muted-foreground mb-4">
                  Our students showcased exceptional talent and innovation at
                  the National Science Fair...
                </p>
                <Link
                  href={`/news/${item}`}
                  className="text-primary flex items-center"
                >
                  Read more <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Community Says
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Sharma",
                role: "Parent",
                quote:
                  "Sardar Patel Hr. Sec. School has been a life-changing experience for my son. The teachers are dedicated, and the curriculum provides the right balance of challenge and support.",
              },
              {
                name: "Priya Mehta",
                role: "Alumni, Class of 2018",
                quote:
                  "My years at Sardar Patel Hr. Sec. School prepared me exceptionally well for college and beyond. The strong foundation in academics and leadership helped shape my career.",
              },
              {
                name: "Dr. Anil Verma",
                role: "Faculty Member",
                quote:
                  "Teaching at Sardar Patel Hr. Sec. School is an honor. The school provides excellent resources, fostering a learning environment that truly empowers students for the future.",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-background p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden mr-4">
                    <Image
                      src={`/test.webp`}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <p className="italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              We're here to answer any questions you may have about our
              programs, admissions process, or campus life.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <p>
                  SARDAR PATEL HR SEC SCHOOL WARD NO.13, Hanuman Nagar, Adarsh
                  Nagar Nai Basti, Satna, Madhya Pradesh 485005
                </p>
              </div>
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <p>(+91) 9907378338</p>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Office Hours:</p>
                  <p>Monday - Friday: 8:00 AM - 4:30 PM</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[420px] rounded-lg overflow-hidden">
            <Image
              src="/get-touch.webp"
              alt="Campus map"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
