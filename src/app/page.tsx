"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import "../style/home-style.css";
import Link from "next/link";
import About from "./component/about"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Fotter from "./component/home/fotter";
import SchoolMap from "./component/home/school-map";
export default function Home() {
  const homeRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Array of background image classes
  const imageClasses = ["image1", "image2", "image3", "image4"];

  const switchImage = () => {
    if (homeRef.current) {
      // Remove the current image class
      homeRef.current.classList.remove(imageClasses[currentImageIndex]);

      // Calculate the next image index
      const nextIndex = (currentImageIndex + 1) % imageClasses.length;
      setCurrentImageIndex(nextIndex);

      // Add the new image class
      homeRef.current.classList.add(imageClasses[nextIndex]);
    }
  };
  return (
    <div className="bg-white ">
      <nav className=" bg-gray-900 py-2 w-full p-5 " id="home">
        <div className=" flex justify-between md:justify-around items-center">
          <Link className="" href="/">
            <Image
              src="/assets/logo.jpg"
              alt="Logo"
              width={60}
              height={60}
              className="rounded-full"
            />
            <h1>SARDAR PATEL HR SEC SCHOOL</h1>
          </Link>

          <span className="">
            <div className="flex justify-center gap-[10px] md:gap-5">
              <Link href="https://www.facebook.com/profile.php?id=100010652954238">
                <FaFacebook
                  className="text-[25px] md:text-[32px] "
                  color="blue"
                />
              </Link>
              <Link href="https://www.instagram.com/sardar_patel_hr_sec_school/">
                {" "}
                <FaInstagram
                  className="text-[25px] md:text-[32px] "
                  color="red"
                />
              </Link>

              <Link href="https://www.youtube.com/@sardarpatelhr.sec.school9963">
                {" "}
                <FaYoutube
                  className="text-[25px] md:text-[32px] "
                  color="red"
                />
              </Link>
            </div>
          </span>
        </div>
      </nav>

      <div
        className={`mt-0 background ${imageClasses[currentImageIndex]}`}
        ref={homeRef}
        onClick={switchImage}
      >
        <div className="row color_banner ">
          <div className="col" id="banner_content">
            <div className="">
              <h3 className="text-white">We are the</h3>
              <h2 className="text-white">Game Changers</h2>
              <p>A space where we make it happen.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" mt-4 p-10" id="news&events">
        <div className="row ">
          <h1 id="heading">News & Events</h1>

          <div className="md:flex  md:items-center text-start gap-20 ">
            <Image
              src="/assets/news.png"
              alt="News"
              className="mt-4 img-fluid img-thumbnail img-responsive flex-1"
              width={500}
              height={300}
            />
            <div className="col-md-6 flex-1 space-y-10 ">
              <div>
                <p className="mt-4" id="paragraph">
                  Hon Julie Bishop, Foreign Minister of Australia, visits Shiv
                  Nadar School.
                </p>
                <p className="text-black">
                  Posted on July 20, 2017 by Shiv Nadar School
                </p>
              </div>
              <p className="small_paragraph ">
                Hon Julie Bishop, Minister for Foreign Affairs, Government of
                Australia visited Shiv Nadar School, Gurgaon, yesterday, along
                with Her Excellency Harinder Sindhu, Australian Ambassador to
                India. It was a day of invigorating exchange of thoughts and
                ideas.
              </p>
            </div>
          </div>
        </div>
      </div> */}

      <div className="mt-4 p-10" style={{ backgroundColor: "#F2F4F5" }}>
        <div className="row">
          <h1 id="heading">Our Shining Star</h1>

          <div className="flex flex-col justify-center items-center">
            <div className=" flex-1 ">
              <Image
                src="/assets/shining.jpeg"
                id="zoom"
                alt="Star"
                width={500}
                height={400}
                className="rounded-lg "
              />
            </div>
            <div className="flex-1">
              <p className="">
                <span className="text-black text-[20px] ">
                Gaming has always been our passion, and our school has supported me at every step to pursue it.
                </span>
              </p>
              <p className="text-black text-right mt-4">
                — Student of class 9
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-10 bg-gray-50" id="about" >
        <div className="row">
          <h1 id="heading">About School</h1>
        </div>
        <About />
      </div>

      <div>{<SchoolMap />}</div>

      <div>
        <Fotter />
      </div>
    </div>
  );
}
