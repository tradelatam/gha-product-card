import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ProductCard, ProductTitle, ProductImage, ProductButtons } from '../.';

const product = {
    id: '1',
    title: 'Coffee Mug -Card!',  
    //img: './Coffee-mug.png'
}

const App = () => {
  return (
    <>
        <ProductCard
            product={ product }            
            initialValues={{
                count:4,
                maxCount:12
            }}
        >
            {
                ( args ) => (
                    <>
                        <ProductImage />
                        <ProductTitle />
                        <ProductButtons />
                    </>
                ) 
            }
        </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
