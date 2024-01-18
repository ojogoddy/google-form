import CandidateInfo from "../component/CandidateInfo"
import HealthDecl from "../component/HealthDecl"
import Location from "../component/Location"
import MedHistory from "../component/MedHistory"
import MedHistory2 from "../component/MedHistory2"
import {useState} from "react"

const formNav = ["Candidate Information", "Health Declaration", "Medical History", "Medical History 2", "Location Medical History"]
const Form = () => {
    const [active, setActive]= useState(0)

    const render = ()=>{
        switch (active){
            case 0:
                return <CandidateInfo/>
            case 1:
                return <HealthDecl/>
            case 2:
                return <MedHistory/>
            case 3:
                return <MedHistory2/>
            case 4:
                return <Location/>
        }
    }
  return (
    <div className="flex mt-5">
        <div className="flex w-[25%] flex-col items-center border-t-2 text-[1rem] pl-3">
        {formNav?.map((prop, index)=>(
            <span className={`cursor-pointer font-medium rounded-sm ${active === index ? "text-[#3D6CF6]" : "text-black"}`} key={index} onClick={()=>setActive(index)} >
                {prop}
            </span>
        ))}
        </div>
        <div className="w-full">{render()}</div>
    </div>
  )
}

export default Form