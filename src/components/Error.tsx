import React from 'react'

interface ErrorMessageProps {
	error: string
}

const Error = ({error}: ErrorMessageProps) => {
	return (
		<p className='text-center font-semibold text-red-700'>{error}</p>
	)
}

export default Error