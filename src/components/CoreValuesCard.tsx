type values = {
    id:number,
    title:String,
    image:any,
    description:any
}
function CoreValuesCard(data:values) {
  return (
    <div key={data.id}>
    <div className="relative  shadow-md ">
      <div className="absolute bottom-4 -left-4 border-b-0  bg-[#FABD13]  border-solid w-72 h-80"></div>
      <div className="relative z-10 text-black bg-white w-72 h-80 p-5 hover:scale-105 transition-transform duration-300  ">
         <div className="bg-[#FABD13] p-1 w-24 h-14 rounded-lg flex justify-center mx-auto mb-1 ">
         <img
          src={data.image}
          alt="card-image"
          className="h-10 w-10 "
        />
         </div>
        <h2 className="text-xl font-bold mb-2  ">{data.title}</h2>
        <p className="font-bold mb-2 text-sm">{data.description}</p>
      </div>
    </div>
    </div>
  )
}

export default CoreValuesCard