import { CgAsterisk } from "react-icons/cg";

const MedHistory2 = () => {
    const questions =[
        {
            text: "Do you have any illness/impairment/disability (physical or psychological) which may affect work?",
            name: "q1"
        },
        {
            text: "Have you ever had any illness/impairment/disability which may have been caused or made worse by your work?",
            name: "q2"
        },
        {
            text: "Are you having or waiting for treatment(including medications) or investigations at present? if your answer is yes, provide further details of the condition,treatment and dates",
            name: "q3"
        },
        {
            text: "Do you think you may need any adjustments or assistance to help you to do the job?",
            name: "q4"
        },
    ]
  return (
    <div className="p-4">
        <form className="mt-6">
        <h2 className='text-[1.25rem] text-[#404040] mb-4 font-bold w-[100%] h-[3.125rem] bg-[#fff] rounded-md shadow-2xl p-3'>Please Click Yes or No</h2>
        {questions?.map((prop, index)=>(
            <span className="" key={index}>
                {/* Question 1 */}
           <div className=" h-[8.125rem] w-[100%] p-4 rounded-md bg-[#fff] shadow-2xl border-2 border-[#F0F1F3] mb-6 flex justify-between">
          <div>
          <label className="font-medium">{prop.text}</label>
            <div className="flex items-center">
            <input type="radio" name={prop.name} id="" className='mr-2'/>
            <label> Yes</label>
            </div>
            <div className="flex items-center ">
            <input type="radio" name={prop.name} id="" className='mr-2'/>
            <label>No</label>
            </div>
          </div>
          <div><CgAsterisk className="text-red " /></div>  

           </div>
            </span>
        ))}
            
        </form>
    </div>
  )
}

export default MedHistory2