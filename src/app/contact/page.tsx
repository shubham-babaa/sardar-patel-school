'use client'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  const locations = [
    {
      title: "Escondido Grill",
      address1: "601 Geary St",
      address2: "San Francisco, CA 94102, USA",
      coords: { lat: 24.57973, lng: 80.86385 },
      placeId: "ChIJ5Sz52pGAhYAR1raOybzuDp8",
    },
  ];
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[300px] overflow-hidden">
        <Image
          src="/student.webp"
          alt="Contact <strong>Sardar Patel Hr. Sec School</strong>"
          width={1920}
          height={300}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-center max-w-2xl">
            We're here to answer your questions and help you connect with our
            community
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
            <p className="text-muted-foreground mb-8">
              Whether you have questions about our programs, admissions process,
              or would like to schedule a visit, we're here to help. Fill out
              the form below and a member of our team will get back to you
              shortly.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input
                    id="first-name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="inquiry-type">Inquiry Type</Label>
                <Select>
                  <SelectTrigger id="inquiry-type">
                    <SelectValue placeholder="Select an inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="admissions">
                      Admissions Information
                    </SelectItem>
                    <SelectItem value="tour">Schedule a Tour</SelectItem>
                    <SelectItem value="academics">Academic Programs</SelectItem>
                    <SelectItem value="financial">
                      Financial Aid & Tuition
                    </SelectItem>
                    <SelectItem value="athletics">Athletics</SelectItem>
                    <SelectItem value="arts">Arts Programs</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full md:w-auto">
                Submit Inquiry
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-muted-foreground">
                      SARDAR PATEL HR SEC SCHOOL WARD NO.13, Hanuman Nagar,
                      Adarsh Nagar Nai Basti, Satna, Madhya Pradesh 485005
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-muted-foreground">(+91) 9907378338</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">
                      info@sardarpatelschool.edu
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-primary mr-3 mt-0.5" />
                  <div>
                    <p className="font-medium">Office Hours</p>
                    <p className="text-muted-foreground">
                      Monday - Friday: 8:00 AM - 4:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px] rounded-lg overflow-hidden">
              {/* <Image
                src="/placeholder.svg?height=300&width=600&text=Campus Map"
                alt="Campus map"
                fill
                className="object-cover"
              /> */}
              <div
                className="mapouter"
                style={{
                  position: "relative",
                  textAlign: "right",
                  width: "100%",
                  height: "400px",
                }}
              >
                <div
                  className="gmap_canvas"
                  style={{
                    overflow: "hidden",
                    background: "none!important",
                    width: "100%",
                    height: "100%",
                  }}
                >
                  <iframe
                    className="gmap_iframe"
                    frameBorder="0"
                    scrolling="no"
                    // marginHeight="0"
                    // marginWidth="0"
                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Sardar%20Patel%20Convent%20School%20Satna&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                    style={{ width: "100%", height: "100%" }}
                    loading="lazy"
                  ></iframe>
                </div>
                <style jsx>{`
                  .mapouter {
                    position: relative;
                    text-align: right;
                    width: 100%;
                    height: 400px;
                  }
                  .gmap_canvas {
                    overflow: hidden;
                    background: none !important;
                    width: 100%;
                    height: 100%;
                  }
                  .gmap_iframe {
                    width: 100% !important;
                    height: 100% !important;
                  }
                `}</style>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Department Contacts</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium">Admissions Office</p>
                  <p className="text-muted-foreground">
                    admissions@sardarpatelschool.edu | (555) 123-4567 ext. 101
                  </p>
                </div>
                <div>
                  <p className="font-medium">Academic Affairs</p>
                  <p className="text-muted-foreground">
                    academics@sardarpatelschool.edu | (555) 123-4567 ext. 201
                  </p>
                </div>
                <div>
                  <p className="font-medium">Athletics Department</p>
                  <p className="text-muted-foreground">
                    athletics@sardarpatelschool.edu | (555) 123-4567 ext. 301
                  </p>
                </div>
                <div>
                  <p className="font-medium">Business Office</p>
                  <p className="text-muted-foreground">
                    finance@sardarpatelschool.edu | (555) 123-4567 ext. 401
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      {/* <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Visit Our Campus
          </h2>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=500&width=1200&text=Interactive Campus Map"
              alt="Interactive campus map"
              fill
              className="object-cover"
            />
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </section> */}

      {/* FAQ Section */}
      <section className="py-16 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "What are the school hours?",
              answer:
                "School hours are from 8:30 AM to 3:30 PM, Monday through Friday. Extended day programs are available from 7:30 AM to 6:00 PM.",
            },
            {
              question: "How can I schedule a campus tour?",
              answer:
                "You can schedule a campus tour by contacting our Admissions Office at (555) 123-4567 ext. 101 or by filling out the form on this page.",
            },
            {
              question: "Where can I find information about upcoming events?",
              answer:
                "Information about upcoming events can be found on our News & Events page or by subscribing to our newsletter.",
            },
            {
              question: "How do I access the parent/student portal?",
              answer:
                "The parent/student portal can be accessed through the link in the top navigation menu. Login credentials are provided at the beginning of the school year.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-background rounded-lg p-6 border">
              <h4 className="font-bold mb-2">{item.question}</h4>
              <p className="text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
