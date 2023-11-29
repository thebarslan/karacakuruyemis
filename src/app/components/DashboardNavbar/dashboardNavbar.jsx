import React from 'react'

const DashboardNavbar = () => {
      return (
            <div className='dashboard-navbar w-80 h-screen bg-slate-800'>
                  <div className="navbar-title flex w-full items-center justify-center">
                        <h1 className='text-white py-4'>Karaca Kuruyemiş Yönetim Paneli</h1>
                  </div>
                  <div className="links flex flex-col gap-4 text-white w-full justify-center items-center  mt-2 px-4">
                        <div className="container px-4 w-full border-t border-t-white">

                        </div>
                        <a href="/admin/urunekle">ÜRÜN EKLE</a>
                        <a href="/admin/urunlistele">ÜRÜN LİSTESİ</a>
                  </div>
            </div>
      )
}

export default DashboardNavbar
