
import { MoveRight, MoveLeft } from 'lucide-react'

function RightSlider({ scrollRef }) {
  const scrollAmount = 370; 

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className='p-5'>
      <button onClick={scrollLeft} className='border-2 rounded-full p-3 bg-green-800'>
        <MoveLeft size={40} color='white' />
      </button>
      <button onClick={scrollRight} className='border-2 rounded-full p-3 ml-5 bg-green-800'>
        <MoveRight size={40} color='white' />
      </button>
    </div>
  )
}

export default RightSlider