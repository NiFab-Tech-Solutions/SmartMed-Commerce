
'use client'
import Image from "next/image";
import SignInForm from "@/components/auth/signinForm";
import Link from "next/link";
import { useRouter } from "next/navigation";
const SignupEmail = () => {
  const router = useRouter();

  const handleNavigateToSignIn = (() => {
    router.push(`sign-up`)
  })

  return (
    <div className="w-full flex max-h-screen justify-between m-auto items-center h-screen">
      <div className=" flex w-full 2xl:space-x-28 xl:space-x-28 lg:space-x-28 md:space-x-8 2xl:p-12 lg:p-12 md:p-8 p-6 h-[95%]">
        <div className="md:w-1/2 w-full justify-center 2xl:px-12 xl:px-12 lg:px-12 md:px-8 px-2 m-auto flex flex-col">
          <Link className="logo font-extrabold text-blue-600" href={"/"}>
           RWAMED
          </Link>
          <div className="flex flex-col space-y-1">
            <h1 className="mt-6 text-[#030229b4] text-xl">Welcome Back!</h1>
            <p className="text-[#030229c3] text-[12px] text-sm">
              So glad to have you here! Enter your credentials below to <br />{" "}
              create your account.
            </p>
            <SignInForm />
            <p className="float-right text-[#030229c3]  flex  mr-2 justify-end text-[12px] pt-4">
              {"Don't have an account"}{" "}
              <button onClick={handleNavigateToSignIn}>
                <span className="text-[#030229c3] ml-2 font-bold">SignUp</span>
              </button>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 md:flex hidden bg-blue-600 h-full p-12 rounded-lg">
          <Image height={100} width={900} src="/images/login.jpg" className=" rounded-lg" alt="Picture " />
        </div>
      </div>
    </div>
  );
};

export default SignupEmail;
