import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import { ExclamationCircleIcon, XIcon } from "@heroicons/react/solid";
import { signInWithEmailAndPassword } from "firebase/auth";
import AccountFooter from "./AccountFooter";
import BtnSpinner from "./BtnSpinner";
import { useDispatch } from "react-redux";
import { setHasAnAccount } from "../store/store";

const Signin = () => {
  const router = useRouter();

  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmitHandler = async (formData: any) => {
    setLoading(true);

    await signInWithEmailAndPassword(auth, formData.email, formData.password)
      .then(() => {
        setLoading(false);

        router.push("/menu");
      })
      .catch((err) => {
        setLoading(false);

        alert(err.message);
      });
  };

  return (
    <div className="md:h-screen md:overflow-hidden">
      <Head>
        <title>Sign In</title>

        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="md:flex">
        <div className="bg-white shadow-lg py-5 flex flex-col md:h-screen md:w-[45%]">
          <div className="relative w-12 h-12 ml-8 mb-4 cursor-pointer">
            <Image
              loading="lazy"
              src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
              layout="fill"
              objectFit="contain"
            />
          </div>

          <div className="flex-grow flex items-center px-8 md:px-3 lg:px-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-black font-bold">
              Sign in or create an account 🌟
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center py-16 md:w-[55%] h-screen overflow-y-scroll scrollbar-hide">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="w-full md:max-w-[400px] mb-20 flex flex-col gap-8 px-8"
          >
            <div>
              <div className="flex border-b border-gray-400 pb-2">
                <input
                  className="flex-grow text-lg outline-none w-full text-gray-500"
                  {...register("email", { required: true })}
                  type="text"
                  placeholder="Email Address"
                />

                {errors.email && (
                  <ExclamationCircleIcon className="ml-2 h-6 text-red-500" />
                )}
              </div>

              {errors.email && (
                <div className="mt-2 flex items-center space-x-2">
                  <XIcon className="h-6 text-red-500" />

                  <p className="text-sm">Enter a valid email address</p>
                </div>
              )}
            </div>

            <div>
              <div className="border-b border-gray-400 pb-2 flex">
                <input
                  className="outline-none text-lg flex-grow text-gray-500"
                  {...register("password", { required: true })}
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                />

                {showPassword ? (
                  <EyeIcon
                    className="h-6 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <EyeOffIcon
                    className="h-6 cursor-pointer text-gray-500"
                    onClick={() => setShowPassword(true)}
                  />
                )}

                {errors.password && (
                  <ExclamationCircleIcon className="ml-2 h-6 text-red-500" />
                )}
              </div>

              {errors.password && (
                <div className="mt-2 flex items-center space-x-2">
                  <XIcon className="h-6 text-red-500" />

                  <p className="text-sm">Enter a valid password</p>
                </div>
              )}
            </div>

            <button type="submit" className="submitBtn">
              {loading ? <BtnSpinner /> : <p>Sign In</p>}
            </button>
          </form>

          <div className="bg-[#2d2926] py-4 text-white tracking-wider font-semibold w-full flex items-center justify-center">
            <h2 className="text-sm">JOIN STARBUCKS® REWARDS</h2>
          </div>

          <div className="w-full bg-[#edebe9] py-5 flex flex-col space-y-4 items-center">
            <button
              className="btnBorder"
              onClick={() => dispatch(setHasAnAccount(false))}
            >
              Join now
            </button>

            <h2 className="tracking-wider leading-relaxed text-xl max-w-[300px]">
              Create an account and bring on the Rewards!
            </h2>

            <p className="text max-w-[300px] text-sm">
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </p>
          </div>

          <div className="pt-6 w-full flex justify-start px-10">
            <AccountFooter />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
