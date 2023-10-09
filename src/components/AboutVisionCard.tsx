type values = {
    id:number,
    title:String,
    image:any,
    description:any
}
function AboutVisionCard(data:values) {
  return (
    <div key={data.id}>
    <div className=" relative rounded-md overflow-hidden shadow-md ">
      <div className="text-white bg-black  w-72 h-80 p-5 hover:scale-105 transition-transform duration-300  ">
         <div className="bg-transparent p-1 w-24 rounded-lg flex justify-center mx-auto mb-1 ">
         <img
          src={data.image}
          alt="card-image"
          className="h-20 w-20 object-cover"
        />
         </div>
        <h2 className="text-xl font-bold mb-6 ">{data.title}</h2>
        <p className="font-bold mb-8 text-sm">{data.description}</p>
      </div>
    </div>
    </div>
  )
}

export default AboutVisionCard