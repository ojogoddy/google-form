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
    <div className="flex mt-5 bg-[#F0F1F3] ">
        <div className="flex w-[25%] flex-col h-[25rem] m-10 text-[0.875rem] rounded-md   bg-[#fff] border-2 border-[#F0F1F3] shadow-2xl gap-6 pt-4">
        {formNav?.map((prop, index)=>(
            <span className={`cursor-pointer font-medium border-b-2 border-[#f0efef] px-10 pb-5  rounded-sm ${active === index ? "text-[#3D6CF6]" : "text-[#666666]"}`} key={index} onClick={()=>setActive(index)} >
                {prop}
            </span>
        ))}
        </div>
        <div className="w-full ">{render()}</div>
    </div>
  )
}

export default Form