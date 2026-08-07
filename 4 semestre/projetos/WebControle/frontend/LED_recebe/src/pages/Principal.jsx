import { useState } from "react"
import { Route, Routes, useNavigate, Link } from 'react-router-dom'


import { MdClose, MdMenu } from 'react-icons/md'
import { PiHouseBold } from "react-icons/pi"
import { VscRocketCompact,VscTerminalLinux } from "react-icons/vsc";
import ControleLed from "./controleLed";
export default function Principal() {
    const [menuAberto, setMenuAberto] = useState(false)
    return (
        <div className="flex h-screen font-sans">
            {/* sidebar responsivo */}
            <div className={`fixed z-30 inset-y-0 left-0 transform md:relative md:translate-x-0 w-64 bg-gray-900 text-white p-4 transition-transform duration-300 ease-in-out ${menuAberto ? 'translate-x-0' : '-translate-x-full'}`}>

                <div className="flex justify-between items-center mb-6">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setMenuAberto(!menuAberto)} className="md:hidden">
                        <MdClose className='w-5 h-5' />
                    </button>
                </div>
                <nav className="space-y-4">
                    <Link onClick={()=> setMenuAberto(false)} to='/ControleLed' className="flex items-center gap-4 hover:bg-gray-700 p-2 rounded">
                        <PiHouseBold />
                        <span>controle Led</span>
                    </Link>
                    
                </nav>

            </div>


            {/* Conteudo tela principal */}
            <div className="flex-1 p-6 bg-gray-100 text-black w-full overflow-auto">
                <button onClick={()=> setMenuAberto(!menuAberto)} className="md:hidden mb-4 text-gray-900">
                    <MdMenu className='w-6 h-6'></MdMenu>
                </button>
                <Routes>
                    <Route path='/' element={<ControleLed />} />
                    <Route path='/ControleLed' element={<ControleLed />} />
                </Routes>
            </div>


        </div>
    )
}