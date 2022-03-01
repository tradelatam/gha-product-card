import React  from 'react';
import { ProductImage } from "../../src/components/ProductImage";
import renderer  from 'react-test-renderer';
import { ProductCard } from '../../src/components/ProductCard';
import { product2 } from './data/products';

describe('Pruebas en ProductImage', () => {  

    test('debe de mostrar el componente correctamente con la imagen personalizada', () => {  

        const wrapper = renderer.create(
            <ProductImage img="https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg" className="custon-class" />
        )
        //console.log( wrapper.toJSON() );
        expect( wrapper.toJSON() ).toMatchSnapshot();
    });

    test('debe de mostrar el componente con la imagen que viene en el producto', () => {  

        const wrapper = renderer.create(
            <ProductCard product={ product2 }>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

})