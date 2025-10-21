function RightCard({ title, items, img }) {
  return (
    <div className='w-[350px] bg-white rounded-3xl p-4 shrink-0'>
      <div className='h-[300px]'>
        <img 
          className="w-full h-full rounded-3xl object-cover" 
          src={img} 
          alt={title} 
        />
      </div>
      <div className='mt-4'> 
        <h3 className='text-2xl font-light'>{title}</h3>
        <p className='text-gray-600 mt-1'>{items}</p>
      </div>
    </div>
  )
}

export default RightCard
