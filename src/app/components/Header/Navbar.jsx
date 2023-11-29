import Link from "next/link";

export default function Navbar() {
      return (
            <div className="navbar">
                  <div className="navbar-container w-full h-10 bg-white flex justify-center border-b">
                        <div className="navbar-inner-container max-w-[1200px] w-full h-full flex items-center">
                              <div className="links flex justify-between w-full text-black text-sm ">
                                    <div className="link hover:text-green-700">
                                          <Link href='/'>ANASAYFA</Link>
                                    </div>
                                    <div className="link hover:text-green-700">
                                          <Link href='/kuruyemis'>KURUYEMİŞ</Link>
                                    </div>
                                    <div className="link hover:text-green-700">
                                          <Link href='/'>İNDİRİMLİ ÜRÜNLER</Link>
                                    </div>
                                    <div className="link hover:text-green-700">
                                          <Link href='/'>ÖZEL PAKETLER</Link>
                                    </div>
                                    <div className="link hover:text-green-700">
                                          <Link href='/'>DÜĞÜN MERASİM PAKETLERİ</Link>
                                    </div>
                                    <div className="link hover:text-green-700">
                                          <Link href='/'>LOKUM VE ŞEKERLEME</Link>
                                    </div>
                                    <div className="link hover:text-green-700">
                                          <Link href='/'>BAHARAT</Link>
                                    </div>
                              </div>
                        </div>
                  </div>
            </div>
      )
}

