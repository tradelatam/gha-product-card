//import * as React from 'react';

import React  from 'react';
import renderer  from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { ProductTitle }  from '../../src/components/ProductTitle';
import { product1 } from './data/products';


describe('Pruebas en ProductTitle', () => {  

    test('debe de mostrar el componente correctamente con el titulo personalizado', () => {  
        
        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className="custom-class" />
        )
        //console.log( wrapper.toJSON() );
        expect( wrapper.toJSON() ).toMatchSnapshot();
        
    });

    test('debe de mostrar el componente con el nombre del producto', () => {  

        const wrapper = renderer.create(
            <ProductCard product={ product1 }>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });
})



// describe('it', () => {
//   it('renders without crashing', () => {
//     const div = document.createElement('div');
//     //ReactDOM.render(<Thing />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });
// });

