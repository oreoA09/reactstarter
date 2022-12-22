import { useState, useEffect, useCallback } from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const showProducts = useCallback(async () => {
        const response = await fetch(url)
        const products = await response.json()
        setProducts(products)
        setLoading(false)
      },
      [url])

      useEffect(
        () => {
            showProducts();
        }, [url, showProducts]
      );

      return {loading,products}
    
};
