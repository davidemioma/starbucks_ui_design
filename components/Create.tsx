import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { auth } from "../firebase";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";
import { ExclamationCircleIcon, XIcon } from "@heroicons/react/solid";
import { EyeIcon, EyeOffIcon } from "@heroicons/react/outline";
import AccountFooter from "./AccountFooter";
import BtnSpinner from "./BtnSpinner";
import { useDispatch } from "react-redux";
import { setHasAnAccount } from "../store/store";

const Create = () => {
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

    await createUserWithEmailAndPassword(
      auth,
      formData.email,
      formData.password
    )
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
    <div>
      <Head>
        <title>Create Account</title>

        <link rel="icon" href="/favicon.png" />
      </Head>

      <header className="py-6 px-8 border-b border-gray-300 shadow-md">
        <div className="relative w-12 h-12 cursor-pointer">
          <Image
            loading="lazy"
            src="https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/1200px-Starbucks_Corporation_Logo_2011.svg.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </header>

      <main className="flex flex-col items-center py-10">
        <h1 className="text-3xl tracking-wide font-extrabold">
          Create an account
        </h1>

        <p className="pt-10 pb-6 font-bold tracking-wider text-sm text-gray-500">
          STARBUCKS® REWARDS
        </p>

        <p className="tracking-wide mb-6 text-sm text-gray-500 px-3 text-center max-w-[500px]">
          Join Starbucks Rewards to earn Stars for free food and drinks, any way
          you pay. Get access to mobile ordering, a birthday Reward, and{" "}
          <span className="underline cursor-pointer hover:no-underline">
            more
          </span>
          .
        </p>

        <div className="bg-white shadow-md w-full max-w-[500px] p-10 mb-5 border rounded-xl">
          <form
            onSubmit={handleSubmit(onSubmitHandler)}
            className="flex flex-col"
          >
            <div className="flex flex-col space-y-5 mb-10">
              <h2 className="text-xl font-bold tracking-wide">
                Personal Information
              </h2>

              <div>
                <div className="flex border-b border-gray-400 pb-2">
                  <input
                    className="flex-grow outline-none w-full text-gray-500"
                    {...register("firstname", { required: true })}
                    type="text"
                    placeholder="First Name"
                  />

                  {errors.firstname && (
                    <ExclamationCircleIcon className="ml-2 h-6 text-red-500" />
                  )}
                </div>

                {errors.firstname && (
                  <div className="mt-2 flex items-center space-x-2">
                    <XIcon className="h-6 text-red-500" />

                    <p className="text-sm">Enter a valid first name</p>
                  </div>
                )}
              </div>

              <div>
                <div className="flex border-b border-gray-400 pb-2">
                  <input
                    className="flex-grow outline-none w-full text-gray-500"
                    {...register("lastname", { required: true })}
                    type="text"
                    placeholder="Last Name"
                  />

                  {errors.lastname && (
                    <ExclamationCircleIcon className="ml-2 h-6 text-red-500" />
                  )}
                </div>

                {errors.lastname && (
                  <div className="mt-2 flex items-center space-x-2">
                    <XIcon className="h-6 text-red-500" />

                    <p className="text-sm">Enter a valid last name</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-5">
              <h2 className="text-xl font-bold tracking-wide">
                Account Security
              </h2>

              <div>
                <div className="flex border-b border-gray-400 pb-2">
                  <input
                    className="flex-grow outline-none w-full text-gray-500"
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
                    className="outline-none flex-grow text-gray-500"
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
            </div>

            <p className="text-gray-500 my-5 tracking-wider font-bold text-sm">
              COLLECT MORE STARS & EARN REWARDS
            </p>

            <p className="tracking-wider max-w-[400px]">
              Email is a great way to know about offers and what’s new from
              Starbucks.
            </p>

            <button type="submit" className="submitBtn my-10">
              {loading ? <BtnSpinner /> : <p>Create Account</p>}
            </button>

            <div className="flex flex-col space-y-3 items-start">
              <p className="tracking-wider">Already have an account?</p>

              <button
                className="btnBorder"
                onClick={() => dispatch(setHasAnAccount(true))}
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className="w-full flex justify-center border-t border-gray-300 p-10">
        <AccountFooter />
      </footer>
    </div>
  );
};

export default Create;
