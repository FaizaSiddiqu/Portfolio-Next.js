import React from 'react'


const Skills = () => {
  return (
    <div id='skills'   className='container pt-40'>
      <div className='grid md:grid-cols-2 gap-20 items-center'>
        <div data-aos="zoom-in-up">
            <h4 className='text-4xl md:text-5xl'>Skills</h4>
            <p className='pt-4 font-medium'> I possess a strong foundation in web development, with expertise in HTML, CSS, JavaScript, and TypeScript. My experience includes building dynamic, user-friendly applications using frameworks such as React and Next.js. I am also skilled in Tailwind CSS for streamlined styling and design. Driven by a passion for learning, I continually stay updated on the latest technologies to strengthen my skills and contribute meaningfully to every project.
          </p>
        </div>

        <div>
            <div className='grid grid-cols-2 text-customPurple text-3xl sm:text-4xl'>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">HTML</h2>
                    <h2 data-aos="zoom-in-up">CSS</h2>
                    <h2 data-aos="zoom-in-up">JavaScript</h2>
                    <h2 data-aos="zoom-in-up">Typescript</h2>
                </div>
                <div className='space-y-2'>
                    <h2 data-aos="zoom-in-up">Node.js</h2>
                    <h2 data-aos="zoom-in-up">React.js</h2>
                    <h2 data-aos="zoom-in-up">Next.js</h2>
                    <h2 data-aos="zoom-in-up">Tailwind.css</h2>
                </div>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
