import { CgAsterisk } from "react-icons/cg";

const CandidateInfo = () => {
    
  return (
    <div className="bg-[#F0F1F3]" >
    
    <form className="mt-10" >
        <div className=" flex  p-3 rounded-md  justify-between shadow-2xl text-[#666666] bg-[#fff]  m-4">
      <div className="flex flex-col w-[100%]">
          <label > First Name </label>
            <input type="text" className="mt-1 p-2 border-b-2 border-b-[#f0efef] " placeholder="Enter your first name" />
      </div>
      <div><CgAsterisk className="text-red " /></div> 
           </div>
          

        <div className=" flex bg-[#fff] p-3 rounded-md  justify-between  shadow-2xl text-[#666666] m-4">
           <div className="w-[100%] flex flex-col">
           <label > Last Name </label>
            <input type="text" className="mt-1 p-2 border-b-2 border-b-[#f0efef]" placeholder="Enter your last name" />
           </div>
           <div><CgAsterisk className="text-red " /></div> 
        </div>

        <div className="flex bg-[#fff] p-3 rounded-md  justify-between shadow-2xl text-[#666666] m-4">
           <div className="w-[100%] flex-col flex">
           <label > Email </label>
            <input type="email" className="mt-1 p-2 border-b-2 border-b-[#f0efef]" placeholder="example@gmail.com" />
           </div>
           <div><CgAsterisk className="text-red " /></div> 
        </div>

        <div className="flex bg-[#fff] p-3 rounded-md justify-between shadow-2xl text-[#666666] m-4">
         <div className="w-[100%] flex flex-col">
         <label > Phone Number </label>
            <input type="tel" className="mt-1 p-2 border-b-2 border-b-[#f0efef]" placeholder="Enter your phone number" />
         </div>
         <div><CgAsterisk className="text-red " /></div> 
        </div>

        <div className="flex bg-[#fff] p-3 rounded-md justify-between text-[#666666] shadow-2xl m-4">
          <div className="w-[100%] flex flex-col">
          <label > Address </label>
            <input type="text" className="mt-1 p-2 border-b-2 border-b-[#f0efef]" placeholder="Enter your Address" />
          </div>
          <div><CgAsterisk className="text-red " /></div> 
        </div>
        
        <div className="flex justify-end p-3">
           <button type="submit" className="bg-[#3D6CF6] font-semibold text-[#fff] rounded-sm w-[160px] h-[40px]">Save</button>
        </div>
        
    </form>
    
   
</div>
  )
}

export default CandidateInfo