import React from 'react';
import {faqsData} from './data';
import Faq from './Faq';
import style from './faqs.module.css'

const Faqs = () => {
  return (
    <div className={style.container}>
      {faqsData.map((data)=><Faq key={data.id} {...data}/>)}
    </div>
  )
}

export default Faqs
