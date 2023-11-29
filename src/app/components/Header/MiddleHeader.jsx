'use client'
import { CiSearch } from 'react-icons/ci';
import { SlBasket } from 'react-icons/sl';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineHeart } from 'react-icons/ai';
import { getTokenFromCookie } from '../../../../libs/auth';
import { useEffect, useState } from 'react';

export default function MiddleHeader() {
      const [userName, setUserName] = useState(null);
      // useEffect(() => {
      //       const token = getTokenFromCookie(document.cookie);

      //       if (token) {
      //             // If the user is authenticated, fetch user details (including name)
      //             fetch('/api/users/details', {
      //                   method: 'GET',
      //                   headers: {
      //                         Authorization: `Bearer ${token}`,
      //                   },
      //             })
      //                   .then((response) => response.json())
      //                   .then((data) => {
      //                         if (data.user) {
      //                               setUserName(data.user.name);
      //                         }
      //                   })
      //                   .catch((error) => {
      //                         console.error('Error fetching user details:', error);
      //                   });
      //       }
      // }, []);
      return (
            <div className="middle-header">
                  <div className="middle-header-container navbar-container w-full h-28 bg-white flex justify-center border-b">
                        <div className="middle-header-inner-container max-w-[1200px] w-full h-full flex items-center justify-between gap-32">
                              <div className="logo flex-[1]">
                                    <h1 className="text-2xl">KARACA KURUYEMİŞ</h1>
                              </div>
                              <div className="search flex-[3]">
                                    <div className="search-bar w-full h-[56px] rounded-lg border flex justify-between">
                                          <input type="text" className='flex-1 outline-none px-4 bg-transparent' />
                                          <div className="search-icon h-full justify-center items-center flex px-4 border-l">
                                                <CiSearch size={26} style={{ color: 'black' }} />
                                          </div>
                                    </div>
                              </div>
                              <div className="icons flex-[1] flex items-center justify-end gap-10">
                                    <a href="/kayitol">
                                          <AiOutlineUser size={26} style={{ color: 'black' }} />
                                    </a>
                                    <AiOutlineHeart size={26} style={{ color: 'black' }} />
                                    <SlBasket size={26} style={{ color: 'black' }} />
                              </div>
                              {userName ? <h5>Welcome</h5> : <></>}
                        </div>
                  </div>
            </div>
      )
}