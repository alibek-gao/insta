import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IMAGES, AVATAR } from '@/mock'

function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0.5 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0.5 }}
      className="absolute top-0 left-0 w-full"
    >
      <div className="p-4 flex gap-4">
        <img src={AVATAR} className="rounded-full h-24 w-24" alt="avatar" />
        <div className="flex flex-col gap-2">
          <div className="font-bold text-xl">piratejack</div>
          <div className="text-sm">Landscapes photographer and travel writer</div>
        </div>
      </div>
      <div className="grid grid-cols-3 auto-rows-min">
        {IMAGES.map((image, i) => (
          <div className="w-full h-fit" key={image}>
            <Link to={`/post/${i}`}>
              <img src={image} alt="" className="aspect-square object-cover" />
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Profile
