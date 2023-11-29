"use client"
import React, { FormEvent, useState } from 'react'

import { useRouter } from 'next/navigation'



const Register = () => {
      const router = useRouter()
      const [errorMessage, setErrorMessage] = useState('');
      const [phoneNumber, setPhoneNumber] = useState('');
      const formatPhoneNumber = (value) => {
            // Filter out non-digit characters
            const numericValue = value.replace(/\D/g, '');

            // Check if the numeric value is not empty
            if (numericValue.length > 0) {
                  // Format the phone number as (XXX) XXX-XXXX
                  let formattedNumber = '(' + numericValue.substring(0, 3) + ')';
                  if (numericValue.length > 3) {
                        formattedNumber += numericValue.substring(3);
                        if (numericValue.length > 6) {
                              formattedNumber =
                                    formattedNumber.substring(0, 8) +
                                    formattedNumber.substring(8, 15);
                        }
                  }

                  setPhoneNumber(formattedNumber);
            } else {
                  // If the input is empty, set it to an empty string
                  setPhoneNumber('');
            }
      };
      const handlePhoneNumberChange = (event) => {
            formatPhoneNumber(event.target.value);
      };
      const handleSubmit = async (event) => {
            event.preventDefault();

            // Extract form data and submit it to the API
            const formData = new FormData(event.target);
            const formDataObject = {};
            formData.forEach((value, key) => {
                  formDataObject[key] = value;
            });
            const phoneNumber = formDataObject.phoneNumber.replace(/\D/g, '');
            const response = await fetch('/api/users', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({ ...formDataObject, phoneNumber }),
            });

            if (response.ok) {
                  // Handle successful registration
                  // localStorage.setItem('token', responseData.token);
                  console.log('User registered successfully');
                  router.push('/');
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
      return (

            <div className="register">
                  <div className="register-container w-full h-auto  flex justify-center md:my-4">
                        <div className="register-inner-container max-w-[1200px] w-full h-full flex flex-col items-center justify-center bg-gray-50 pt-16 md:mt-16 mt-0 p-8 gap-2">

                              <form className="flex w-full flex-col items-center gap-2" method="POST" action="/api/users" onSubmit={handleSubmit}>
                                    <h2 className="text-3xl pb-4">KAYIT OL</h2>
                                    <div className="register-input-container flex flex-col md:flex-row justify-between gap-6 w-full pt-4 pb-8">
                                          <div className="register-inner-input-container flex-1 flex flex-col gap-4">
                                                <div className="input-container flex border">
                                                      <input type="text" name="name" placeholder="Ad" className="pl-4 flex-1 py-3 outline-0" required />
                                                </div>
                                                <div className="input-container flex border">
                                                      <input type="text" name="surname" placeholder="Soyad" className="pl-4 flex-1 py-3 outline-0" required />
                                                </div>
                                                <div className="input-container flex border">
                                                      <div className="bg-white px-4 border-r cursor-default flex items-center justify-center">
                                                            <h5>+90</h5>
                                                      </div>
                                                      <input type="text" name="phoneNumber" placeholder="(5XX)XXXXXXX" className="pl-4 flex-1 py-3 outline-0" required value={phoneNumber}
                                                            onChange={handlePhoneNumberChange} />
                                                </div>
                                          </div>
                                          <div className="register-inner-input-container flex-1 flex flex-col gap-4">
                                                <div className="input-container flex border">
                                                      <input type="email" name="email" placeholder="Email" className="pl-4 flex-1 py-3 outline-0" required />
                                                </div>
                                                <div className="input-container flex border">
                                                      <input type="password" name="password" placeholder="Parola" className="pl-4 flex-1 py-3 outline-0" required />
                                                </div>
                                                <div className="input-container flex border">
                                                      <input type="password" name='password' placeholder="Parola Tekrar" className="pl-4 flex-1 py-3 outline-0" required />
                                                </div>
                                          </div>
                                    </div>
                                    {errorMessage != '' ? <div className="sozlesme flex gap-2">
                                          <p className="text-red-600">
                                                {errorMessage}
                                          </p>
                                    </div> : <></>}

                                    <div className="sozlesme flex gap-2">
                                          <input type="checkbox" required />
                                          <p className="text-gray-600">
                                                <a href="#" className="text-blue-500">
                                                      Kullanıcı sözleşmesini
                                                </a>{' '}
                                                okudum ve onaylıyorum.
                                          </p>
                                    </div>
                                    <div className="sozlesme flex gap-2">
                                          <p className="text-gray-600">
                                                Daha önce kayıt olduysan{' '}
                                                <a href="/girisyap" className="text-blue-500">
                                                      giriş yap.
                                                </a>
                                          </p>
                                    </div>
                                    <button type="submit" className="register-btn px-12 py-4 bg-green-700 text-white rounded-xl mt-4 mb-8">
                                          Kayıt Ol
                                    </button>
                              </form>
                        </div>
                  </div>
            </div>

      )
}

export default Register
