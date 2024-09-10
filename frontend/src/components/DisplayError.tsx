import {FormikProps, FormikValues} from "formik";

type Props = {
	errors: FormikProps<FormikValues>['errors']
	touched: FormikProps<FormikValues>['touched']
	field: string

}



export function DisplayError(props: Props) {

	const {errors, touched, field} = props
	if (errors[field] && touched[field]) {
		return (
			< output className={'flex border-2 rounded-md justify-center items-center bg-red-400'} color="failure">
				{errors[field] as string}
			</output>
		)
	}
}