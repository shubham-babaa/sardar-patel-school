import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, BookOpen, Users, Clock } from "lucide-react"

export default function ElementaryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920&text=Elementary School"
          alt="<strong>Sardar Patel Hr. Sec School</strong> Elementary School"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Elementary School</h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">Kindergarten through Grade 5</p>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Program Overview</h2>
            <p className="text-muted-foreground mb-4">
              Our elementary program provides a strong foundation in core academic subjects while nurturing curiosity,
              creativity, and a love of learning. Through hands-on activities, project-based learning, and
              individualized instruction, we help young students develop essential skills and knowledge.
            </p>
            <p className="text-muted-foreground mb-6">
              In our supportive and stimulating environment, children are encouraged to explore, question, and discover.
              Our experienced teachers know each child as an individual and tailor their approach to meet diverse
              learning styles and needs.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-start">
                <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Class Size</p>
                  <p className="text-muted-foreground">16-18 students</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Student-Teacher Ratio</p>
                  <p className="text-muted-foreground">8:1</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">School Hours</p>
                  <p className="text-muted-foreground">8:30 AM - 3:15 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Elementary Students"
              alt="Elementary students learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Curriculum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                subject: "Language Arts",
                description:
                  "Our balanced literacy program develops strong readers, writers, speakers, and listeners through phonics instruction, guided reading, writer's workshop, and literature studies.",
                image: "/placeholder.svg?height=200&width=300&text=Language Arts",
              },
              {
                subject: "Mathematics",
                description:
                  "Students build number sense and problem-solving skills through a hands-on approach that emphasizes conceptual understanding, computational fluency, and real-world applications.",
                image: "/placeholder.svg?height=200&width=300&text=Mathematics",
              },
              {
                subject: "Science",
                description:
                  "Our inquiry-based science curriculum encourages students to think like scientists as they observe, question, experiment, and discover the natural world through hands-on investigations.",
                image: "/placeholder.svg?height=200&width=300&text=Science",
              },
              {
                subject: "Social Studies",
                description:
                  "Students explore history, geography, and cultures through engaging projects, field trips, and discussions that help them understand their place in the community and world.",
                image: "/placeholder.svg?height=200&width=300&text=Social Studies",
              },
              {
                subject: "World Languages",
                description:
                  "Beginning in kindergarten, students receive instruction in Spanish, developing language skills and cultural awareness through an immersive, activity-based approach.",
                image: "/placeholder.svg?height=200&width=300&text=World Languages",
              },
              {
                subject: "Arts & Innovation",
                description:
                  "Our integrated arts program includes visual arts, music, drama, and dance, while our innovation lab introduces students to coding, robotics, and design thinking.",
                image: "/placeholder.svg?height=200&width=300&text=Arts & Innovation",
              },
            ].map((subject, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={subject.image || "/placeholder.svg"}
                    alt={subject.subject}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{subject.subject}</h3>
                  <p className="text-muted-foreground">{subject.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach to Learning */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Learning Approach"
              alt="Elementary learning approach"
              fill
              className="object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold mb-6">Our Approach to Learning</h2>
            <p className="text-muted-foreground mb-6">
              At <strong>Sardar Patel Hr. Sec School</strong>, we believe that elementary students learn best when they are actively engaged,
              appropriately challenged, and emotionally supported. Our approach combines proven educational methods with
              innovative practices to create a dynamic learning environment.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-bold">Differentiated Instruction</p>
                  <p className="text-muted-foreground">
                    Teachers tailor their instruction to meet the diverse needs, interests, and learning styles of each
                    student.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-bold">Project-Based Learning</p>
                  <p className="text-muted-foreground">
                    Students engage in meaningful projects that integrate multiple subjects and develop critical
                    thinking, creativity, and collaboration.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-bold">Social-Emotional Learning</p>
                  <p className="text-muted-foreground">
                    We explicitly teach and reinforce skills such as self-awareness, empathy, responsible
                    decision-making, and positive relationship building.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-bold">Technology Integration</p>
                  <p className="text-muted-foreground">
                    Age-appropriate technology enhances learning while developing digital literacy and responsible use
                    of digital tools.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* A Day in the Life */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">A Day in the Life</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold">8:30</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Morning Meeting</h3>
                  <p className="text-muted-foreground">
                    Students gather for a community-building morning meeting that includes greetings, sharing,
                    activities, and a message for the day.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold">9:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Literacy Block</h3>
                  <p className="text-muted-foreground">
                    Students engage in reading and writing workshops, guided reading groups, word study, and independent
                    reading.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold">10:30</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Recess & Snack</h3>
                  <p className="text-muted-foreground">
                    Time for physical activity, fresh air, and social interaction on our playgrounds, followed by a
                    healthy snack.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold">11:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Mathematics</h3>
                  <p className="text-muted-foreground">
                    Hands-on math activities, problem-solving challenges, and practice with mathematical concepts and
                    skills.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold">12:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Lunch & Recess</h3>
                  <p className="text-muted-foreground">
                    Students enjoy a nutritious lunch in our dining commons, followed by outdoor play and social time.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold">1:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Science/Social Studies</h3>
                  <p className="text-muted-foreground">
                    Inquiry-based investigations, projects, and discussions that explore scientific concepts or social
                    studies themes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold">2:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Specials</h3>
                  <p className="text-muted-foreground">
                    Students participate in art, music, physical education, world languages, or innovation lab on a
                    rotating schedule.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-background rounded-lg p-6">
              <div className="flex items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center mr-4 shrink-0">
                  <span className="font-bold">3:00</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Closing Circle</h3>
                  <p className="text-muted-foreground">
                    Students reflect on the day's learning, share accomplishments, and prepare for dismissal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Elementary Faculty</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Our elementary teachers are experienced educators who are passionate about working with young learners. They
            create warm, supportive classroom communities where each child is known, valued, and challenged to grow.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Ms. Sarah Johnson",
              role: "Kindergarten Lead Teacher",
              bio: "With 15 years of experience in early childhood education, Ms. Johnson creates a joyful, nurturing environment where our youngest students develop a love of learning.",
              image: "/placeholder.svg?height=300&width=300&text=Ms. Johnson",
            },
            {
              name: "Mr. David Chen",
              role: "3rd Grade Lead Teacher",
              bio: "Mr. Chen specializes in project-based learning and uses his background in environmental science to inspire curiosity and stewardship in his students.",
              image: "/placeholder.svg?height=300&width=300&text=Mr. Chen",
            },
            {
              name: "Mrs. Maria Rodriguez",
              role: "Elementary Science Specialist",
              bio: "Mrs. Rodriguez brings science to life through hands-on experiments and investigations that encourage students to think critically and solve problems creatively.",
              image: "/placeholder.svg?height=300&width=300&text=Mrs. Rodriguez",
            },
          ].map((teacher, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <Image src={teacher.image || "/placeholder.svg"} alt={teacher.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{teacher.name}</h3>
                <p className="text-primary font-medium mb-4">{teacher.role}</p>
                <p className="text-muted-foreground">{teacher.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button asChild>
            <Link href="/about/faculty">Meet All Faculty</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Elementary Program</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We invite you to visit our campus and see our elementary program in action. Schedule a tour today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
              <Link href="/admissions/visit">Schedule a Visit</Link>
            </Button>
            <Button asChild size="lg" className="bg-background text-primary hover:bg-background/90">
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

