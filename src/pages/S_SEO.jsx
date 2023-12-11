import Navbar from '../components/Navbar'
import Intro1 from "../assets/SEO/intro.jpg" ;
import Community from "../assets/SEO/icon.jpg" ;
import { useEffect } from 'react';


import Analysis_1 from "../assets/SEO/Analysis-1.png"
import Analysis_2 from "../assets/SEO/Analysis-2.png"
import Analysis_3 from "../assets/SEO/Analysis-3.png"
import Analysis_4 from "../assets/SEO/Analysis-4.png"
import Analysis_5 from "../assets/SEO/Analysis-5.png"
import Analysis_6 from "../assets/SEO/Analysis-6.png"
import Analysis_7 from "../assets/SEO/Analysis-7.png"
import Analysis_8 from "../assets/SEO/Analysis-8.png"
import Analysis_9 from "../assets/SEO/Analysis-9.png"


import Icon_1 from "../assets/SEO/SEO-1.png"
import Icon_2 from "../assets/SEO/SEO-2.png"
import Icon_3 from "../assets/SEO/SEO-3.png"
import Icon_4 from "../assets/SEO/SEO-4.png"
import Icon_5 from "../assets/SEO/SEO-5.png"
import Icon_6 from "../assets/SEO/SEO-6.png"
  import OnePlatform from '../components/OnePlatform';
import OneProcess from '../components/OneProcess';
import OneWhy from '../components/OneWhy';
import Clients from '../components/Clients';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

import seo_process_1 from "../assets/SEO/seo-process-1.jpg"
import seo_process_2 from "../assets/SEO/seo-process-2.jpg"
import seo_process_3 from "../assets/SEO/seo-process-3.jpg"
import seo_process_4 from "../assets/SEO/seo-process-4.jpg"
import seo_process_5 from "../assets/SEO/seo-process-5.jpg"
import Animation from '../components/helpers/Animation';
import Pattern1, { Divider, Pattern2, Pattern3 } from '../components/patterns/Pattern1';


const OUR_SEO = [
  {classn :" "            , img:Icon_1 , title:"Keyword Research"   , desc:" Our team conducts in-depth research to determine the most effective and high-traffic keywords to target for your website. By strategically selecting these keywords, we can boost your website's visibility and attract more visitors."},
  {classn :" " , img:Icon_2 , title:" On-Page SEO  "     , desc:" We use on-page SEO to optimize your website for search engines and users. Our approach prioritizes user-friendly language and concise sentences to ensure clarity and flow. We avoid technical jargon and use everyday language in active voice to enhance clarity. "},
  {classn :" different" , img:Icon_3 , title:" Off-Page SEO"      , desc:" Our Off-Page SEO service builds high-quality backlinks to increase your website's credibility. We use simple language, short sentences, and the active voice. We haven't changed the meaning or removed any important information."},
  {classn :" " , img:Icon_4 , title:" Content Marketing" , desc:" We create engaging content that meets our audience's unique needs. Our writing is direct, concise, and uses simple words, active voice, and a logical order."},
  {classn :" " , img:Icon_5 , title:" Local SEO"         , desc:" For businesses with a local presence, we optimize your website for local search, ensuring you're found by potential customers in your area.  "},
  {classn :" " , img:Icon_6 , title:" Technical SEO"     , desc:" Our Technical SEO Optimization service is designed to enhance your website's performance and search engine visibility. We understand the importance of technical SEO in achieving higher rankings and improving user experience."},
]

const PROCESS = [ 
  {img:Analysis_1 , classn:" " , title:"Website Analysis"         , desc:"We start with a comprehensive analysis of your website's current performance, including an audit of on-page and technical elements, keyword ranking, and competitor benchmarking. " },
  {img:Analysis_2 , classn:" " , title:"Keyword Research"        , desc:"Our SEO specialists conduct thorough keyword research to identify relevant and valuable terms. This ensures alignment with your goals and audience search intent." },
  {img:Analysis_3 , classn:" " , title:"On-Page Optimization"     , desc:"Our team optimizes on-page elements, including meta tags, content, headings, and images, to enhance user experience and engagement." },
  {img:Analysis_4 , classn:" " , title:"Technical SEO"            , desc:"We ensure your website's technical aspects are in perfect order, including improving site speed and mobile-friendliness, fixing crawl errors, and enhancing security, creating a solid technical foundation." },
  {img:Analysis_5 , classn:" " , title:"Content Strategy"         , desc:"Content is king, and our content strategists work closely with our SEO experts to create high-quality, SEO-friendly content. We develop informative blog posts, landing pages, and other valuable resources that not only rank well but also resonate with your audience." },
  {img:Analysis_6 , classn:"" , title:"Link Building"            , desc:"Building high-quality backlinks is a vital part of SEO. We secure authoritative, relevant links that strengthen your website's authority and trustworthiness in the eyes of search engines." },
  {img:Analysis_7 , classn:"" , title:"Monitoring and Reporting" , desc:"We continuously monitor your SEO campaign's performance. Regular reporting keeps you informed about your progress and the impact of our strategies. " },
  {img:Analysis_8 , classn:"" , title:"Ongoing Optimization"     , desc:"SEO is an ongoing process. As search engines evolve, so do our strategies. We adapt to the latest trends and algorithms, ensuring your website remains at the forefront of search engine results." },
  {img:Analysis_9 , classn:"" , title:"Results and Growth"       , desc:"With our data-driven approach, you'll see your website's organic traffic and rankings improve over time. Your online presence will continue to grow, driving more leads and conversions for your business " },
]
const WHY_MRM = [
  {img:seo_process_1 , classn:"hidden-img", title:"Profound Expertise "        , desc:"Our SEO team has extensive experience and knowledge in the field, allowing them to navigate SEO intricacies and deliver outstanding results."},
  {img:seo_process_2 , classn:"hidden-img", title:"Transparent Communication " , desc:"We maintain clear and transparent communication throughout our partnership. You will be kept updated on our strategies, progress, and their impact on your business, ensuring you are with us every step of the way.."},
  {img:seo_process_3 , classn:"hidden-img", title:"Creative Problem Solvers"   , desc:"SEO is not just a technical endeavor; it requires creative problem-solving. Our team approaches each project with innovation and a determination to overcome challenges, ensuring your SEO strategy is effective and adaptable."},
  {img:seo_process_4 , classn:"hidden-img", title:"Data-Driven Strategies "    , desc:"We rely on data-driven insights to formulate SEO strategies, allowing us to pinpoint opportunities, measure performance, and continuously refine our approach for optimal outcomes."},
  {img:seo_process_5 , classn:"hidden-img", title:"Customized Solutions "      , desc:"We understand that each business is unique, and our SEO strategies are tailored to your specific needs, business goals, target audience, and industry. This customized approach ensures that we deliver results that align with your unique requirements."},
]
const S_SEO = () => {


  return (
    <div className='M_SEO landing'>
      <div className="container"> <Navbar /> </div>
      <Animation />
      <div className="coverIntro"> <img src={Intro1} alt="" /></div>

      <div className="home">
          <div className="container">
              <div className="boxImg hidden-img" >  <img src={Community} alt="" /> </div>
              <div className="boxs " >
                  <h2 className="h1 hidden-text" data-aos="fade-left">Unlock the full potential of your website with SEO services</h2>
                  <p className="h2 hidden-text" data-aos="fade-left">Improve your website's visibility and ranking on search engines with our professional SEO solutions </p>
                  <p className="p hidden-text" data-aos="fade-left"> Having a strong online presence is crucial in today's fast-paced digital world. Your website's ability to stand out and capture your audience's attention can make all the difference between success and obscurity. It's not enough to simply exist online - your website must captivate your audience and drive your business forward.</p>
            </div>
        </div>
      </div>

      <Divider classn="divider" />
      <div className="quotation">
        <Pattern1 />
        <div className="container">
              <div className="h2 hidden-text" data-aos="fade-up"> Maximizing SEO Impact with MRM at Your Website </div>
              <p className="h3 " data-aos="fade-up"> We don't just talk about our commitment to SEO in Dubai, UAE, we take action to prove it. Our main goal is to help businesses succeed in the digital world, so we offer customized local SEO services that meet their unique needs. Our unwavering promise to secure a top ranking on Google's first page makes us different, ensuring that your business stands out in the highly competitive world of local search.</p>
        </div>
        </div>

        <Divider classn="divider-left" />
      <div className="platforms">
        <Pattern3 />
          <div className="container">
              <h3 className="h1 hidden-text clip" data-aos="fade-left">Our SEO Services </h3>
              <div className="boxs">
                  {
                    OUR_SEO.map((e,index)=> (
                      <OnePlatform key={index} classn={`${e.classn} box-${index+1}`} img={e.img} title={e.title}   paragraph={e.desc} />
                    ))
                  }
              </div>
          </div>
      </div>

      <Divider classn="divider" />

      <div className="process3">
        <Pattern2 />
        <div className="h1 hidden-text clip" data-aos="fade-left">Our proccess</div>
          <div className="container">
              <div className="box box1">
                  <OneProcess num="1" classn={PROCESS[0].classn} img={PROCESS[0].img} title={PROCESS[0].title} paragraph={PROCESS[0].desc} />
                  <OneProcess num="2" classn={PROCESS[1].classn} img={PROCESS[1].img} title={PROCESS[1].title} paragraph={PROCESS[1].desc} />
                  <OneProcess num="3" classn={PROCESS[2].classn} img={PROCESS[2].img} title={PROCESS[2].title} paragraph={PROCESS[2].desc} />
                  <OneProcess num="4" classn={PROCESS[3].classn} img={PROCESS[3].img} title={PROCESS[3].title} paragraph={PROCESS[3].desc} />
                  <OneProcess num="5" classn={PROCESS[4].classn} img={PROCESS[4].img} title={PROCESS[4].title} paragraph={PROCESS[4].desc} />
              </div>
              <div className="box box2">
                  <OneProcess num="6" classn={PROCESS[5].classn} img={PROCESS[5].img} title={PROCESS[5].title} paragraph={PROCESS[5].desc} />
                  <OneProcess num="7" classn={PROCESS[6].classn} img={PROCESS[6].img} title={PROCESS[6].title} paragraph={PROCESS[6].desc} />
                  <OneProcess num="8" classn={PROCESS[7].classn} img={PROCESS[7].img} title={PROCESS[7].title} paragraph={PROCESS[7].desc} />
                  <OneProcess num="9" classn={PROCESS[8].classn} img={PROCESS[8].img} title={PROCESS[8].title} paragraph={PROCESS[8].desc} />
              </div>
          </div>
    </div>


    <Divider classn="divider-left" />
    <div className="WHY">
        <Pattern3 />
      <div className="h1 clip hidden-text"> Why MRM Team excels in SEO? </div>
      <div className="container">
        {
          WHY_MRM.map((e,index)=> (
            <OneWhy key={index} img={e.img} title={e.title} desc={e.desc} classn={`${e.classn} one-why-${index+1}`} />
          ))
        }
      </div>
    </div>

    <Footer />


    </div>
  )
}

export default S_SEO