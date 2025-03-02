import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, ChevronRight } from "lucide-react";

export default function NewsEventsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/n1.webp"
          alt="<strong>Sardar Patel Hr. Sec School</strong> News and Events"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            News & Events
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Stay updated with the latest happenings at Sardar Patel Hr. Sec. School 
          </p>
        </div>
      </section>

      {/* News and Events Tabs */}
      <section className="py-16 container mx-auto px-4">
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2 mb-8">
            <TabsTrigger value="news">Latest News</TabsTrigger>
            <TabsTrigger value="events">Upcoming Events</TabsTrigger>
          </TabsList>

          <TabsContent value="news">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title:
                    "Sardar Patel Hr. Sec. School Students Win National Science Fair",
                  date: "March 15, 2025",
                  excerpt:
                    "Our high school science team took first place at the National Science Fair with their innovative project on sustainable energy.",
                  image: "/school-1.webp",
                },
                {
                  title: "New Arts Center Opening This Fall",
                  date: "March 10, 2025",
                  excerpt:
                    "We're excited to announce the grand opening of our state-of-the-art Performing Arts Center, scheduled for September 2025.",
                  image: "/school-1.webp",
                },
                {
                  title:
                    "Sardar Patel Hr. Sec. School Launches Global Exchange Program",
                  date: "March 5, 2025",
                  excerpt:
                    "Starting next academic year, students will have the opportunity to participate in exchange programs with partner schools around the world.",
                  image: "/school-1.webp",
                },
                {
                  title:
                    "Alumni Spotlight: Dr. Rajesh Verma's Groundbreaking Research",
                  date: "February 28, 2025",
                  excerpt:
                    "Sardar Patel Hr. Sec. School alumnus Dr. Rajesh Verma (Class of 2010) has been recognized for his pioneering work in neuroscience at IIT Delhi.",
                  image: "/school-1.webp",
                },
                {
                  title:
                    "Sardar Patel Hr. Sec. School Robotics Team Advances to International Competition",
                  date: "February 20, 2025",
                  excerpt:
                    "Our middle school robotics team has qualified for the International Robotics Championship to be held in Tokyo this summer.",
                  image: "/school-1.webp",
                },
                {
                  title:
                    "Sardar Patel Hr. Sec. School Recognized for Sustainability Initiatives",
                  date: "February 15, 2025",
                  excerpt:
                    "The school has been awarded the Green Ribbon School designation for our commitment to environmental sustainability and education.",
                  image: "/school-1.webp",
                },
              ].map((newsItem, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={newsItem.image || "/placeholder.svg"}
                      alt={newsItem.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-2">
                      {newsItem.date}
                    </p>
                    <h3 className="text-xl font-bold mb-2">{newsItem.title}</h3>
                    <p className="text-muted-foreground mb-4">
                      {newsItem.excerpt}
                    </p>
                    <Link
                      href={`/news/${index + 1}`}
                      className="text-primary flex items-center"
                    >
                      Read more <ChevronRight className="h-4 w-4 ml-1" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/news/archive">View News Archive</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-8">
              {[
                {
                  title: "Spring Music Concert",
                  date: "April 15, 2025",
                  time: "7:00 PM - 9:00 PM",
                  location: "Sardar Patel Hr. Sec. School  Performing Arts Center",
                  description:
                    "Join us for an evening of music featuring performances by our talented student ensembles.",
                },
                {
                  title: "Parent-Teacher Conferences",
                  date: "April 22-23, 2025",
                  time: "3:30 PM - 7:30 PM",
                  location: "Sardar Patel Hr. Sec. School  Classrooms",
                  description:
                    "Schedule your conference time to discuss your child's progress with their teachers.",
                },
                {
                  title: "Annual Science Fair",
                  date: "May 5, 2025",
                  time: "9:00 AM - 3:00 PM",
                  location: "Sardar Patel Hr. Sec. School  Gymnasium",
                  description:
                    "Students showcase their scientific research and experiments. Open to all parents and community members.",
                },
                {
                  title: "Sardar Patel Hr. Sec. School  Gala: Building Our Future",
                  date: "May 15, 2025",
                  time: "6:30 PM - 10:30 PM",
                  location: "Grand Ballroom, City Convention Center",
                  description:
                    "Our annual fundraising event supporting scholarships and campus improvements. Join us for dinner, dancing, and a silent auction.",
                },
                {
                  title: "Senior Art Exhibition",
                  date: "May 20-22, 2025",
                  time: "10:00 AM - 4:00 PM daily",
                  location: "Sardar Patel Hr. Sec. School  Art Gallery",
                  description:
                    "A showcase of artwork by our graduating seniors, representing their artistic journey at Sardar patel.",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col md:flex-row gap-6 items-start border-b pb-8"
                >
                  <div className="md:w-1/4">
                    <div className="bg-primary text-primary-foreground rounded-lg p-4 text-center">
                      <Calendar className="h-6 w-6 mx-auto mb-2" />
                      <p className="font-bold">{event.date}</p>
                      <p className="text-sm">{event.time}</p>
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                    <p className="text-muted-foreground mb-2">
                      {event.location}
                    </p>
                    <p className="mb-4">{event.description}</p>
                    <Button asChild variant="outline">
                      <Link href={`/events/${index + 1}`}>Event Details</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button asChild>
                <Link href="/events/calendar">View Full Calendar</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to receive the latest news and event
            updates from Sardar Patel Hr. Sec. School.
          </p>
          <form className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-2 rounded-md border focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <Button type="submit">Subscribe</Button>
          </form>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Connect With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Facebook</h3>
            <div className="bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Facebook feed placeholder</p>
            </div>
            <Button asChild className="mt-4">
              <a
                href="https://facebook.com/sardarpatelschool"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Facebook
              </a>
            </Button>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Twitter</h3>
            <div className="bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-muted-foreground">Twitter feed placeholder</p>
            </div>
            <Button asChild className="mt-4">
              <a
                href="https://twitter.com/Sardar patelacad"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Twitter
              </a>
            </Button>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Instagram</h3>
            <div className="bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
              <p className="text-muted-foreground">
                Instagram feed placeholder
              </p>
            </div>
            <Button asChild className="mt-4">
              <a
                href="https://instagram.com/sardarpatelschool"
                target="_blank"
                rel="noopener noreferrer"
              >
                Follow on Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
