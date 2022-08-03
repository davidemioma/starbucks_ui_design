import React from "react";
import Head from "next/head";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Headings from "../components/Headings";
import Info from "../components/Info";

const Home = () => {
  return (
    <div className="relative">
      <Head>
        <title>Home</title>

        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <SideBar />

      <main>
        <section className="bg-[#d4e9e2] py-5 px-8 mb-5 flex justify-center">
          <p className="text-center max-w-[600px] text-lg tracking-wider leading-relaxed">
            We’re working hard to put the health and well-being of our partners
            and customers first in all that we do.{" "}
            <span className="underline hover:no-underline cursor-pointer">
              Learn more
            </span>
          </p>
        </section>

        <section className="bg-[#d4e9e2] py-5 px-8 flex flex-col items-center gap-7">
          <h2 className="text-2xl text-center font-medium text-[#1e3932]">
            Investing in our communities
          </h2>

          <p className="text">
            The Starbucks Foundation awarded grants to over 400 nonprofits
            serving communities of color. Recipients were nominated by Starbucks
            partners (employees).
          </p>

          <button className="btnBorder">Learn More</button>

          <img
            className="images"
            loading="lazy"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68026.jpg"
            alt=""
          />
        </section>

        <Headings text="Today is yours" />

        <section className="bg-[#f0ebe0] mb-5 leading-loose py-5 px-8 flex flex-col items-center gap-7">
          <h1 className="heading">Nicely nondiary</h1>

          <p className="text">
            Say yes to sips of delight with our Honey Almondmilk Flat White and
            new Honey Almondmilk Cold Brew.
          </p>

          <button className="greenBtn">Explore The Honey Drinks</button>

          <img
            className="images"
            loading="lazy"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-68069.png"
            alt=""
          />
        </section>

        <section className="bg-[#f0ebe0] leading-loose py-5 px-8 flex flex-col items-center gap-7">
          <img
            className="images"
            loading="lazy"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67826.png"
            alt=""
          />

          <h1 className="heading md:mr-[200px]">Pistachiooooooo</h1>

          <p className="text">
            Embrace creamy coffee bliss with our new Pistachio Latte and
            Pistachio Frappuccino® blended beverage.
          </p>

          <button className="greenBtn">Try The new Pistachio Drinks</button>
        </section>

        <Headings text="More to discover" />

        <section className="flex flex-col gap-5 md:flex-row mb-16">
          <Info
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67828.jpg"
            title="Order and pick up. Easy as that."
            info="Just open the app, order your favorites, and enjoy contactless pay. From there, choose whichever pickup method is best for you."
            btnText="See pickup option"
          />

          <Info
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67829.jpg"
            title="Coffee delivered. Day made."
            info="Make everything a little brighter. Enjoy a $0 Delivery Fee* on your first Uber Eats order over $15 through 1/31."
            btnText="Order now"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
