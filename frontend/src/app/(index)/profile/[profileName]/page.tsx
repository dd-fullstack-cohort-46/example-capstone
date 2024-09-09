import {EditProfileForm} from "@/app/(index)/profile/[profileName]/EditProfileForm";
import {ThreadCard} from "@/components/ThreadCard";

export default async function () {
	return (
		<>
			<main className="container lg:w-2/3 grid mx-auto">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-3xl p-4 font-bold">Logged In Name</h1>
					<EditProfileForm />
				</div>
				<ThreadCard />


			</main>

		</>
	)
}
