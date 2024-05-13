"use client";
import React from "react";
import {PageProps} from "@/utils/interfaces/NextComponent";
import Image from "next/image";
import {AuthenticationFormDisplay} from "@/app/(index)/AuthenticationFormDisplay";

export default function Home(props: PageProps) {
	return (
		<>
			<section className="flex flex-auto gap-5 h-dvh items-center grow">
				<div className="grid grid-rows-1 border border-black dark:border-amber-50 place-items-center self-center sm:place-items-stretch px-2 mx-auto  xl:gap-0 py-16  grid-cols-1 md:grid-cols-12">
					<div className=" h-fit hidden md:block me-4 mx-4 col-span-1 md:col-span-4">
						<Image src="/login-hero.png" width={259} height={387} priority={true} alt="mockup"/>
					</div>
					<div className=" h-fit p-5 sm:p-10 md:p-2 md:ms-4  md:w-2/3 w-100 col-span-1 mr-auto md:col-span-8">
						<AuthenticationFormDisplay />

					</div>

				</div>
			</section>

		</>

	)
}