"use client";
import Image from "next/image";
import "../style/home-style.css";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Fotter from "./component/home/fotter";
import SchoolMap from "./component/home/school-map"
export default function Home() {
  return (
    <div className="bg-white ">
      <nav className=" bg-gray-900 py-2 w-full p-5">
        <div className=" flex justify-between md:justify-around items-center">
          <Link className="" href="/">
            <Image src="/assets/logo.png" alt="Logo" width={50} height={50} />
            <h1>Sardar Patel Convent School</h1>
          </Link>

          <span className="">
            <div className="flex justify-center gap-[10px] md:gap-5">
              <Link href="#">
                <FaFacebook className="text-[25px] md:text-[32px] " />
              </Link>
              <Link href="#">
                {" "}
                <FaInstagram
                  className="text-[25px] md:text-[32px] "
                  color="#e4405f"
                />
              </Link>
              <Link href="#">
                {" "}
                <FaLinkedin
                  className="text-[25px] md:text-[32px] "
                  color="#0077b5"
                />
              </Link>
              <Link href="#">
                {" "}
                <FaTwitter
                  className="text-[25px] md:text-[32px] "
                  color="#00acee"
                />
              </Link>
            </div>
          </span>
        </div>
      </nav>

      <div className="mt-0 background">
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

      <div className=" mt-4 p-10">
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
      </div>

      <div className="mt-4 p-10" style={{ backgroundColor: "#F2F4F5" }}>
        <div className="row">
          <h1 id="heading">Our Shining Star</h1>

          <div className="flex flex-col justify-center items-center">
            <div className=" flex-1">
              <Image
                src="/assets/star.png"
                id="zoom"
                alt="Star"
                width={400}
                height={300}
              />
            </div>
            <div className="flex-1">
              <p className="">
                <span className="text-black text-[20px] ">
                  Dancing has always been my passion, and my school has helped
                  me at every step to pursue it.
                </span>
              </p>
              <p className="text-black text-right mt-4">
                — Ria Bajaj, Student of class 9
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>{ <SchoolMap />}</div>

      <div>
        <Fotter />
      </div>
    </div>
  );
}
