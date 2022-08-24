import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { IMAGES, AVATAR } from '@/mock'

function Post() {
  const { id } = useParams<{ id: string }>()

  const transform = (i: number) => ({
    y: `${Math.floor(i / 3) * 140 - 140}px`,
    x: `${Math.floor(i % 3) * 140 - 140}px`,
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.33, ...transform(Number(id)) }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
      }}
      exit={{ opacity: 0, scale: 0.33, ...transform(Number(id)) }}
      className="absolute top-0 left-0 w-full z-10"
    >
      <Link to="/">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="flex items-center px-2 py-4 gap-4 bg-white"
        >
          <img src={AVATAR} className="rounded-full h-12 w-12" alt="avatar" />
          <div className="font-bold">piratejack</div>
        </motion.div>
      </Link>
      <img src={IMAGES[Number(id)]} alt="post" className="aspect-square object-cover" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="px-2 py-4 bg-white"
      >
        <span className="font-bold">piratejack</span> City landscapes and old buildings, Tokyo,
        Japan. The Essential Tokyo. A visit to Japan&apos;s largest city is an experience
        that should be cherished for a lifetime. The city is a global destination for culture,
        history, gastronomy, nightlife, shopping, and more.
      </motion.div>
    </motion.div>
  )
}

export default Post
