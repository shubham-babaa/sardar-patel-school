import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  CheckCircle,
  Calendar,
  FileText,
  Users,
  DollarSign,
  Mail,
} from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[400px] overflow-hidden">
        <Image
          src="/student.webp"
          alt="Admissions at <strong>Sardar Patel Hr. Sec School</strong>"
          width={1920}
          height={400}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-4">
            Admissions
          </h1>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl">
            Join our community of learners and leaders
          </p>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Admission Process</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            We're delighted that you're considering <strong>Sardar Patel Hr. Sec School</strong> for your
            child's education. Our admissions process is designed to be thorough
            yet supportive, helping us get to know your child while introducing
            you to our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: 1,
              title: "Inquire",
              description:
                "Complete our inquiry form to receive information about our programs and admissions process.",
              icon: <FileText className="h-10 w-10 text-primary mb-4" />,
            },
            {
              step: 2,
              title: "Visit",
              description:
                "Schedule a campus tour to experience our community firsthand and ask questions.",
              icon: <Calendar className="h-10 w-10 text-primary mb-4" />,
            },
            {
              step: 3,
              title: "Apply",
              description:
                "Submit your application along with all required documents and the application fee.",
              icon: <FileText className="h-10 w-10 text-primary mb-4" />,
            },
            {
              step: 4,
              title: "Interview & Assessment",
              description:
                "Participate in an interview and student assessment as part of our evaluation process.",
              icon: <Users className="h-10 w-10 text-primary mb-4" />,
            },
          ].map((step) => (
            <div
              key={step.step}
              className="flex flex-col items-center text-center"
            >
              {step.icon}
              <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center mb-4">
                {step.step}
              </div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button disabled={true} size="lg">
            <Link href="/admissions/apply">Start Your Application</Link>
          </Button>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="requirements" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
              <TabsTrigger value="requirements">
                Admission Requirements
              </TabsTrigger>
              <TabsTrigger value="tuition">Tuition & Financial Aid</TabsTrigger>
              <TabsTrigger value="faq">Frequently Asked Questions</TabsTrigger>
            </TabsList>

            <TabsContent value="requirements" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-6">
                    Admission Requirements
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    <strong>Sardar Patel Hr. Sec School</strong> seeks students who demonstrate academic
                    potential, intellectual curiosity, and good character. Our
                    admissions committee reviews each application holistically,
                    considering academic records, teacher recommendations,
                    assessment results, and personal interviews.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Required Documents</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Completed application form</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Academic records from the past two years</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Two teacher recommendations</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Student and parent statements</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                          <span>Application fee</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Assessment</h4>
                      <p className="text-muted-foreground">
                        Applicants participate in age-appropriate assessments to
                        help us understand their academic readiness and learning
                        style. For middle and high school applicants, this
                        includes standardized testing and subject-specific
                        evaluations.
                      </p>
                    </div>

                    <div className="bg-background rounded-lg p-4">
                      <h4 className="font-bold mb-2">Interview</h4>
                      <p className="text-muted-foreground">
                        Personal interviews allow us to get to know prospective
                        students and their families while providing an
                        opportunity to ask questions about our program.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="relative h-[600px] rounded-lg overflow-hidden">
                  <Image
                    src="/step-ad.jpeg?height=600&width=600&text=Admissions Requirements"
                    alt="Students in admissions interview"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </TabsContent>

            <TabsContent value="tuition" className="mt-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1 relative h-[600px] rounded-lg overflow-hidden">
                  <Image
                    src="/aid.jpeg?height=600&width=600&text=Tuition & Aid"
                    alt="Financial aid meeting"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 lg:order-2">
                  <h3 className="text-2xl font-bold mb-6">
                    Tuition & Financial Aid
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    <strong>Sardar Patel Hr. Sec School</strong> is committed to making our educational
                    experience accessible to qualified students from diverse
                    backgrounds. We offer a robust financial aid program to help
                    bridge the gap between the cost of education and what
                    families can afford.
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-bold mb-3">
                        2025-2026 Tuition
                      </h4>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>Elementary School (K-5)</span>
                          <span className="font-bold">rs-1000</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>Middle School (6-8)</span>
                          <span className="font-bold">rs-1750</span>
                        </div>
                        <div className="flex justify-between items-center border-b pb-2">
                          <span>High School (9-12)</span>
                          <span className="font-bold">rs-2000</span>
                        </div>
                      </div>
                      <p className="text-sm text-muted-foreground mt-2">
                        *Tuition includes books, technology fees, and most field
                        trips.
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Financial Aid</h4>
                      <p className="text-muted-foreground mb-3">
                        <strong>Sardar Patel Hr. Sec School</strong> awards over $3 million in need-based
                        financial aid annually. Aid decisions are made
                        independently from admission decisions.
                      </p>
                      <div className="flex items-start mb-3">
                        <DollarSign className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium">Need-Based Aid</p>
                          <p className="text-muted-foreground">
                            Based on family financial circumstances
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <DollarSign className="h-5 w-5 text-primary mr-2 mt-0.5" />
                        <div>
                          <p className="font-medium">Merit Scholarships</p>
                          <p className="text-muted-foreground">
                            Available for exceptional students in grades 6-12
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold mb-3">Payment Plans</h4>
                      <p className="text-muted-foreground">
                        We offer flexible payment plans, including annual,
                        semi-annual, and monthly options to help families manage
                        tuition payments.
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button disabled={true}>
                      <Link href="/admissions/financial-aid">
                        Financial Aid Details
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="faq" className="mt-8">
              <h3 className="text-2xl font-bold mb-6 text-center">
                Frequently Asked Questions
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    question: "When should we apply?",
                    answer:
                      "The application deadline for priority consideration is January 15 for the following academic year. We accept applications on a rolling basis after this date as space permits.",
                  },
                  {
                    question: "Do you offer transportation?",
                    answer:
                      "Yes, we offer bus service for an additional fee from several locations throughout the metropolitan area. Details are available from the Admissions Office.",
                  },
                  {
                    question: "What is your acceptance rate?",
                    answer:
                      "Our acceptance rate varies by grade level and year, typically ranging from 20-30%. We seek to create a diverse and talented student body that will thrive in our challenging academic environment.",
                  },
                  {
                    question: "Is there an application fee?",
                    answer:
                      "Yes, there is a non-refundable application fee of $100. Fee waivers are available for families demonstrating financial need.",
                  },
                  {
                    question: "Do you accept international students?",
                    answer:
                      "Yes, we welcome applications from international students. We provide support for English language learners and assistance with visa requirements.",
                  },
                  {
                    question: "What is your student-to-teacher ratio?",
                    answer:
                      "Our average class size is 16 students, with a student-to-teacher ratio of 12:1, allowing for personalized attention and support.",
                  },
                  {
                    question: "Do you offer before and after school care?",
                    answer:
                      "Yes, we offer extended day programs from 7:30 AM to 6:00 PM for an additional fee to accommodate working parents.",
                  },
                  {
                    question:
                      "How do you support students with learning differences?",
                    answer:
                      "Our Learning Support Center provides resources for students with mild to moderate learning differences, including individualized learning plans and specialized instruction.",
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-background rounded-lg p-6">
                    <h4 className="font-bold mb-2">{item.question}</h4>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-4">
                  Don't see your question answered here?
                </p>
                <Button disabled={true}>
                  <Link href="/contact">Contact Admissions</Link>
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          What Our Families Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "The admissions process was thorough yet welcoming. We felt supported every step of the way, and our daughter has thrived at <strong>Sardar Patel Hr. Sec School</strong>.",
              name: "The Johnson Family",
              year: "Parents since 2020",
            },
            {
              quote:
                "We were impressed by how well the admissions team got to know our son as an individual. They recognized his potential and have helped him grow academically and personally.",
              name: "The Martinez Family",
              year: "Parents since 2018",
            },
            {
              quote:
                "The financial aid process was straightforward and dignified. Sardar patel's commitment to socioeconomic diversity is evident in their approach to making education accessible.",
              name: "The Williams Family",
              year: "Parents since 2021",
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-muted">
              <CardContent className="pt-6">
                <div className="text-4xl text-primary mb-4">"</div>
                <p className="italic mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.year}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We invite you to take the next step in your educational journey with
            <strong>Sardar Patel Hr. Sec School</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              disabled={true}
              size="lg"
              variant="outline"
              className="bg-white text-primary hover:bg-white/90"
            >
              <Link href="/admissions/visit">Schedule a Visit</Link>
            </Button>
            <Button
              disabled={true}
              size="lg"
              className="bg-background text-primary hover:bg-background/90"
            >
              <Link href="/admissions/apply">Apply Now</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Contact Admissions</h2>
            <p className="text-muted-foreground mb-6">
              Our admissions team is here to answer your questions and guide you
              through the application process. We look forward to getting to
              know your family and helping you explore all that <strong>Sardar Patel Hr. Sec School</strong> has to offer.
            </p>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Users className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Admissions Office</p>
                  <p className="text-muted-foreground">(+91) 9907327147</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">
                    admissions@sardarpatelschool.edu
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <p className="font-medium">Office Hours</p>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 4:30 PM
                  </p>
                </div>
              </div>
            </div>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/addmission.jpeg?height=400&width=600&text=Contact Admissions"
              alt="Admissions office"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
