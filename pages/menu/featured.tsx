import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Info from "../../components/Info";
import Footer from "../../components/Footer";

const Featured = () => {
  return (
    <div>
      <Head>
        <title>Features</title>

        <link rel="icon" href="/favicon.png" />
      </Head>

      <Header />

      <main className="flex flex-col items-center pb-12">
        <h1 className="featureHeader">SELF-CARE IS COOL</h1>

        <div className="featuredContainer">
          <Info
            title="Honey Almondmilk Flat White"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67893.png"
            info="Our signature espresso meets creamy sweetness."
            btnText="Order"
            color="#1e3932"
            background="#f0ebe0"
          />

          <Info
            title="NEW Honey Almondmilk Cold Brew"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67894.png"
            info="With a hint of honey and an almondmilk finish. "
            btnText="Order"
            color="#1e3932"
            background="#f0ebe0"
          />
        </div>

        <h1 className="featureHeader">CREAMY, DREAMY COFFEE</h1>

        <div className="featuredContainer">
          <Info
            title="NEW Pistachio Latte"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67901.png"
            info="Espresso, steamed milk and nutty pistachio sauce."
            btnText="Order"
            color="white"
          />
          <Info
            title="NEW Pistachio Frappuccino® blended beverage"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67900.png"
            info="Finished with whipped cream and a brown-buttery topping. "
            btnText="Order"
            color="white"
          />

          <Info
            title="Nitro Cold Brew"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67905.png"
            info="Velvety-smooth with a lush, cascading texture. "
            btnText="Order"
            color="white"
          />

          <Info
            title="Nitro Cold Brew with Sweet Cream"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67906.png"
            info="Topped with house-made sweet cream."
            btnText="Order"
            color="white"
          />
        </div>

        <h1 className="featureHeader">GOOD FOOD, GOOD MOOD</h1>

        <div className="featuredContainer mb-10">
          <Info
            title="NEW Kale & Portabella Mushroom Sous Vide Egg Bites"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67911.png"
            info="With cage-free eggs and Monterey Jack cheese."
            btnText="Order"
            color="#1e3932"
            background="#d4e9e4"
          />
          <Info
            title="Impossible™ Breakfast Sandwich*"
            image="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67912.png"
            info="Featuring savory Impossible™ Sausage Made from Plants."
            btnText="Order"
            color="#1e3932"
            background="#d4e9e4"
          />
        </div>

        <div className="bg-[#1e3932] text-white w-screen p-5 flex flex-col md:grid md:grid-cols-2 md:justify-items-center items-center gap-y-8">
          <img
            className="w-[300px] sm:w-[400px] xl:w-full"
            loading="lazy"
            src="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-67916.png"
            alt=""
          />

          <div className="w-full flex flex-col items-center space-y-4 max-w-[270px]">
            <h1 className="text-2xl md:text-3xl text-center font-bold tracking-wide">
              MEATLESS MONDAYS AT STARBUCKS
            </h1>

            <p className="text-lg tracking-wider text-center">
              Enjoy $2 off any vegetarian breakfast sandwich or wrap every
              Monday in January.**
            </p>

            <button className="btnBorder border-white">Order now</button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Featured;
