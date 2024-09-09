"use client"

import {useSidebarContext} from "@/utils/context/sidebar.context";

import {twMerge} from "tailwind-merge";
import React from "react";
import {LayoutProps} from "@/utils/interfaces/NextComponent";
import {TopNavbar} from "@/components/navigation/Navbar";
import {DashboardSidebar} from "@/components/navigation/Sidebar";




export function LayoutContent({children}: LayoutProps) {
	const {isCollapsed} = useSidebarContext()

	return (
		<>
			<TopNavbar />
			<div className="mt-16 flex items-start">
				<DashboardSidebar />
				<div
					id="main-content"
					className={twMerge(
						"relative h-full w-full overflow-y-auto bg-gray-50 dark:bg-gray-800",
						isCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64",
					)}
				>
					{children}
				</div>
			</div>
		</>
	)
}
