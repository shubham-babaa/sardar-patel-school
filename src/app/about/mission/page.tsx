import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle } from "lucide-react"

export default function MissionPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/mission.jpeg?text=Mission & Values"
          alt="<strong>Sardar Patel Hr. Sec School</strong> Mission and Values"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Mission & Values</h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Guiding principles that shape our educational philosophy
          </p>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <div className="bg-muted p-8 rounded-lg mb-8">
            <p className="text-xl italic">
              "At <strong>Sardar Patel Hr. Sec School</strong>, our mission is to provide a transformative educational experience that nurtures
              intellectual curiosity, creativity, and character in a supportive and challenging environment. We are
              committed to developing well-rounded individuals who possess the knowledge, skills, and values necessary
              to succeed in college and beyond, and who will make meaningful contributions to society."
            </p>
          </div>
          <p className="text-muted-foreground mb-8">
            This mission guides everything we do at <strong>Sardar Patel Hr. Sec School</strong>, from curriculum development to extracurricular
            activities, from classroom instruction to community service. We believe that education is not just about
            academic achievement, but about developing the whole person—intellectually, socially, emotionally, and
            ethically.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: "Excellence",
                description:
                  "We strive for excellence in all aspects of education and encourage our students to do the same. We set high standards and provide the support needed to meet them.",
                image: "/excellence.jpeg?height=200&width=300&text=Excellence",
              },
              {
                title: "Integrity",
                description:
                  "We foster honesty, ethical behavior, and responsibility in our community. We believe that integrity is the foundation of character and essential for meaningful relationships and contributions to society.",
                image: "/build.jpeg?height=200&width=300&text=Integrity",
              },
              {
                title: "Respect",
                description:
                  "We value diversity and promote mutual respect among all members of our community. We believe that understanding and appreciating differences enriches the educational experience and prepares students for global citizenship.",
                image: "/respect.jpeg?height=200&width=300&text=Respect",
              },
              {
                title: "Innovation",
                description:
                  "We embrace innovation and creative thinking in our approach to education. We encourage students to explore new ideas, take intellectual risks, and develop the skills needed for a rapidly changing world.",
                image: "/invo.jpeg?height=200&width=300&text=Innovation",
              },
            ].map((value, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image src={value.image || "/placeholder.svg"} alt={value.title} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Philosophy */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Educational Philosophy</h2>
            <p className="text-muted-foreground mb-4">
              At <strong>Sardar Patel Hr. Sec School</strong>, we believe that education should be both challenging and joyful. Our educational
              philosophy is based on the following principles:
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-bold">Student-Centered Learning</p>
                  <p className="text-muted-foreground">
                    We recognize that each student is unique, with different strengths, interests, and learning styles.
                    Our approach to education is personalized, allowing students to develop their individual potential.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-bold">Balance of Tradition and Innovation</p>
                  <p className="text-muted-foreground">
                    We value traditional academic disciplines while embracing innovative teaching methods and
                    technologies. This balance ensures that students develop strong foundational knowledge while
                    learning to adapt to a changing world.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-bold">Global Perspective</p>
                  <p className="text-muted-foreground">
                    We prepare students to be global citizens by fostering cultural awareness, multilingualism, and an
                    understanding of international issues. Our curriculum and programs reflect the interconnected nature
                    of our world.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-bold">Character Development</p>
                  <p className="text-muted-foreground">
                    We believe that education should nurture not just the mind, but also the heart and spirit. We
                    emphasize values such as empathy, resilience, and social responsibility.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div className="relative h-[600px] rounded-lg overflow-hidden">
            <Image
              src="/philospy.webp?height=600&width=600&text=Educational Philosophy"
              alt="Students engaged in learning"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Diversity and Inclusion */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[600px] rounded-lg overflow-hidden">
              <Image
                src="/diversity.webp?height=600&width=600&text=Diversity & Inclusion"
                alt="Diverse student body"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Diversity and Inclusion</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Sardar Patel Hr. Sec School</strong> is committed to creating a diverse and inclusive community where all members feel
                valued, respected, and supported. We believe that diversity enriches the educational experience and
                prepares students for leadership in a pluralistic society.
              </p>
              <p className="text-muted-foreground mb-4">
                Our commitment to diversity and inclusion is reflected in our:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-bold">Admissions Process</p>
                    <p className="text-muted-foreground">
                      We seek to build a student body that reflects a variety of backgrounds, perspectives, and
                      experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-bold">Curriculum</p>
                    <p className="text-muted-foreground">
                      Our courses incorporate diverse voices, perspectives, and cultural traditions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-bold">Community Programs</p>
                    <p className="text-muted-foreground">
                      We offer programs and events that celebrate diversity and promote cross-cultural understanding.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-bold">Financial Aid</p>
                    <p className="text-muted-foreground">
                      We provide need-based financial aid to ensure that a Sardar patel education is accessible to
                      qualified students from all socioeconomic backgrounds.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Our Values in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "Sardar patel's commitment to excellence pushed me to achieve more than I thought possible, while the emphasis on character development helped me become a more thoughtful and compassionate person.",
              name: "Alex Johnson",
              role: "Alumni, Class of 2018",
            },
            {
              quote:
                "As a teacher at Sardar patel, I appreciate how our values aren't just words on a page—they're lived every day in our classrooms, hallways, and playing fields. They guide our decisions and interactions.",
              name: "Maria Rodriguez",
              role: "Faculty Member",
            },
            {
              quote:
                "The respect for diversity at Sardar patel has allowed my child to feel valued for who they are while learning to appreciate different perspectives and cultures. It's preparing them for success in our global society.",
              name: "David Chen",
              role: "Parent",
            },
          ].map((testimonial, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg">
              <p className="italic mb-4">"{testimonial.quote}"</p>
              <div>
                <p className="font-bold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Values in Action</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We invite you to visit our campus and see how our mission and values shape the Sardar patel experience.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="/admissions/visit">Schedule a Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

