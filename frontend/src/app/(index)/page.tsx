"use client";
import React from "react";
import {PageProps} from "@/utils/interfaces/NextComponent";
import Image from "next/image";
import {Button, Checkbox, Label, TextInput} from "flowbite-react";

export default function Home(props: PageProps) {
	return (
		<>
			<section className="flex flex-auto gap-5 h-dvh items-center grow">
				<div className="grid border border-black dark:border-amber-50 place-items-center self-center sm:place-items-stretch px-2 mx-auto  xl:gap-0 py-16  grid-cols-1 md:grid-cols-12">
					<div className="hidden md:block me-4 mx-4 col-span-1 md:col-span-4">
						<Image src="/login-hero.png" width={259} height={387} priority={true} alt="mockup"/>
					</div>
					<div className=" h-full p-5 sm:p-10 md:p-2 md:ms-4  md:w-2/3 w-100 col-span-1 mr-auto md:col-span-8">
						<form className="flex gap-4 min-w-full flex-col grow">
							<h1 className="text-3xl font-bold">Welcome to Rethreads </h1>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="email1" value="Your email"/>
								</div>
								<TextInput id="email1" type="email" placeholder="name@flowbite.com" required/>
							</div>
							<div>
								<div className="mb-2 block">
									<Label htmlFor="password1" value="Your password"/>
								</div>
								<TextInput id="password1" type="password" required/>
							</div>
							<div className="flex items-center gap-2">
								<Checkbox id="remember"/>
								<Label htmlFor="remember">Remember me</Label>
							</div>
							<Button type="submit">Submit</Button>
						</form>

					</div>

				</div>
			</section>

		</>

	)
}