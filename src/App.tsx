import { useContext} from 'react';
import CreateProduct from './components/CreateProduct';
import Error from './components/Error';
import Loader from './components/Loader';
import Modal from './components/Modal';
import Product from './components/Product';
import { ModalContext } from './context/ModalContext';
import { useProducts } from './hooks/products';
import { IProduct } from './models';

function App() {
	const { products, error, loading, addProduct } = useProducts();
const {modal, open, close} = useContext(ModalContext)
	const createHandler = (product: IProduct) => {
		close()
		addProduct(product)
		
	}

	return (
		<div className='container mx-auto max-w-2xl pt-5'>
			{loading && <Loader/>}
			{error && <Error error={error}/>}
			{products.map(prod => (
				<Product product={prod} key={prod.id} />
			))}
			{modal && <Modal title='Create new product' onClose={() => close()}>
				<CreateProduct onCreate={createHandler} />
			</Modal>}

			<button className="fixed bottom-5 right-5 px-4 py-2 rounded-full bg-orange-400 text-white text-2xl text-bold"
			onClick={() => open()}>+</button>
		</div>
	);
}

export default App;
