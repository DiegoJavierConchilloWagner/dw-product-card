import { useEffect, useRef, useState } from 'react'
import { InitialValues, onChangeArgs, Product } from '../interfaces/product.interfaces';

interface useProductArgs {
    product: Product;
    onChange?: ( args: onChangeArgs ) => void;
    incBy?: number
    initialValues?: InitialValues
}

export const useProduct = ( {onChange, product, incBy = 0, initialValues}:useProductArgs ) => {
    const [counter, setCounter] = useState<number>( initialValues?.count || incBy );
    const isMounted = useRef(false);

    const increaseOrDecreaseBy = (incBy: number) => {

        let newValue = Math.max( counter + incBy, 0 )
        if ( initialValues?.maxCount ) {
            newValue = Math.min( newValue, initialValues.maxCount )
        }

        setCounter( newValue );

        onChange && onChange({ count: newValue, product });
    }

    const reset = () => setCounter( initialValues?.count || incBy );

    useEffect(() => {
        if ( !isMounted.current ) return;

        setCounter( incBy );
    }, [incBy])

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {
        counter,
        isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
        maxCount: initialValues?.maxCount,

        increaseOrDecreaseBy,
        reset
    }
}
