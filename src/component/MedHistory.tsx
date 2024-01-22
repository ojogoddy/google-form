import { CgAsterisk } from "react-icons/cg";


const MedHistory = () => {
    const questions=[
        {
            text: "Heart/Circulatory illness/Hypertension?",
            name: "q1"
        },
        {
            text: "Asthmas/Hay fever?",
            name: "q2"
        },
        {
            text: "Bronchitis/Pneumonia/Pleurity?",
            name: "q3"
        },
        {
            text: "Epilepsy?",
            name: "q4"
        },
        {
            text: "Headache/Migrane?",
            name: "q5"
        },
        {
            text: "Psychiatric illness/Anxiety/Depression?",
            name: "q6"
        },
        {
            text: "Dermatitis/Psoriasis/Eczema?",
            name: "q7"
        },
        {
            text: "Back Problems?",
            name: "q8"
        },
        {
            text: "Recurrent Infections?",
            name: "q9"
        },
        {
            text: "Hepatitis/Jaundice?",
            name: "q10"
        },
        {
            text: "Chicken Pox/Shingles?",
            name: "q11"
        },
    ]
  return (
    <div className="p-4">
        <form className="mt-6">
        <h2 className='text-[1.25rem] text-[#404040] mb-4 font-bold w-[100%] h-[3.125rem] bg-[#fff] rounded-md shadow-2xl p-3'>Please Click Yes or No</h2>
        {questions?.map((prop, index)=>(
            <span className="" key={index}>
                {/* Question 1 */}
           <div className="h-[6.25rem] w-[100%] p-4 rounded-md bg-[#fff] shadow-2xl border-2 border-[#F0F1F3] mb-6 flex justify-between">
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

export default MedHistory