import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/mission.jpeg?height=400&width=1920&text=About Us"
          alt="About <strong>Sardar Patel Hr. Sec School</strong>"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            About Us
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Learn about our history, mission, and the values that guide us
          </p>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 container mx-auto px-4">
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-2">
            <TabsTrigger value="mission">Mission & Values</TabsTrigger>
            <TabsTrigger value="history">Our History</TabsTrigger>
            {/* <TabsTrigger value="leadership">Leadership</TabsTrigger>
            <TabsTrigger value="campus">Our Campus</TabsTrigger> */}
          </TabsList>
          <TabsContent value="mission" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-muted-foreground mb-6">
                  At <strong>Sardar Patel Hr. Sec School</strong>, our mission
                  is to provide a transformative educational experience that
                  nurtures intellectual curiosity, creativity, and character in
                  a supportive and challenging environment.
                </p>
                <p className="text-muted-foreground mb-6">
                  We are committed to developing well-rounded individuals who
                  possess the knowledge, skills, and values necessary to succeed
                  in college and beyond, and who will make meaningful
                  contributions to society.
                </p>
                <h3 className="text-xl font-bold mb-4">Our Core Values</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      1
                    </div>
                    <div>
                      <h4 className="font-bold">Excellence</h4>
                      <p className="text-muted-foreground">
                        We strive for excellence in all aspects of education and
                        encourage our students to do the same.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      2
                    </div>
                    <div>
                      <h4 className="font-bold">Integrity</h4>
                      <p className="text-muted-foreground">
                        We foster honesty, ethical behavior, and responsibility
                        in our community.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      3
                    </div>
                    <div>
                      <h4 className="font-bold">Respect</h4>
                      <p className="text-muted-foreground">
                        We value diversity and promote mutual respect among all
                        members of our community.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-primary text-primary-foreground rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5">
                      4
                    </div>
                    <div>
                      <h4 className="font-bold">Innovation</h4>
                      <p className="text-muted-foreground">
                        We embrace innovation and creative thinking in our
                        approach to education.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/mission.jpeg?height=500&width=600&text=Our Mission"
                  alt="Students collaborating"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </TabsContent>
          <TabsContent value="history" className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/history.jpeg?height=500&width=600&text=Our History"
                  alt="Historical photo of school"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">Our History</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      1997: The Founding
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Sardar Patel Hr. Sec School</strong> was founded
                      by Mr. Mahendra Singh, a visionary educator who believed
                      in creating a school that combined academic rigor with
                      character development. Starting with just 50 students and
                      5 teachers in a small building on Main Street, the school
                      quickly established a reputation for excellence.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2007: Campus Expansion
                    </h3>
                    <p className="text-muted-foreground">
                      After a decade of growth, Sardar Patel Hr. Sec. School
                      expanded its campus to include new science laboratories, a
                      performing arts center, and athletic facilities, enhancing
                      the educational experience for its growing student body.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2012: Innovation in Education
                    </h3>
                    <p className="text-muted-foreground">
                      <strong>Sardar Patel Hr. Sec School</strong> introduced
                      innovative educational programs, including a STEM
                      initiative and global exchange program, preparing students
                      for the challenges of the 21st century.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      2013: Opening of Sardar Patel Convent School
                    </h3>
                    <p className="text-muted-foreground">
                      In 2013, Sardar Patel Convent School was established to
                      provide high-quality education from Nursery to Class 8 in
                      an English-medium environment. The school focuses on
                      holistic learning, academic excellence, and character
                      development for young learners.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Today: Looking to the Future
                    </h3>
                    <p className="text-muted-foreground">
                      Today, <strong>Sardar Patel Hr. Sec School</strong>{" "}
                      continues to evolve and innovate, while staying true to
                      its founding principles. With over 800 students and 70
                      faculty members, we remain dedicated to nurturing the next
                      generation of leaders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="leadership" className="mt-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Dr. James Wilson",
                  title: "Head of School",
                  bio: "Dr. Wilson brings over 25 years of experience in education leadership. He holds a Ph.D. in Educational Administration from Stanford University and is dedicated to fostering a culture of excellence and innovation.",
                },
                {
                  name: "Dr. Sarah Chen",
                  title: "Academic Dean",
                  bio: "With a background in curriculum development and a doctorate in Education from Harvard, Dr. Chen oversees the academic programs at Sardar patel, ensuring they meet the highest standards of excellence.",
                },
                {
                  name: "Michael Rodriguez",
                  title: "Director of Admissions",
                  bio: "Mr. Rodriguez has been with Sardar patel for 15 years, guiding families through the admissions process with care and attention to each student's unique potential.",
                },
                {
                  name: "Jennifer Park",
                  title: "Director of Student Life",
                  bio: "Ms. Park is passionate about creating a vibrant and inclusive community at Sardar patel. She oversees extracurricular activities, student support services, and community outreach.",
                },
                {
                  name: "Robert Johnson",
                  title: "Director of Athletics",
                  bio: "A former collegiate athlete, Mr. Johnson leads our athletic programs with an emphasis on sportsmanship, teamwork, and personal growth both on and off the field.",
                },
                {
                  name: "Dr. Emily Thompson",
                  title: "Director of College Counseling",
                  bio: "Dr. Thompson guides our students through the college application process, helping them find the right fit for their academic interests, career goals, and personal growth.",
                },
              ].map((leader, index) => (
                <div
                  key={index}
                  className="bg-background border rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="relative h-64">
                    <Image
                      src={`/placeholder.svg?height=300&width=300&text=${leader.name}`}
                      alt={leader.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{leader.name}</h3>
                    <p className="text-primary font-medium mb-4">
                      {leader.title}
                    </p>
                    <p className="text-muted-foreground">{leader.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="campus" className="mt-8">
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Campus</h2>
                <p className="text-muted-foreground mb-8 max-w-3xl">
                  Nestled on 25 acres of beautifully landscaped grounds,{" "}
                  <strong>Sardar Patel Hr. Sec School</strong>'s campus provides
                  an inspiring environment for learning and growth. Our
                  facilities combine historic architecture with modern amenities
                  to create spaces that foster academic excellence, creativity,
                  and community.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Academic Buildings"
                      alt="Academic Buildings"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Academic Buildings</h3>
                  <p className="text-muted-foreground">
                    Our academic buildings feature state-of-the-art classrooms,
                    science laboratories, and collaborative learning spaces
                    designed to support our innovative curriculum and teaching
                    methods.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Arts Center"
                      alt="Arts Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Arts Center</h3>
                  <p className="text-muted-foreground">
                    The Sardar patel Arts Center includes a 350-seat theater,
                    music studios, visual arts studios, and a digital media lab,
                    providing students with exceptional facilities to explore
                    and develop their artistic talents.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Athletic Facilities"
                      alt="Athletic Facilities"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">Athletic Facilities</h3>
                  <p className="text-muted-foreground">
                    Our athletic complex features a gymnasium, swimming pool,
                    tennis courts, and playing fields for various sports,
                    supporting our commitment to physical education and
                    competitive athletics.
                  </p>
                </div>
                <div className="space-y-4">
                  <div className="relative h-64 rounded-lg overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=300&width=500&text=Library & Technology Center"
                      alt="Library & Technology Center"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold">
                    Library & Technology Center
                  </h3>
                  <p className="text-muted-foreground">
                    Our modern library and technology center offers extensive
                    print and digital resources, collaborative study spaces, and
                    cutting-edge technology to support research, innovation, and
                    digital literacy.
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <Button asChild size="lg">
                  <Link href="/about/campus-tour">Schedule a Campus Tour</Link>
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  );
}
