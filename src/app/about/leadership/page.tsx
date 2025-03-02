import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mail } from "lucide-react"

export default function LeadershipPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920&text=Leadership"
          alt="<strong>Sardar Patel Hr. Sec School</strong> Leadership"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Our Leadership</h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Meet the dedicated team guiding <strong>Sardar Patel Hr. Sec School</strong>
          </p>
        </div>
      </section>

      {/* Leadership Introduction */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Leadership Philosophy</h2>
          <p className="text-muted-foreground mb-8">
            At <strong>Sardar Patel Hr. Sec School</strong>, leadership is about service, vision, and collaboration. Our leadership team brings
            together diverse expertise and perspectives, united by a shared commitment to our mission and values. They
            work tirelessly to create an environment where students, faculty, and staff can thrive and reach their full
            potential.
          </p>
        </div>
      </section>

      {/* Head of School */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=500&width=600&text=Dr. James Wilson"
                alt="Dr. James Wilson, Head of School"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-2">Dr. James Wilson</h2>
              <p className="text-primary font-medium text-xl mb-6">Head of School</p>
              <p className="text-muted-foreground mb-4">
                Dr. Wilson brings over 25 years of experience in education leadership to <strong>Sardar Patel Hr. Sec School</strong>. He holds a
                Ph.D. in Educational Administration from Stanford University and is dedicated to fostering a culture of
                excellence and innovation.
              </p>
              <p className="text-muted-foreground mb-4">
                Since joining Sardar patel in 2003, Dr. Wilson has led the school through a period of significant growth
                and development, including the expansion of our campus, the enhancement of our academic programs, and
                the strengthening of our financial aid program.
              </p>
              <p className="text-muted-foreground mb-6">
                Dr. Wilson is passionate about preparing students for the challenges and opportunities of the 21st
                century. He believes that education should be both rigorous and joyful, and that schools should nurture
                not just academic excellence but also character, creativity, and global citizenship.
              </p>
              <div className="flex items-center gap-4">
                <Button asChild>
                  <a href="mailto:jwilson@sardarpatelschool.edu">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Dr. Wilson
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/about/head-message">Read Dr. Wilson's Message</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Senior Leadership Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Sarah Chen",
              title: "Academic Dean",
              bio: "With a background in curriculum development and a doctorate in Education from Harvard, Dr. Chen oversees the academic programs at Sardar patel, ensuring they meet the highest standards of excellence.",
              image: "/placeholder.svg?height=300&width=300&text=Dr. Sarah Chen",
            },
            {
              name: "Michael Rodriguez",
              title: "Director of Admissions",
              bio: "Mr. Rodriguez has been with Sardar patel for 15 years, guiding families through the admissions process with care and attention to each student's unique potential.",
              image: "/placeholder.svg?height=300&width=300&text=Michael Rodriguez",
            },
            {
              name: "Jennifer Park",
              title: "Director of Student Life",
              bio: "Ms. Park is passionate about creating a vibrant and inclusive community at Sardar patel. She oversees extracurricular activities, student support services, and community outreach.",
              image: "/placeholder.svg?height=300&width=300&text=Jennifer Park",
            },
            {
              name: "Robert Johnson",
              title: "Director of Athletics",
              bio: "A former collegiate athlete, Mr. Johnson leads our athletic programs with an emphasis on sportsmanship, teamwork, and personal growth both on and off the field.",
              image: "/placeholder.svg?height=300&width=300&text=Robert Johnson",
            },
            {
              name: "Dr. Emily Thompson",
              title: "Director of College Counseling",
              bio: "Dr. Thompson guides our students through the college application process, helping them find the right fit for their academic interests, career goals, and personal growth.",
              image: "/placeholder.svg?height=300&width=300&text=Dr. Emily Thompson",
            },
            {
              name: "David Martinez",
              title: "Chief Financial Officer",
              bio: "With extensive experience in financial management for educational institutions, Mr. Martinez ensures the fiscal health of Sardar patel while supporting our mission and strategic goals.",
              image: "/placeholder.svg?height=300&width=300&text=David Martinez",
            },
          ].map((leader, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-64">
                <Image src={leader.image || "/placeholder.svg"} alt={leader.name} fill className="object-cover" />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <p className="text-primary font-medium mb-4">{leader.title}</p>
                <p className="text-muted-foreground">{leader.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Board of Trustees</h2>
          <p className="text-muted-foreground mb-12 text-center max-w-4xl mx-auto">
            <strong>Sardar Patel Hr. Sec School</strong>'s Board of Trustees is composed of dedicated volunteers who bring diverse expertise and
            perspectives to guide the school's strategic direction and ensure its long-term sustainability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Elizabeth Sardar patel, Ph.D.",
                title: "Chair",
                affiliation: "Founder, <strong>Sardar Patel Hr. Sec School</strong>",
              },
              {
                name: "Richard Chen, MBA",
                title: "Vice Chair",
                affiliation: "CEO, Global Innovations",
              },
              {
                name: "Maria Gonzalez, J.D.",
                title: "Secretary",
                affiliation: "Partner, Gonzalez & Associates Law Firm",
              },
              {
                name: "Jonathan Taylor, CPA",
                title: "Treasurer",
                affiliation: "Managing Director, Taylor Financial Group",
              },
              {
                name: "Sophia Williams, M.D.",
                title: "Trustee",
                affiliation: "Chief of Pediatrics, City General Hospital",
              },
              {
                name: "Robert Kim, Ph.D.",
                title: "Trustee",
                affiliation: "Professor of Education, State University",
              },
              {
                name: "James Wilson, Ph.D.",
                title: "Ex Officio",
                affiliation: "Head of School, <strong>Sardar Patel Hr. Sec School</strong>",
              },
              {
                name: "Patricia Johnson",
                title: "Trustee",
                affiliation: "President, Parents Association",
              },
              {
                name: "David Thompson",
                title: "Trustee",
                affiliation: "Alumni Association President, Class of 1995",
              },
            ].map((trustee, index) => (
              <div key={index} className="bg-background p-6 rounded-lg">
                <h3 className="font-bold">{trustee.name}</h3>
                <p className="text-primary text-sm mb-1">{trustee.title}</p>
                <p className="text-muted-foreground text-sm">{trustee.affiliation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Faculty Leadership */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Department Chairs</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. Thomas Lee",
              department: "Mathematics",
              bio: "Dr. Lee holds a Ph.D. in Mathematics from MIT and has been teaching at Sardar patel for 12 years. He leads our innovative math curriculum that emphasizes problem-solving and real-world applications.",
            },
            {
              name: "Dr. Rebecca Johnson",
              department: "Science",
              bio: "With a doctorate in Chemistry and experience in research, Dr. Johnson brings scientific inquiry to life in our classrooms and laboratories.",
            },
            {
              name: "Professor Mark Williams",
              department: "English",
              bio: "A published author and former university professor, Mr. Williams inspires students to develop their critical thinking and communication skills through literature and writing.",
            },
            {
              name: "Dr. Elena Rodriguez",
              department: "History & Social Sciences",
              bio: "Dr. Rodriguez's background in international relations enriches our history and social sciences curriculum with global perspectives and contemporary relevance.",
            },
            {
              name: "Madame Claire Dubois",
              department: "World Languages",
              bio: "A native French speaker with expertise in language acquisition, Madame Dubois leads our comprehensive world languages program that includes French, Spanish, Mandarin, and Latin.",
            },
            {
              name: "Mr. David Park",
              department: "Arts",
              bio: "An accomplished visual artist, Mr. Park oversees our visual and performing arts programs, fostering creativity and self-expression across multiple disciplines.",
            },
          ].map((chair, index) => (
            <div key={index} className="border rounded-lg p-6">
              <h3 className="text-xl font-bold">{chair.name}</h3>
              <p className="text-primary font-medium mb-4">Chair, {chair.department} Department</p>
              <p className="text-muted-foreground">{chair.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Meet Our Leadership Team</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We invite you to visit our campus and meet the dedicated professionals who lead <strong>Sardar Patel Hr. Sec School</strong>.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="/admissions/visit">Schedule a Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

