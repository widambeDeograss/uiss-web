type values = {
    id:number,
    title:String,
    image:any,
    description:any
}
function CoreValuesCard(data:values) {
  return (
    <div key={data.id}>
    <div className=" w-80 h-96 p-4 relative rounded-md overflow-hidden shadow-md ">
      <div className="absolute bottom-16 left-0 border-b-0  bg-[#FABD13]  border-solid w-72 h-80"></div>
      <div className="relative z-10 text-black bg-white w-72 h-80 p-5  ">
         <div className="bg-[#FABD13] p-1 w-24 rounded-lg flex justify-center mx-auto mb-1">
         <img
          src={data.image}
          alt="card-image"
          className="h-20 w-20 object-cover"
        />
         </div>
        <h2 className="text-xl font-bold mb-2  ">{data.title}</h2>
        <p className="font-bold mb-2 text-base">{data.description}</p>
      </div>
    </div>
    </div>
  )
}

export default CoreValuesCard