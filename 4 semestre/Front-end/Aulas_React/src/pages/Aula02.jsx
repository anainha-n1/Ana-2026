import { useState } from "react"
import Botao from "../components/Botao"
export default function Aula02() {
    const [corFundo, setCorFundo] = useState('bg-white')
    const [degrade, setDegrade] = useState('')
    const [posicaoFundo, setPosicaoFundo] = useState('')
    const [tamanhoFundo, setTamanhoFundo] = useState('')
    const [repeticaoFundo, setRepeticaoFundo] = useState('')
    return (
        <div>
            <h1 className="text-3x1 font-bold mb-4 text-slate-800">Aula 02 </h1>
            <h2>2. Backgrounds, gradientes, imagens e responsividade</h2>

            <div className="mb-8 p=4 bg-slate-200 rounded">
                <p>Use bg-* para cores</p>
                <div className={`${corFundo} p-8`}>{corFundo}</div>
                <h3>Cores de fundo</h3>
                <div className="flex flex-wrap gap-2 my-4"></div>
                <Botao funcao={setCorFundo} classe='bg-red-500' />
                <Botao funcao={setCorFundo} classe='bg-[#036F8A]' />
            </div>

            <div className="mb-8 p=4 bg-slate-200 rounded">
                <div className={`${degrade} p-8`}>{degrade}</div>
                <h3>Cores de fundo</h3>
                <div className="flex flex-wrap gap-2 my-4"></div>
                <Botao funcao={setDegrade} classe='bg-gradient-to-r from-purple-400 to-pink-500' />
                <Botao funcao={setDegrade} classe='bg-gradient-to-r from-yellow-400 to-pink-500' />
                <Botao funcao={setDegrade} classe='bg-gradient-to-r from-purple-400 to-green-500 via-red-500' />
            </div>
            <h3>imagens e seus controles</h3>
                <div className={`h-80 bg-white bg-[url(https://picsum.photos/150)]
                    ${tamanhoFundo} ${posicaoFundo} ${repeticaoFundo}`}>

                </div>
                <h4>tamanho {'background-size'}</h4>
                <div className="flex flex-wrap gap-2 my-4">
                    <Botao funcao={setTamanhoFundo} classe='bg-auto'/>
                    <Botao funcao={setTamanhoFundo} classe='bg-cover'/>
                    <Botao funcao={setTamanhoFundo} classe='bg-contain'/>
                </div>
                <h4>posicao {'background-position'}</h4>
                <div className="flex flex-wrap gap-2 my-4">
                    <Botao funcao={setPosicaoFundo} classe='bg-left-top'/>
                    <Botao funcao={setPosicaoFundo} classe='bg-center'/>
                    <Botao funcao={setPosicaoFundo} classe='bg-right-bottom'/>
                </div>
                <h4>repeticao {'background-repeat'}</h4>
                <div className="flex flex-wrap gap-2 my-4">
                    <Botao funcao={setRepeticaoFundo} classe='bg-repeat'/>
                    <Botao funcao={setRepeticaoFundo} classe='bg-no-repeat'/>
                    <Botao funcao={setRepeticaoFundo} classe='bg-repeat-x'/>
                    <Botao funcao={setRepeticaoFundo} classe='bg-repeat-y'/>
                </div>
        </div>
    )
}