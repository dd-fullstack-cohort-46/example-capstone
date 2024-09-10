import {Alert} from "flowbite-react";

type Props = {
	status: undefined | {
		type: string,
		message: string
	}
}


export function DisplayStatus(props: Props) {
	const {status} = props

	const color = status?.type === 'success' ? 'bg-green-400' : 'bg-red-400'
	if(status) {
		return(
			<output className={`flex border-2 justify-center items-center ${color}`} >
				{status.message}
			</output>

		)
	}
}