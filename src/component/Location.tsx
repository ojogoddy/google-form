

const Location = () => {
    const questions =[
        {
            text: " Varicella",
            name: "q1"
        },
        {
            text: " Tuberculosis including BCG",
            name: "q2"
        },
        {
            text: "  Rubella (German Measles)",
            name: "q3"
        },
        {
            text: " Poliomyelitis",
            name: "q4"
        },
        {
            text: " Hepatitis B",
            name: "q5"
        },
        {
            text: " Tetanus",
            name: "q6"
        },
        {
            text: " Typhoid",
            name: "q7"
        }
    ]
  return (
    <div className='p-4'>
        
        <form>
        <h2 className='text-[24px] mb-4 font-bold'>Please Click Yes or No</h2>
        
            {/* Question 1 */}
           <div className="mb-3">
           <label className="font-medium"> Varicella</label>
            <div className="flex items-center">
            <input type="radio" name="varicella" id="" className='mr-2'/>
            <label> Yes</label>
            </div>
            <div className="flex items-center ">
            <input type="radio" name="varicella" id="" className='mr-2'/>
            <label>No</label>
            </div>
           </div>

            {/* Question 2 */}
           <div className="mb-3">
           <label className="font-medium"> Tuberculosis including BCG</label>
            <div className="flex items-center">
            <input type="radio" name="bcg" id="" className='mr-2'/>
            <label> Yes</label>
            </div>
            <div className="flex items-center  text-black">
            <input type="radio" name="bcg" id="" className='mr-2 text-black'/>
            <label>No</label>
            </div>
           </div>
            {/* Question 3 */}
           <div className="mb-3">
           <label className="font-medium"> Rubella (German Measles)</label>
            <div className="flex items-center">
            <input type="radio" name="Rubella" id="" className='mr-2 text-black'/>
            <label> Yes</label>
            </div>
            <div className="flex items-center ">
            <input type="radio" name="Rubella" id="" className='mr-2'/>
            <label>No</label>
            </div>
           </div>
            {/* Question 4 */}
           <div className="mb-3">
           <label className="font-medium"> Poliomyelitis</label>
            <div className="flex items-center">
            <input type="radio" name="polio" id="" className='mr-2 text-black'/>
            <label> Yes</label>
            </div>
            <div className="flex items-center ">
            <input type="radio" name="polio" id="" className='mr-2'/>
            <label>No</label>
            </div>
           </div>
            {/* Question 5 */}
           <div className="mb-3">
           <label className="font-medium"> Hepatitis B</label>
            <div className="flex items-center">
            <input type="radio" name="hepaitis" id="" className='mr-2 '/>
            <label> Yes</label>
            </div>
            <div className="flex items-center ">
            <input type="radio" name="hepaitis" id="" className='mr-2'/>
            <label>No</label>
            </div>
           </div>
            {/* Question 6 */}
           <div className="mb-3">
           <label className="font-medium"> Tetanus</label>
            <div className="flex items-center">
            <input type="radio" name="tetanus" id="" className='mr-2 '/>
            <label> Yes</label>
            </div>
            <div className="flex items-center ">
            <input type="radio" name="tetanus" id="" className='mr-2'/>
            <label>No</label>
            </div>
           </div>
            {/* Question 7 */}
           <div className="mb-3">
           <label className="font-medium"> Typhoid</label>
            <div className="flex items-center">
            <input type="radio" name="typhoid" id="" className='mr-2 text-black'/>
            <label> Yes</label>
            </div>
            <div className="flex items-center ">
            <input type="radio" name="typhoid" id="" className='mr-2'/>
            <label>No</label>
            </div>
           </div>
            {/* Question 8 */}
           <div className="mb-5">
           <label className="font-medium"> Are you vaccinated? Both (Dose 1 & Dose 2)</label>
            <div className="flex items-center">
            <input type="radio" name="vaccinated" id="" className='mr-2 text-black'/>
            <label> Yes</label>
            </div>
            <div className="flex items-center">
            <input type="radio" name="vaccinated" id="" className='mr-2'/>
            <label>No</label>
            </div>
           </div>
           
           <div className="flex justify-end p-3">
           <button type="submit" className="bg-[#3D6CF6] font-semibold text-white rounded-sm w-[160px] h-[40px]">Save</button>
           </div>
        </form>
    </div>
  )
}

export default Location