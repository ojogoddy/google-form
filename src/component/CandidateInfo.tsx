
const CandidateInfo = () => {
    
  return (
    <div className="bg-gray-200" >
    <form >
        <div className=" flex bg-white p-3 rounded-sm flex-col border-b m-4">
            <label > First Name </label>
            <input type="text" className="mt-1 border-gray-200 border-b-2" placeholder="Enter your first name" />
        </div>

        <div className=" flex bg-white p-3 rounded-sm flex-col border-b m-4">
            <label > Last Name </label>
            <input type="text" className="mt-1 border-gray-200 border-b-2" placeholder="Enter your last name" />
        </div>

        <div className="flex bg-white p-3 rounded-sm flex-col border-b m-4">
            <label > Email </label>
            <input type="email" className="mt-1 border-gray-200 border-b-2" placeholder="example@gmail.com" />
        </div>
        <div className="flex bg-white p-3 rounded-sm flex-col border-b m-4">
            <label > Phone Number </label>
            <input type="tel" className="mt-1 border-gray-200 border-b-2" placeholder="Enter your phone number" />
        </div>
        <div className="flex bg-white p-3 rounded-sm flex-col  m-4">
            <label > Address </label>
            <input type="text" className="mt-1 border-gray-200 border-b-2" placeholder="Enter your Address" />
        </div>
        
        <div className="flex justify-end p-3">
           <button type="submit" className="bg-[#3D6CF6] font-semibold text-white rounded-sm w-[160px] h-[40px]">Save</button>
        </div>
    </form>
</div>
  )
}

export default CandidateInfo