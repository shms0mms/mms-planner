import { FC } from "react"
import { useForm } from "react-mms-form"
const RegisterForm: FC = ({}) => {
	const { handleSubmit, register, fieldsValues } = useForm({})
	console.log(fieldsValues)
	const onSubmit = data => {
		console.log(data)
	}
	return (
		<>
			<form onSubmit={e => handleSubmit(e, onSubmit)}>
				<input type="text" {...register("name")} />
				<button type="submit"></button>
			</form>
		</>
	)
}

export default RegisterForm
