'use client'
import AdminLayout from '@/app/adminlayout'
import React from 'react'

const AddProduct = () => {
      const handleSubmit = async (event) => {
            event.preventDefault();
            // Extract form data and submit it to the API
            const formData = {
                  name: event.target.name.value,
                  price: event.target.price.value,
                  weight: event.target.weight.value,
            };
            const response = await fetch('/api/products', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
            });

            if (response.ok) {
                  // Handle successful registration
                  // localStorage.setItem('token', responseData.token);
                  console.log('User registered successfully');

            } else {
                  const responseData = await response.json();
                  // Check specific error messages from the server and display appropriate messages
                  if (responseData.message === 'User with this email already exists') {
                        // Display email already exists error to the user
                        setErrorMessage('Bu e-posta ile daha önce bir hesap açılmış')
                  } else if (responseData.message === 'User with this phone number already exists') {
                        // Display phone number already exists error to the user
                        setErrorMessage('Bu telefon numarası ile daha önce bir hesap açılmış')
                  } else {
                        // Handle other registration errors
                        console.error('Hata!');
                  }
            }
      };
      return (<>
            <AdminLayout>
                  <div className="urun-ekle">
                        <h5 className='mb-8'>ÜRÜN EKLE</h5>
                        <form className='flex flex-col gap-4' method="POST" action="/api/products" onSubmit={handleSubmit}>
                              <input type='text' name='name' placeholder='Ürün Adı' />
                              <input type='number' name='price' placeholder='Ürün Fiyatı' />
                              <input type='number' name='weight' placeholder='Ağırlık' />
                              <button type='submit'>
                                    ÜRÜN EKLE
                              </button>
                        </form>
                  </div>

            </AdminLayout>
      </>
      )
}

export default AddProduct
