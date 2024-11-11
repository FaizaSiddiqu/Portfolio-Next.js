import React from 'react';
import Headings from './Headings';
import Card from './Card';

const data = [
  {
    id: 0 ,
    tittle: "ToDo-List",
    desc: "A React and Typrscript based App for managing and organizing your tasks efficiently.",
    img: "/project_00.jpg",
    tags: ["React", "Node" , "CSS" , "Typescript"]
  },
  {
    id: 1 ,
    tittle: "Countown-Timer",
    desc: "A Next.js and Typescript powered website to track time with an interactive countown feature",
    img: "/project_00.jpg",
    tags: ["React", "Node" , "CSS" , "Typescript"]
  },
  {
    id: 2 ,
    tittle: "Weather Widget",
    desc: "A Next.js and Typrscript based App for fetching and displaying real-time weather data.",
    img: "/project_00.jpg",
    tags: ["React", "Node" , "CSS" , "Typescript"]
  },
  {
    id: 3 ,
    tittle: "Currency Convertor Project",
    desc: "A Simple HTML and Typescript powered tool for converting ciurrencies with real-time rates.",
    img: "/project_00.jpg",
    tags: ["React", "Node" , "CSS" , "Typescript"]
  },
  {
    id: 4,
    tittle: "Static Interactive Resume",
    desc: "A Typrscript based interactive Resume built with HTML and CSS ,allowing users to showcase their skills dynamically.",
    img: "/project_00.jpg",
    tags: ["React", "Node" , "CSS" , "Typescript"]
    
  },
  {
    id: 0 ,
    tittle: "Simple Calculator Projects",
    desc: "A React and Typrscript based App for managing and organizing your tasks efficiently.",
    img: "/project_00.jpg",
    tags: ["React", "Node" , "CSS" , "Typescript"]
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
