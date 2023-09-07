import fleche from '../Assets/fleche_haut.png'
import { useState } from 'react'

export default function Collapse({ title, content }) {
  const [open, setOpen] = useState(false)
  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={() => setOpen(!open)}>
          {title}
          <img
            className={open ? 'fleche fleche_up' : 'fleche fleche_down'}
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
