import React, { useRef } from 'react'
import RightCard from './RightCard'
import RightSlider from './RightSlider'

function Right() {
  const scrollRef = useRef(null); // ref to access the card container
  const cardData = [
  {
    title: "Living Room",
    items: "25,000+ items",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=1558"
  },
  {
    title: "Bedroom",
    items: "18,000+ items",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&q=80&w=1558"
  },
  {
    title: "Kitchen",
    items: "12,000+ items",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1558"
  },
  {
    title: "Outdoor",
    items: "9,000+ items",
    img: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1558"
  },
  {
    title: "Office",
    items: "7,500+ items",
    img: "https://images.unsplash.com/photo-1535957998253-26ae1ef29506?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1036"
  }
];
  return (
    <div className='h-full w-full'>
      <div ref={scrollRef} className='flex gap-5 overflow-x-auto scroll-smooth'>
  {cardData.map((card, index) => (
    <RightCard key={index} {...card} />
  ))}
</div>
      <div>
        <RightSlider scrollRef={scrollRef} />
      </div>
    </div>
  )
}

export default Right