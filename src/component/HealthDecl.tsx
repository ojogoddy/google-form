
import { CgAsterisk } from "react-icons/cg";


const HealthDecl = () => {
    const questions=[
        {
            text: "Do you or have ever suffered from long term illness?",
            name: "q1"
        },
        {
            text: "Have you ever required sick leave for a back or neck injury?",
            name: "q2"
        },

        {
            text: "Do you suffer with any back or neck injuries?",
            name:"q3"
        },
        {
            text: "Have you been in contact with anyone who is suffering from a contagious illness within the last six weeks?",
            name:"q4"
        },
        {
            text: "Do you suffer with a communicable disease?",
            name:"q5"
        },
        {
            text: "Are you currently receiving active medical attention?",
            name: "q6"
        },
        {
            text: "Are you registered active medical attention?",
            name: "q7"
        }
    ]
  return (
    <div className="p-4 bg-[#F0F1F3]">
    <form className="mt-6">
    <h2 className='text-[1.25rem] text-[#404040] mb-4 font-bold w-[100%] h-[3.125rem] bg-[#fff] rounded-md shadow-2xl p-3'>Please Click Yes or No</h2>
    {questions?.map((prop, index)=>(
        <span className="" key={index}>
            {/* Question 1 */}
       <div className=" h-[6.25rem] w-[100%] p-4 rounded-md bg-[#fff] shadow-2xl border-2 border-[#F0F1F3] mb-6 flex justify-between ">
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

export default HealthDecl