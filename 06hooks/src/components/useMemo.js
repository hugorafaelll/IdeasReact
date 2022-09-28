import { useState } from "react";
import {produts as produtsData} from './buy.json'
import Products from "./product";

function UseMemo(){

    const [products, setProducts] = useState(productsData);
    const [newPorducts, setNewProducts ] = useState ('');

    function handleSubmit(event){
        event.preventDefalt();

        setProducts ([...products, {name: newProduct}]);
    }

        return (
            <div>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='text'
                        value={newProduct}
                        onChange={(event) => setNewProducts(event.target.value)}
                        />
                </form>
                
                <ul>
                    {products.map((product) => (
                        <product key={product.name} name={product.name} />
                    ))}
                </ul>
            </div>
        )

}