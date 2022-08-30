import React, { useState } from 'react';
import { IProduct } from '../models';

interface ProductProps {
	product: IProduct;
}

const Product = ({ product }: ProductProps) => {
	const [details, setDetails] = useState(false)

	const showDetails = () => {
		setDetails(!details)
		console.log(details);
		
	}

	const btnBgClass = details ? 'bg-blue-400' : 'bg-yellow-300'
	const btnClasses = ['px-4 py-2 border rounded', btnBgClass]


	return (
		<div className='border rounded  px-4 py-2 flex flex-col items-center mb-2 font-bold'>
			<img src={product.image} alt={product.title} className='w-1/6' />
			{product.title}
			<span className='font-extrabold'>{product.price}</span>
			<button className={btnClasses.join(' ')}
			onClick={showDetails}>{details ? "Hide" : "Show"} Details</button>
			{details &&
			<p className="font-thin">{product.description}</p>
		}
		</div>
	);
};

export default Product;
