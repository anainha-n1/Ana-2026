import { useState } from "react"

export default function Aula01() {
    const [tamanhoFonte, setTamanhoFonte] = useState('text-base')
    const [corFonte, setcor] = useState('text-base')

    return (
        <div>
            <h1 className="text-4x1 font-bold text-white text-center">funcionando</h1>
            <h2 className="text-3x4 font-bold mb-4">1. Demonstração</h2>
            <div className="mb-8 p-4 bg-slate-200 rounded">
                <p className={`${tamanhoFonte} ${corFonte}`}>ex: {tamanhoFonte} </p>
                <h3>tamanhos</h3>
                <button
                    className="px-3 py-1 bg-sky-500 text white rounded mr-2">text-xs (12px)
                    onClick={() => setTamanhoFonte('text-xs')}
                </button>

                <button
                    onClick={() => setTamanhoFonte('text-sm')}

                    className="px-3 py-1 bg-sky-500 text white rounded mr-2">text-xs (14px)
                </button>
                <button className="px-3 py-1 bg-sky-500 text-white rounded mr-2"
                    onClick={() => setTamanhoFonte('text-lg')}
                >text-xs {'18px'}</button>

                <button className="px-3 py-1 bg-sky-500 text-white rounded mr-2"
                    onClick={() => setTamanhoFonte('text-xl')}
                >text-xs {'20px'}</button>

                <button className="px-3 py-1 bg-sky-500 text-white rounded mr-2"
                    onClick={() => setTamanhoFonte('text-2xl')}
                >text-xs {'24px'}</button>

                <button className="px-3 py-1 bg-sky-500 text-white rounded mr-2"
                    onClick={() => setTamanhoFonte('text-3xl')}
                >text-xs {'30px'}</button>

                <button className="px-3 py-1 bg-sky-500 text-white rounded mr-2"
                    onClick={() => setTamanhoFonte('text-4xl')}
                >text-xs {'36px'}</button>

                <h3>cores fontes</h3>
                <button className="px-3 py-1 bg-black text-white rounded mr-2"
                onClick={()=> setcor('text-black')}
                >text-black</button>

                <button className="px-3 py-1 bg-red-500 text-white rounded mr-2"
                onClick={()=> setcor('text-red-500')}
                >text-red</button>

                <button className="px-3 py-1 bg-blue-300 text-white rounded mr-2"
                onClick={()=> setcor('text-blue-300')}
                >text-red</button>

                <button className="px-3 py-1 bg-pink-400 text-white rounded mr-2"
                onClick={()=> setcor('text-pink-400')}
                >text-red</button>


            </div>
        </div>
    )
}