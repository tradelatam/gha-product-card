# gha-product-card User Guide

Este es un paquete de pruebas de despliegue en NPM

### Gerardo Huamanciza

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'gha-product-card'
```

```
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
```

