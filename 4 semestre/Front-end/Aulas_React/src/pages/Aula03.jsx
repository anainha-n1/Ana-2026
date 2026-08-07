import { AiFillStar } from "react-icons/ai";
import { AiOutlineDingding } from "react-icons/ai";
import { AiOutlineDocker } from "react-icons/ai";
export default function Aula03(){
    return(
        <div>
            <h1 className="text-3x1 font-bold mb-4 text-slate-800">trabalhando</h1>
            <p>
                <piHouseBold className="inline w-10 h-10 text-red-500" />
                 <AiFillStar className="inline w-10 h-10 text-pink-500" />
                  <AiOutlineDingding className="inline w-10 h-10 text-blue-500" />
                   <AiOutlineDocker className="inline w-10 h-10 text-purple-500" />
            </p>
        </div>
    )
}