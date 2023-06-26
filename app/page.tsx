"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

export default function Home() {
  const router = useRouter();

  const submitHandler = (event: MouseEvent) => {
    event.preventDefault();
    router.push("/dashboard");
  };

  return (
    <main className="overflow-hidden">
      <div className="login center-content">
        <div className="w-[400px] bg-white px-[40px] py-[50px]">
          <h3 className="text-center text-primary font-custom-bold text-[22px]">
            Shop
          </h3>
          <h5 className="text-center font-custom-medium my-4">
            Login ke akun anda{" "}
          </h5>
          <form className="">
            <div className="flex flex-col">
              <label>Email</label>
              <input
                className="border-[1px] px-2 h-10 rounded-[5px] focus:login__form-focus"
                type="email"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label>Password</label>
              <div className="relative w-[100%]">
                <input
                  className="border-[1px] px-2 h-10 rounded-[5px] focus:login__form-focus w-[100%]"
                  type="password"
                />
                <div className="text-right font-custom-medium text-primary text-[14px]">
                  Lupa password ?
                </div>
              </div>
            </div>
            <button
              type="button"
              onClick={submitHandler}
              className="h-10 rounded-[5px] w-full bg-primary my-4 text-white font-custom-bold"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
