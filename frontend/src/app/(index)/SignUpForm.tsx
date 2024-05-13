
import {Button, Checkbox, Label, TextInput} from "flowbite-react";
import React from "react";

export function SignUpForm() {
	return (
		<form className="flex min-h-auto gap-4 min-w-full flex-col grow">
			<h1 className="text-3xl font-bold">Welcome to Rethreads!</h1>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="email1" value="Your email"/>
				</div>
				<TextInput id="email1" type="email" placeholder="name@flowbite.com" required/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="profileName" value="Your name"/>
				</div>
				<TextInput id="profileName" type="text" placeholder="Geekhart" required/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="profilePassword" value="Your password"/>
				</div>
				<TextInput id="profilePassword" type="password" required/>
			</div>
			<div>
				<div className="mb-2 block">
					<Label htmlFor="profilePasswordConfirm" value="Your password"/>
				</div>
				<TextInput id="profilePasswordConfirm" type="password" required/>
			</div>
			<Button type="submit">Submit</Button>
		</form>
	)
}