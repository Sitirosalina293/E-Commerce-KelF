import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner=()=>{
  return (
    <Carousel>
      <div>
          <img src="https://marketplace.canva.com/EAE8oc_cuQI/1/0/1600w/canva-biru-putih-oranye-modern-promo-ramadhan-banner-Gp_Mv2kbUyY.jpg" />
      </div>
      <div>
          <img src="https://www.astralife.co.id/beta/wp-content/uploads/2016/03/Web-Banner-Customer-Day-1-Promo.jpg" />
      </div>
    </Carousel>
  )
}
export default Banner;