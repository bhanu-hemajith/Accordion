import { useState } from "react"

export const Accordion = ({accordionData}) => {

    const [accordionID, setaccordionID] = useState([])
    
    
    const handleAccordion = (id)=>{
        setaccordionID([id])
    }

    console.log(accordionID,"--accordianID");

  return (
    <div className="accordion">
        <div className="accordions">
            <h2>FAQ Accordion</h2>
            {
                accordionData?.map(({id,title,content})=>(
                    
                    <div className="accordion-main" key={id}>
                        <div className="accordion-title" onClick={()=>handleAccordion(id)}>
                            <h3>{title}</h3>
                            <span className="material-symbols-outlined">add</span>

                        </div>
                        {
                            accordionID?.map((accord_id,index)=>(
                                accord_id === id && (<div className="accordion-content" key={index}>
                                    <p>{content}</p>
                                </div>)
                                
                            ))
                            
                        }

                    </div>
                ))
            }
        </div>
        
    </div>
  )
}

