'use client'
import Image from 'next/image'
import { FC } from 'react'
import { motion } from 'motion/react'

interface Skill {
  name: string
  src: string
}

interface SkillsProps {
  data: Skill[]
}

const Skills: FC<SkillsProps> = ({ data }) => {
  return (
    <div className="flex flex-wrap items-center justify-start gap-2">
      {data.map((skill, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Image
              src={skill.src}
              alt={skill.name}
              width={0}
              height={0}
              className="mt-0 mb-0 h-auto w-auto"
            />
          </motion.div>
        )
      })}
    </div>
  )
}

export default Skills
