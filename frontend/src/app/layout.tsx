import type { Metadata } from 'next'
import {Flowbite, DarkThemeToggle, ThemeModeScript} from 'flowbite-react';
import './globals.css'
import React from "react";


export const metadata: Metadata = {
	title: 'Title Goes Here',
	description: 'description goes here',
}

type RootLayoutProps = {
	children: React.ReactNode
}

export default function RootLayout(props : RootLayoutProps) {
	const { children } = props
	return (
		<html className={"dark"} suppressHydrationWarning>
		<head>
			<ThemeModeScript/>
		</head>
		<body className={"bg-gray-50 text-stone-800 dark:bg-gray-800 dark:text-slate-200"} >

		<Flowbite>{children}</Flowbite>
		</body>
		</html>
	)
}