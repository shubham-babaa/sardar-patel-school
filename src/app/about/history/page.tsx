import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HistoryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/school-1.webp"
          alt="Sardar patel History"
          width={1920}
          height={900}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Our History
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            A legacy of excellence in education since 1997
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Our Journey Through the Years
          </h2>

          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
              <div className="text-center md:text-right">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                  1997
                </div>
              </div>
              <div className="relative border-l-4 border-primary pl-8 pb-8">
                <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-4">The Founding</h3>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Sardar Patel Hr. Sec School was founded by Mr. Mahendra Singh,
                      a visionary educator who believed in creating a school
                      that combined academic rigor with character development.
                      Starting with just 50 students and 5 teachers in a small
                      building on Main Street, the school quickly established a
                      reputation for excellence.
                    </p>
                    <p className="text-muted-foreground">
                      Mr. Mahendra's philosophy was simple yet profound:
                      education should nurture not just the mind, but also the
                      heart and spirit. This holistic approach to education
                      became the cornerstone of Sardar patel's identity.
                    </p>
                  </div>
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src="/real-school.webp"
                      alt="Original school building"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
              <div className="text-center md:text-right">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                  2007
                </div>
              </div>
              <div className="relative border-l-4 border-primary pl-8 pb-8">
                <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-4">Campus Expansion</h3>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      After a decade of growth, Sardar Patel Hr. Sec. School
                      expanded its campus to include new science laboratories, a
                      performing arts center, and athletic facilities, enhancing
                      the educational experience for its growing student body.
                    </p>
                    <p className="text-muted-foreground">
                      The expansion allowed Sardar Patel to accommodate 300
                      students and offer a more comprehensive curriculum. The
                      new facilities enabled the school to launch specialized
                      programs in science, arts, and athletics that continue to
                      be hallmarks of a Sardar Patel education.
                    </p>
                  </div>
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src="/lab.jpeg?height=200&width=300&text=Campus Expansion"
                      alt="Campus expansion"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
              <div className="text-center md:text-right">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                  2012
                </div>
              </div>
              <div className="relative border-l-4 border-primary pl-8 pb-8">
                <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-4">
                  Innovation in Education
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Sardar Patel Hr. Sec. School introduced innovative educational
                      programs, including a STEM initiative and global exchange
                      program, preparing students for the challenges of the 21st
                      century.
                    </p>
                    <p className="text-muted-foreground">
                      Under the leadership of our dedicated administration, who
                      took charge in 2003, Sardar Patel Hr. Sec. School embraced
                      technology and modern educational practices. The school
                      has continuously evolved, integrating digital learning
                      tools and fostering a global perspective. We have
                      established academic collaborations and initiatives to
                      provide students with a well-rounded, future-ready
                      education.
                    </p>
                  </div>
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src="/innovative.jpeg"
                      alt="STEM program"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
              <div className="text-center md:text-right">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                  2013
                </div>
              </div>
              <div className="relative border-l-4 border-primary pl-8 pb-8">
                <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-4">
                  Opening of Sardar Patel Convent School
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      In 2013, Sardar Patel Convent School was established to
                      provide high-quality education from Nursery to Class 8 in
                      an English-medium environment. The school focuses on
                      holistic learning, academic excellence, and character
                      development for young learners.
                    </p>
                    <p className="text-muted-foreground">
                      The inauguration of the new branch marked a significant
                      milestone in our educational journey, expanding
                      opportunities for students in the region. With
                      state-of-the-art facilities and a dedicated faculty,
                      Sardar Patel Convent School continues to nurture young
                      minds for a bright future.
                    </p>
                  </div>
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src="/logo_1.jpg"
                      alt="convent school logo"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-8">
              <div className="text-center md:text-right">
                <div className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-lg font-bold text-xl">
                  Today
                </div>
              </div>
              <div className="relative border-l-4 border-primary pl-8">
                <div className="absolute top-0 -left-2 w-4 h-4 rounded-full bg-primary"></div>
                <h3 className="text-2xl font-bold mb-4">
                  Looking to the Future
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-6 items-center">
                  <div>
                    <p className="text-muted-foreground mb-4">
                      Today, <strong>Sardar Patel Hr. Sec. School</strong> continues
                      to grow and innovate while staying true to its core
                      values. With over 800 students and 70 dedicated faculty
                      members, we remain committed to fostering excellence in
                      education and character development.
                    </p>
                    <p className="text-muted-foreground">
                      Looking ahead, <strong>Sardar Patel Hr. Sec. School</strong>{" "}
                      is dedicated to embracing modern education, inclusivity,
                      and preparing students for a dynamic world. Our vision
                      includes expanding our infrastructure, enhancing our
                      academic programs, and strengthening financial assistance
                      to ensure quality education is accessible to all deserving
                      students.
                    </p>
                  </div>
                  <div className="relative h-[200px] rounded-lg overflow-hidden">
                    <Image
                      src="/future.jpeg"
                      alt="Modern campus"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Spotlight */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Alumni Spotlight
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Dr. Sarah Chen",
                year: "Class of 1995",
                achievement: "Renowned Neurosurgeon",
                quote:
                  "My years at Sardar patel laid the foundation for my career in medicine. The rigorous science program and supportive teachers inspired my passion for neuroscience.",
              },
              {
                name: "Michael Rodriguez",
                year: "Class of 2002",
                achievement: "Tech Entrepreneur",
                quote:
                  "Sardar patel taught me to think critically and creatively. These skills were essential when I founded my tech company, which is now valued at over $100 million.",
              },
              {
                name: "Jennifer Park",
                year: "Class of 2010",
                achievement: "Environmental Advocate",
                quote:
                  "My involvement in Sardar patel's community service program sparked my commitment to environmental justice. I'm proud to continue the values I learned at Sardar patel.",
              },
            ].map((alumni, index) => (
              <div
                key={index}
                className="bg-background rounded-lg overflow-hidden shadow-sm"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold">{alumni.name}</h3>
                  <p className="text-primary font-medium mb-2">{alumni.year}</p>
                  <p className="font-medium mb-4">{alumni.achievement}</p>
                  <p className="italic text-muted-foreground">
                    "{alumni.quote}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Be Part of Our Story</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto text-muted-foreground">
          Join the Sardar patel community and help us write the next chapter in
          our history.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/admissions/apply">Apply Now</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/about">Learn More About Us</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
