
import {motion} from 'framer-motion' ;
import Navbar from './Navbar';
import { Pattern7 } from './patterns/Pattern1';


const Landing = () => {

  return (
    <header  >
      <div className="container">
      <Navbar />
      <section id='home'>
        <div className="video" >
          <video autoPlay loop muted>
            <source src='ShowreelV010-1.m4v.mp4' type="video/mp4" />
          </video>
        </div>
        {/* <Pattern7 /> */}

      {/* <div className="text"  >
        <motion.h2  variants={Divvariant} initial="hidden" animate="visible" >{
          text.split("").map((e,index)=>(
            <motion.span variants={Pvariant}   key={index}>{e}</motion.span>
          ))
        } </motion.h2>
        <div className="box">
          <div className="Cover"><span></span>  <img src="./Quality.jpg" alt="" /></div>

          <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus neque ducimus ullam saepe harum earum quibusdam, excepturi in. Quae neque quasi dolores porro ratione ad, vel ipsum laudantium doloribus consequatur.</span>
        </div>
      </div> */}

        </section>
      </div>
      

    </header>
  )
}

export default Landing