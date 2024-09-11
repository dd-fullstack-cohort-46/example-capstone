'use server'

import { unstable_noStore as noStore } from 'next/cache'

noStore()

import {Thread, ThreadSchema} from "@/utils/models/thread/thread.validator";

export async function fetchAllThreads() : Promise<Thread[]> {
	const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/thread`, {
		method: "get",
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if(!response.ok) {
			throw new Error('Network response was not ok')
		}else {
			return response.json()
		}
	})
	return ThreadSchema.array().parse(data)
}


export async function fetchThreadsByProfileName(profileName: string) {
	const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/thread/profileName/${profileName}`, {
		method: "get",
		headers: {
			'Content-Type': 'application/json'
		}
	}).then((response) => {
		if(!response.ok) {
			throw new Error('Network response was not ok')
		}else {
			return response.json()
		}
	})
	return ThreadSchema.array().parse(data)


}