import fleche from '../Assets/fleche_haut.png'
import { useState } from 'react'

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className={`collapse ${open ? 'open' : ''}`}>
        <h3 className="collapse_title" onClick={() => setOpen(!open)}>
          {title}
          <img
            className={`fleche ${open ? 'fleche_up' : 'fleche_down'}`}
            src={fleche}
            alt="content show "
          />
        </h3>
        <div className={open ? 'collapse_content' : 'collapse_content_hidden'}>
          {Array.isArray(content)
            ? content.map((item, index) => {
                return <p key={index}>{item}</p>
              })
            : content}
        </div>
      </div>
    </>
  )
}
