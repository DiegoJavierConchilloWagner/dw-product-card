import React from 'react';
import renderer from 'react-test-renderer'
import { ProductImage, ProductCard } from '../../src/components';
import {  } from '../../src/components';
import { product2 } from '../data/products';

describe('<ProductImage />', () => {
    test('Debe mostrar correctamente la imagen personalizada', () => {
        
        const wrapper = renderer.create(
            <ProductImage img={'https://img.example.com'} />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe mostrar correctamente la imagen del producto', () => {
        const wrapper = renderer.create(
            <ProductImage img={product2.img} />
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });

    test('Debe mostrar correctamente la imagen del producto asignada desde el componente padre', () => {
        const wrapper = renderer.create(
            <ProductCard product={product2}>
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        );

        expect(wrapper.toJSON()).toMatchSnapshot();
    });
});