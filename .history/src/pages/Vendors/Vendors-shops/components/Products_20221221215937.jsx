import React from 'react'
import { Data } from './Data';
import AddBoxOutlinedIcon from '@mui/icons-material/AddBoxOutlined';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';

const Products = () => {
  return (
    <div className='row gy my-3 gap'>
      {
        Data.map((m, id) => {
          return (
            <div className='col-sm-6 col-md-4 col-lg-3 full' >
              <div className="card" style={{ width: "18rem" }} >
                <img className="card-img-top" src={m.imgL} alt="Card image cap" />
                <div className="card-body">
                  <div className='display'>
                    <h5 className="card-title" style={{ backgroundColor: "white" }}>{m.title} </h5>
                    <StarBorderPurple500SharpIcon className='star' style={{ backgroundColor: "white" }} />
                  </div>
                  {/* <div className='colors'>
                      <img src='https://htmlcolorcodes.com/assets/images/colors/light-pink-color-solid-background-1920x1080.png' className='pink' />
                      <img src='https://htmlcolorcodes.com/assets/images/colors/purple-color-solid-background-1920x1080.png' className='purple' />
                      <img src='https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png' className='red' />
                      <img src='https://htmlcolorcodes.com/assets/images/colors/brown-color-solid-background-1920x1080.png' className='brown' />
                    </div> */}
                  <span className='stock'>In-Stock</span>
                  <p className="card-text" >{m.desc}</p>
                  {m.price}<AddBoxOutlinedIcon className='plus' style={{ backgroundColor: "white" }} />
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default Products
