import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { GraduationCap, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react"
import { Avatar, AvatarImage } from "@radix-ui/react-avatar"

export default function Footer() {
  return (
    <footer className="bg-muted flex justify-center">
      <div className="container px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
            <Avatar className="w-15 h-15 rounded-full">
              <AvatarImage src="/logo.jpg" alt="User Profile" className="rounded-full "/>
            </Avatar>
              <span className="font-bold text-xl"><strong>Sardar Patel Hr. Sec. School</strong> </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Empowering minds, shaping futures, and building tomorrow's leaders since 1997.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5 text-blue-500" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5 text-black" />
                <span className="sr-only ">Twitter</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5 text-red-500" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Youtube className="h-5 w-5 text-red-500" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-muted-foreground hover:text-primary">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-muted-foreground hover:text-primary">
                  Admissions
                </Link>
              </li>
              {/* <li>
                <Link href="/student-life" className="text-muted-foreground hover:text-primary">
                  Student Life
                </Link>
              </li> */}
              <li>
                <Link href="/news" className="text-muted-foreground hover:text-primary">
                  News & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground">SARDAR PATEL HR SEC SCHOOL
                WARD NO.13, Hanuman Nagar, Adarsh Nagar Nai Basti, Satna, Madhya Pradesh 485005</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground">(+91) 9907378338</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 shrink-0" />
                <span className="text-muted-foreground">info@sardarpatelschool.edu</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-4">Subscribe to our newsletter for the latest news and events.</p>
            <div className="space-y-3">
              <Input type="email" placeholder="Your email address" />
              <Button className="w-full">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} <strong>Sardar Patel Hr. Sec. School</strong>. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">
                Terms of Use
              </Link>
              <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary">
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

