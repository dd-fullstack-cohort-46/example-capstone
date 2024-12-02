import {EditProfileForm} from "@/app/(index)/profile/[profileName]/EditProfileForm";
import {ThreadCard} from "@/components/ThreadCard";
import {PageProps} from "@/utils/interfaces/NextComponent";
import {fetchThreadsByProfileName} from "@/utils/models/thread/thread.model";
import {fetchProfileByProfileName} from "@/utils/models/profile/profile.model";
import {getSession} from "@/utils/session.utils";


type Slug= {profileName: string}
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function (props: PageProps<Slug>) {

	const slug = props.params.profileName

	const profile = await fetchProfileByProfileName(slug)

	if(profile === null) {
		return <>Profile Does not exist</>
	}
	const loggedInUser = await getSession()
	const isOwner = loggedInUser?.profile.profileId === profile.profileId

	const threads = await fetchThreadsByProfileName(slug)

	console.log(threads)


	return (
		<>
			<main className="container lg:w-2/3 grid mx-auto">
				<div className="flex flex-col justify-center items-center">
					<h1 className="text-3xl p-4 font-bold">{profile.profileName}'s page</h1>
					{isOwner ? <EditProfileForm /> : <></>}
				</div>
				{threads.map(thread => <ThreadCard thread={thread} key={thread.threadId} />)}


			</main>

		</>
	)
}
