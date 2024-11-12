import React from 'react';
import Headings from './Headings';
import Card from './Card';

const data = [
  {
    id: 0 ,
    tittle: "ToDo-List",
    desc: "An HtML and Javascript based App for managing and organizing your tasks efficiently.",
    img: "/todo.jpg",
    tags: ["HTML", "Node" , "CSS" , "Javascript"]
  },
  {
    id: 1 ,
    tittle: "Countown-Timer",
    desc: "A Next.js and Typescript powered website to track time with an interactive countown feature",
    img: "/countdown1.jpg",
    tags: ["React", "Node" , "CSS" , "Typescript"]
  },
  {
    id: 2 ,
    tittle: "Weather Widget",
    desc: "A Next.js and Typrscript based App for fetching and displaying real-time weather data.",
    img: "/whetherwidget.png",
    tags: ["React", "Node" , "CSS" , "Typescript"]
  },
  {
    id: 3 ,
    tittle: "Online Coffee Shop",
    desc: "An online coffee shop built with Next.js and Tailwind CSS, Enjoy a responsive and interactive interface designed for coffee enthusiasts.",
    img: "/coffee.jpg",
    tags: ["Next.js", "Node" , "Tailwind.CSS" , "Typescript"]
  },
  {
    id: 4,
    tittle: "Static Interactive Resume",
    desc: "A Typrscript based interactive Resume built with HTML and CSS ,allowing users to showcase their skills dynamically.",
    img: "/resume1.png",
    tags: ["React", "Node" , "CSS" , "Typescript"]
    
  },
  {
    id: 0 ,
    tittle: "Simple Calculator Projects",
    desc: "A simple calculator built with HTML, CSS, and TypeScript, designed for performing basic calculations efficiently and with a clean interface.",
    img: "/cal-1.png",
    tags: ["HTML", "Node" , "CSS" , "Typescript"]
  },
  
  
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Headings  title='My Projects'/>

      <div className='grid gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center '>
        {data.map((el) => (<Card
        
        key={el.id}
        title={el.tittle}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
      

        />))}
      </div>
      
    </div>
  )
}

export default Projects
