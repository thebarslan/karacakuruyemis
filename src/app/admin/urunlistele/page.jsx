'use client'
import AdminLayout from '@/app/adminlayout'
import React, { useEffect, useState } from 'react'

const ListProducts = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
            const fetchProducts = async () => {
                  try {
                        const response = await fetch('/api/products'); // Adjust the URL based on your API route
                        if (response.ok) {
                              const data = await response.json();
                              setProducts(data.products || []);
                        } else {
                              console.error('Failed to fetch products');
                        }
                  } catch (error) {
                        console.error('Error fetching products:', error);
                  }
            };

            fetchProducts();
      }, []);
      return (
            <AdminLayout>
                  <div className="urun-ekle">
                        <h5 className='mb-8'>ÜRÜN LİSTELE</h5>
                        <ul>
                              {products.map((product) => (
                                    <li key={product._id}>
                                          {product.name} - {product.price} - {product.weight}
                                    </li>
                              ))}
                        </ul>
                  </div>

            </AdminLayout>
      )
}

export default ListProducts
