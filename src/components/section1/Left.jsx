import { MoveRight } from 'lucide-react';
function Left() {
    return (
        <div>
            <div>
                <h2 className='text-6xl '>Explore Our <span className="text-green-800 font-bold">
                    Modern <br />Furniture Collection
                </span></h2>
                <h4 className='text-xl font-extralight text-gray-400 py-10 w-7/8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, explicabo Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, similique!.</h4>
            </div>
            <div className='flex gap-5'>
                <div>
                    <button className="flex items-center gap-2 border-2 p-4 rounded-4xl bg-green-800 text-white font-semibold hover:bg-gray-100 hover:text-green-800">
                        Shop Now
                        <MoveRight strokeWidth={2.5} />
                    </button>
                </div>
                <div className='flex items-center font-semibold hover:underline underline-offset-2 '>View All Prodcuts</div>
            </div>
        </div>
    )
}

export default Left
