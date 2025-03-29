interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'MachineLink+',
    description: `Close to business scenarios,  a user-friendly and
powerful tool for machine management.`,
imgSrc: '/static/images/time-machine.jpg',
    href: 'https://en.rootcloud.com/solutions-products/rootcloud-machinelink.html',
  },
  // {
  //   title: 'The Time Machine',
  //   description: `Imagine being able to travel back in time or to the future. Simple turn the knob
  //   to the desired date and press "Go". No more worrying about lost keys or
  //   forgotten headphones with this simple yet affordable solution.`,
  //   imgSrc: '/static/images/time-machine.jpg',
  //   href: '/blog/the-time-machine',
  // },
]

export default projectsData
