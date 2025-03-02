import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Users, Award, Clock } from "lucide-react"

export default function AcademicsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/aced.jpeg?height=400&width=1920&text=Academics"
          alt="Academics at <strong>Sardar Patel Hr. Sec School</strong>"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Academics</h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Rigorous curriculum designed to challenge and inspire
          </p>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Academic Excellence</h2>
            <p className="text-muted-foreground mb-4">
              At <strong>Sardar Patel Hr. Sec School</strong>, we are committed to providing a challenging and comprehensive academic program that
              prepares students for success in college and beyond. Our curriculum is designed to foster critical
              thinking, creativity, and a lifelong love of learning.
            </p>
            <p className="text-muted-foreground mb-6">
              With small class sizes and dedicated faculty, we offer personalized attention to each student, helping
              them discover their unique potential and develop the skills needed for future success.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Student-Teacher Ratio</p>
                  <p className="text-muted-foreground">12:1</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Advanced Placement</p>
                  <p className="text-muted-foreground">15+ AP Courses</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">College Acceptance</p>
                  <p className="text-muted-foreground">98% Rate</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Class Duration</p>
                  <p className="text-muted-foreground">80 Minutes</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[420px] rounded-lg overflow-hidden">
            <Image
              src="/aced-1.jpeg?height=420&width=600&text=Academic Excellence"
              alt="Students in classroom"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Academic Programs</h2>

          <Tabs defaultValue="elementary" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="elementary">Elementary School (K-5)</TabsTrigger>
              <TabsTrigger value="middle">Middle School (6-8)</TabsTrigger>
              <TabsTrigger value="high">High School (9-12)</TabsTrigger>
            </TabsList>

            <TabsContent value="elementary" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/ele.jpeg?height=400&width=600&text=Elementary School"
                    alt="Elementary school students"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Elementary School (K-5)</h3>
                  <p className="text-muted-foreground mb-6">
                    Our elementary program provides a strong foundation in core academic subjects while nurturing
                    curiosity, creativity, and a love of learning. Through hands-on activities, project-based learning,
                    and individualized instruction, we help young students develop essential skills and knowledge.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Core Curriculum</h4>
                      <p className="text-muted-foreground">
                        Language Arts, Mathematics, Science, Social Studies, and Foreign Language
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Enrichment Programs</h4>
                      <p className="text-muted-foreground">
                        Art, Music, Physical Education, Technology, and Character Education
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Special Features</h4>
                      <p className="text-muted-foreground">
                        Small class sizes, dedicated homeroom teachers, and specialized instruction
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button disabled={true}>
                      <Link href="/academics/elementary">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="middle" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Middle School (6-8)</h3>
                  <p className="text-muted-foreground mb-6">
                    Our middle school program is designed to meet the unique academic, social, and emotional needs of
                    early adolescents. We provide a challenging curriculum that promotes critical thinking,
                    problem-solving, and independence while supporting students through this important transition.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Core Curriculum</h4>
                      <p className="text-muted-foreground">
                        English, Mathematics, Science, History, and Foreign Language
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Elective Courses</h4>
                      <p className="text-muted-foreground">Art, Music, Drama, Technology, and Physical Education</p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Special Features</h4>
                      <p className="text-muted-foreground">
                        Advisory program, leadership opportunities, and interdisciplinary projects
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button disabled={true}>
                      <Link href="/academics/middle">Learn More</Link>
                    </Button>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/mid.jpeg?height=400&width=600&text=Middle School"
                    alt="Middle school students"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="high" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/high.jpeg?height=400&width=600&text=High School"
                    alt="High school students"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">High School (9-12)</h3>
                  <p className="text-muted-foreground mb-6">
                    Our high school program prepares students for success in college and beyond through a rigorous
                    college preparatory curriculum. We offer a wide range of courses, including Advanced Placement and
                    honors options, allowing students to pursue their interests and challenge themselves academically.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Core Curriculum</h4>
                      <p className="text-muted-foreground">
                        English, Mathematics, Science, History, and Foreign Language
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Advanced Placement</h4>
                      <p className="text-muted-foreground">15+ AP courses across all disciplines</p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Special Features</h4>
                      <p className="text-muted-foreground">
                        College counseling, internship opportunities, and senior capstone projects
                      </p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <Button disabled={true}>
                      <Link href="/academics/high">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Curriculum Highlights */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Curriculum Highlights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "STEM Excellence",
              description:
                "Our comprehensive STEM program integrates science, technology, engineering, and mathematics through hands-on projects and real-world applications.",
              image: "/stem.jpeg?height=200&width=400&text=STEM",
            },
            {
              title: "Arts & Humanities",
              description:
                "We foster creativity and critical thinking through a rich arts and humanities curriculum that includes visual arts, music, drama, literature, and history.",
              image: "/art.jpeg?height=200&width=400&text=Arts",
            },
            {
              title: "Global Languages",
              description:
                "Students develop linguistic proficiency and cultural understanding through our language programs in Spanish, French, Mandarin, and Latin.",
              image: "/gl.jpeg?height=200&width=400&text=Languages",
            },
            {
              title: "Physical Education",
              description:
                "Our physical education program promotes fitness, teamwork, and healthy lifestyles through a variety of sports and activities.",
              image: "/phy.jpeg?height=200&width=400&text=PE",
            },
            {
              title: "Technology Integration",
              description:
                "Technology is integrated throughout our curriculum, preparing students to be responsible digital citizens and innovative problem-solvers.",
              image: "/tech.jpeg?height=200&width=400&text=Technology",
            },
            {
              title: "Character Education",
              description:
                "We emphasize values such as integrity, respect, responsibility, and empathy through our comprehensive character education program.",
              image: "/char.jpeg?height=200&width=400&text=Character",
            },
          ].map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-48">
                <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Faculty Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Faculty</h2>
              <p className="text-muted-foreground mb-4">
                Our dedicated faculty members are experts in their fields, with advanced degrees and a passion for
                teaching. They create engaging learning environments that challenge students to think critically, solve
                problems creatively, and develop a deep understanding of the subject matter.
              </p>
              <p className="text-muted-foreground mb-6">
                Beyond their academic expertise, our teachers serve as mentors and role models, guiding students in
                their personal and intellectual growth. They are committed to knowing each student as an individual and
                supporting their unique learning journey.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="bg-primary rounded-full w-2 h-2 mr-3"></div>
                  <span>85% of faculty hold advanced degrees</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary rounded-full w-2 h-2 mr-3"></div>
                  <span>Average of 12 years teaching experience</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary rounded-full w-2 h-2 mr-3"></div>
                  <span>Ongoing professional development</span>
                </li>
                <li className="flex items-center">
                  <div className="bg-primary rounded-full w-2 h-2 mr-3"></div>
                  <span>Experts in their academic disciplines</span>
                </li>
              </ul>
              <Button disabled={true}>
                <Link href="/about/faculty">Meet Our Faculty</Link>
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/faculty.jpeg?height=400&width=600&text=Our Faculty"
                alt="Faculty members"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience <strong>Sardar Patel Hr. Sec School</strong></h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We invite you to visit our campus and see firsthand how our academic programs can help your child thrive.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button  size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90" disabled={true}>
              <Link href="/admissions/visit">Schedule a Visit</Link>
            </Button>
            <Button  size="lg" className="bg-background text-primary hover:bg-background/90" disabled={true}>
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

