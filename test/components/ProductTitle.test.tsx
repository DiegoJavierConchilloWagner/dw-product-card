import React from 'react';
import renderer from 'react-test-renderer'
import { ProductCard, ProductTitle } from '../../src/components/';
import {  } from '../../src/components/';
import { product1 } from '../data/products';

describe('<ProductTitle />', () => {
    test('Debe mostrar correctamente el titulo personalizado', () => {
        
        const wrapper = renderer.create(
            <ProductTitle title="Product" />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe de mostrar el componente con el nombre del producto', () => {
        const wrapper = renderer.create(
            <ProductCard product={product1}>
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});