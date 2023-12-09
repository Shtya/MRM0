import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Pattern2, Pattern3, Pattern5 } from './patterns/Pattern1';

const services = [
  {route:"/social",     animate:"fade-up",  title:"social media marketing"       , icon:"clip  fa-solid fa-bullhorn "        ,desc:"Enhance your online presence with our social media management." ,                                                                 },
  {route:"/media",      animate:"fade-up",  title:"media buying"                 , icon:"clip  fa-solid fa-shop"             ,desc:"Maximize online reach with effective advertising. Optimize campaigns with social media and Google Ads."    ,                              },
  {route:"/web-design", animate:"fade-up",  title:"web design & Development "    , icon:"clip  fa-solid fa-pen-nib"          ,desc:"We transform your online presence with responsive web design, e-commerce solutions, and ongoing maintenance" ,                   },
  {route:"/seo",        animate:"fade-up",  title:"SEO "                         , icon:"clip  fa-solid fa-magnifying-glass" ,desc:"Drive organic traffic and secure top search engine rankings with our expert SEO services.  " ,                                     },
  {route:"/branding",   animate:"fade-up",  title:"Branding "                    , icon:"clip  fa-brands fa-connectdevelop"  ,desc:"A strong brand identity connects with your audience. Let our branding services help you create a resonant brand." ,                   },
  {route:"/signages",   animate:"fade-up",  title:"indoor and outdoor signages " , icon:"clip  fa-solid fa-signs-post"       ,desc:"Maximize brand visibility with our eye-catching indoor and outdoor advertising solutions." ,                                            },
  {route:"/exhibition", animate:"fade-up",  title:"exhibition display stands"    , icon:"clip  fa-solid fa-layer-group"      ,desc:"Enhance your physical presence at events with custom-designed exhibition stands creatively showcasing your products or services.  " , },
  {route:"/photography",animate:"fade-up",  title:"photography & videography "   , icon:"clip  fa-regular fa-circle-play"    ,desc:"We offer captivating visuals for your marketing. our high-quality images and videos tell a story that engages your audience." ,       },
  {route:"/gifts",      animate:"fade-up",  title:"cooperated gifts "            , icon:"clip  fa-solid fa-gift"             ,desc:"Discover our premium gifting options, including customized items and trophies, to make any occasion special." ,                       },
];

export function Services() {

  return (
    <>
    <section className='services' id='Services'>
       <Pattern2 />
       
       <h2 className='h1 clip hidden-text' >OUR SERVICES</h2> 
      
      <div className="container">
      <ul className='ul' >
        {services.map((e , index) => (
          <div key={index} className="box" data-aos={e.animate}>
            <div className="animate" ></div>
            <Link to={e.route}   >
              <Link to={e.route}><i className={`${e.icon} `}> <span />  <span /> </i> </Link>
              <h3 className='h2 clip hidden-text'>{e.title}</h3>
              <h4 className='p hidden-text'>{e.desc}</h4>
          </Link>
          </div>
        ))}
      </ul>
      </div>
    </section>
    </>
  );
}
