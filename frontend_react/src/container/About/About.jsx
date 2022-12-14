import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion';
import './About.scss';
import {urlFor, client} from '../../client'



const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query)
    .then((data) => setAbouts(data))
  }, []);
  return (
    <div>
      <h2 className='head-text'>
        I Know that 
        <span>Good Design</span>
        <br />
        means
        <span>Good Business</span>
      </h2>
      <div className='app__profiles'></div>
      {abouts.map((about, index) => (
        <motion.div
          whileInView={{opacity: 1}}
          whileHover={{scale: 1.1}}
          transition={{durtion: 0.1, type: 'tween'}}
          className="app__profile-item"
          key={about.title + index}
        >
          <img src={about.imgUrl} alt={about.title} />
          <h2 className='bold-text' style={{marginTop: 20}}>{about.title}</h2>
          <p className='p-text' style={{marginTop: 10}}>{about.description}</p>

        </motion.div>
      ))}
    </div>
  )
}

export default About
