

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
    ]
  return (
    <div className="p-4">
        <form>
        <h2 className='text-[24px] mb-4 font-bold'>Please Click Yes or No</h2>
        {questions?.map((prop, index)=>(
            <span className="" key={index}>
                {/* Question 1 */}
           <div className="mb-3">
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
            </span>
        ))}
            
        </form>
    </div>
  )
}

export default MedHistory2