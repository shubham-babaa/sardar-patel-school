import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin } from "lucide-react"

export default function CampusPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/placeholder.svg?height=400&width=1920&text=Our Campus"
          alt="<strong>Sardar Patel Hr. Sec School</strong> Campus"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">Our Campus</h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            A state-of-the-art learning environment designed to inspire
          </p>
        </div>
      </section>

      {/* Campus Overview */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Campus Overview</h2>
            <p className="text-muted-foreground mb-4">
              Nestled on 25 acres of beautifully landscaped grounds, <strong>Sardar Patel Hr. Sec School</strong>'s campus provides an inspiring
              environment for learning and growth. Our facilities combine historic architecture with modern amenities to
              create spaces that foster academic excellence, creativity, and community.
            </p>
            <p className="text-muted-foreground mb-6">
              The campus is organized into distinct areas for elementary, middle, and high school students, allowing
              each age group to have their own space while still being part of the larger Sardar patel community.
              State-of-the-art academic buildings, athletic facilities, and arts centers provide students with
              exceptional resources for their educational journey.
            </p>
            <div className="flex items-center gap-4">
              <Button asChild>
                <Link href="/admissions/visit">Schedule a Campus Tour</Link>
              </Button>
              <Button asChild variant="outline">
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Campus Aerial View"
              alt="Aerial view of campus"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Campus Facilities */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Campus Facilities</h2>

          <Tabs defaultValue="academic" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="academic">Academic Buildings</TabsTrigger>
              <TabsTrigger value="arts">Arts Center</TabsTrigger>
              <TabsTrigger value="athletic">Athletic Facilities</TabsTrigger>
              <TabsTrigger value="community">Community Spaces</TabsTrigger>
            </TabsList>

            <TabsContent value="academic" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Academic Buildings"
                    alt="Academic buildings"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Academic Buildings</h3>
                  <p className="text-muted-foreground mb-4">
                    Our academic buildings feature state-of-the-art classrooms, science laboratories, and collaborative
                    learning spaces designed to support our innovative curriculum and teaching methods.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Elementary School Building</h4>
                      <p className="text-muted-foreground">
                        Bright, welcoming spaces designed specifically for our youngest learners, with flexible
                        classroom arrangements and dedicated areas for art, music, and movement.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Middle School Building</h4>
                      <p className="text-muted-foreground">
                        Thoughtfully designed to meet the unique needs of early adolescents, with team-based learning
                        areas and specialized classrooms for each subject area.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">High School Building</h4>
                      <p className="text-muted-foreground">
                        College-like environment with seminar rooms, advanced laboratories, and study spaces that
                        prepare students for higher education.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Science and Technology Center</h4>
                      <p className="text-muted-foreground">
                        Cutting-edge facilities for biology, chemistry, physics, and computer science, including
                        research-grade equipment and makerspaces.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="arts" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Arts Center</h3>
                  <p className="text-muted-foreground mb-4">
                    The Sardar patel Arts Center includes a 350-seat theater, music studios, visual arts studios, and a
                    digital media lab, providing students with exceptional facilities to explore and develop their
                    artistic talents.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Performing Arts Theater</h4>
                      <p className="text-muted-foreground">
                        A professional-quality theater with advanced lighting and sound systems, orchestra pit, and
                        backstage areas for productions ranging from intimate plays to full-scale musicals.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Music Wing</h4>
                      <p className="text-muted-foreground">
                        Soundproofed practice rooms, ensemble rehearsal spaces, and a recording studio equipped with
                        professional-grade equipment.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Visual Arts Studios</h4>
                      <p className="text-muted-foreground">
                        Specialized studios for drawing, painting, sculpture, ceramics, and photography, with natural
                        lighting and professional equipment.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Digital Media Lab</h4>
                      <p className="text-muted-foreground">
                        State-of-the-art computers and software for digital art, animation, film production, and graphic
                        design.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Arts Center"
                    alt="Arts center"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="athletic" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Athletic Facilities"
                    alt="Athletic facilities"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-4">Athletic Facilities</h3>
                  <p className="text-muted-foreground mb-4">
                    Our athletic complex features a gymnasium, swimming pool, tennis courts, and playing fields for
                    various sports, supporting our commitment to physical education and competitive athletics.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Athletic Center</h4>
                      <p className="text-muted-foreground">
                        A modern facility with two full-sized gymnasiums, fitness center, dance studio, and locker
                        rooms.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Aquatic Center</h4>
                      <p className="text-muted-foreground">
                        Six-lane, 25-meter swimming pool with spectator seating, used for physical education classes,
                        swim team practices and competitions, and community programs.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Outdoor Athletic Fields</h4>
                      <p className="text-muted-foreground">
                        Multiple playing fields for soccer, field hockey, lacrosse, and baseball/softball, including an
                        all-weather turf field with lights for evening practices and games.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Tennis Complex</h4>
                      <p className="text-muted-foreground">
                        Six tennis courts with lighting for evening play and a pavilion for spectators.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="community" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Community Spaces</h3>
                  <p className="text-muted-foreground mb-4">
                    <strong>Sardar Patel Hr. Sec School</strong> features a variety of spaces designed to foster community, collaboration, and
                    student well-being.
                  </p>
                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Library & Technology Center</h4>
                      <p className="text-muted-foreground">
                        Our modern library and technology center offers extensive print and digital resources,
                        collaborative study spaces, and cutting-edge technology to support research, innovation, and
                        digital literacy.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Dining Commons</h4>
                      <p className="text-muted-foreground">
                        A bright, welcoming space where students and faculty gather for meals prepared by our in-house
                        culinary team using fresh, locally sourced ingredients whenever possible.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Student Center</h4>
                      <p className="text-muted-foreground">
                        A hub for student life with comfortable lounges, meeting rooms for clubs and activities, and
                        spaces for informal gatherings and special events.
                      </p>
                    </div>
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Outdoor Learning Spaces</h4>
                      <p className="text-muted-foreground">
                        Gardens, courtyards, and an environmental education area that extend learning beyond the
                        classroom walls and connect students with nature.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600&text=Community Spaces"
                    alt="Community spaces"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Campus Map */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Campus Map</h2>
        <div className="relative h-[600px] rounded-lg overflow-hidden mb-8">
          <Image
            src="/placeholder.svg?height=600&width=1200&text=Interactive Campus Map"
            alt="Interactive campus map"
            fill
            className="object-cover"
          />
        </div>
        <div className="text-center">
          <Button asChild>
            <a href="/campus-map.pdf" download>
              Download Campus Map
            </a>
          </Button>
        </div>
      </section>

      {/* Sustainability */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600&text=Sustainable Campus"
                alt="Sustainable campus features"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">Sustainability</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Sardar Patel Hr. Sec School</strong> is committed to environmental sustainability in both our campus operations and our
                educational programs. Our campus serves as a living laboratory for sustainable practices and
                environmental stewardship.
              </p>
              <div className="space-y-4">
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold mb-2">Green Buildings</h4>
                  <p className="text-muted-foreground">
                    Our newest buildings are LEED-certified, featuring energy-efficient systems, sustainable materials,
                    and designs that maximize natural light.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold mb-2">Renewable Energy</h4>
                  <p className="text-muted-foreground">
                    Solar panels on several buildings generate clean energy and serve as educational tools for our
                    science curriculum.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold mb-2">Campus Gardens</h4>
                  <p className="text-muted-foreground">
                    Organic gardens maintained by students provide fresh produce for our dining commons and
                    opportunities for hands-on learning about sustainable agriculture.
                  </p>
                </div>
                <div className="bg-background rounded-lg p-4">
                  <h4 className="font-bold mb-2">Conservation Practices</h4>
                  <p className="text-muted-foreground">
                    Water conservation systems, comprehensive recycling and composting programs, and habitat
                    preservation areas demonstrate our commitment to environmental responsibility.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Safety */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Campus Safety</h2>
            <p className="text-muted-foreground mb-4">
              The safety and security of our students, faculty, and staff is our highest priority. <strong>Sardar Patel Hr. Sec School</strong>
              has implemented comprehensive safety measures and protocols to ensure a secure learning environment.
            </p>
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-bold mb-2">Security Personnel</h4>
                <p className="text-muted-foreground">
                  Trained security staff are on campus during school hours and at all major events.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-bold mb-2">Access Control</h4>
                <p className="text-muted-foreground">
                  Secure entry systems and visitor management procedures ensure that only authorized individuals are on
                  campus.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-bold mb-2">Emergency Preparedness</h4>
                <p className="text-muted-foreground">
                  Regular drills and comprehensive emergency response plans prepare our community for various scenarios.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-4">
                <h4 className="font-bold mb-2">Health Services</h4>
                <p className="text-muted-foreground">
                  A fully staffed health office with registered nurses provides medical care and supports student
                  wellness.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600&text=Campus Safety"
              alt="Campus safety features"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience Our Campus</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We invite you to visit <strong>Sardar Patel Hr. Sec School</strong> and see our exceptional facilities firsthand. Schedule a campus
            tour today.
          </p>
          <Button asChild size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90">
            <Link href="/admissions/visit">Schedule a Visit</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}

