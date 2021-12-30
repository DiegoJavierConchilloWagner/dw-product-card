# TSDX React User Guide

> This is a test package for deployment in `NPM`
> Este es un paquete de prueba de despliegue `NPM`

### Created By Diego Wagner
### Creado por Diego Wagner

## Examples
## Ejemplos

```
import { ProductCard, ProductImage, 
    ProductTitle, ProductButtons } from 'dw-product-card';
```

```
<ProductCard product={product} initialValues={{ count: 1, maxCount: 10 }}>
    {
        ({reset, isMaxCountReached, count, increaseOrDecreaseBy, maxCount}) => (
            <>
                <ProductImage/>
                <ProductTitle/>
                <ProductButtons/>
            </>
        )
    }
</ProductCard>
```