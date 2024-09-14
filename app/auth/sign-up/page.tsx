import Image from "next/image";
import SignUpForm from "@/components/auth/signupForm";
import Link from "next/link";
const page = () => {
  return (
    <div className="w-full flex max-h-screen justify-between m-auto items-center h-screen">
      <div className=" flex w-full 2xl:space-x-28 xl:space-x-28 lg:space-x-28 md:space-x-12 2xl:p-8 lg:p-8 md:p-6 p-3 h-[97%]">
      <div className="md:w-1/2 w-full justify-center 2xl:px-12 xl:px-12 lg:px-12 md:px-4 px-2 m-auto flex flex-col">
          <div className="">
          <Link className="logo text-blue-600 font-extrabold" href={"/"}>
           RWAMED
          </Link>
            <div className="flexflex-col mt-2">
              <h1 className="text-[#030229b4] text-xl">Welcome!</h1>
              <p className="text-[#030229c3] text-[12px] text-sm py-1">
                So glad to have you here! Enter your credentials below to create your account.
              </p>
            </div>
            <SignUpForm />
            <p className=" pt-3 md:float-right text-[#030229c3] mr-2 md:pt-2 text-[12px] xl:pt-0 ">
              Already have an account{" "}
              <Link href="signin">
                <span className="text-[#030229c3] font-bold m">SignIn</span>
              </Link>{" "}
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

export default page;
