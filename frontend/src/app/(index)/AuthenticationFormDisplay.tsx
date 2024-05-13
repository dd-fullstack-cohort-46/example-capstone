'use client'
import React, {useState} from "react";
import {SignUpForm} from "@/app/(index)/SignUpForm";
import {SignInForm} from "@/app/(index)/SignInForm";

export function AuthenticationFormDisplay() {
	const [isCheckboxChecked, setIsCheckboxChecked] = useState(true);

	function handleCheckboxChange() {
		setIsCheckboxChecked(!isCheckboxChecked);
	}

	function Checkbox() {
		return (
			<label className=" py-4 inline-flex items-center cursor-pointer">
				<input type="checkbox" value="" className="sr-only peer" checked={isCheckboxChecked}/>
				<div
					onClick={handleCheckboxChange}
					className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
				<span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{isCheckboxChecked ?"Sign Up" : "Sign In" }</span>
			</label>
		)

	}

	if (!isCheckboxChecked) {
		return (
			<>
			<SignUpForm />
			<Checkbox />
			</>
		)
	} else {
		return (
			<>
				<SignInForm />
				<Checkbox />
			</>
		)
	}



}