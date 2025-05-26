import { useEffect, useState } from "react";

let images = ["top1.jpg", "top2.jpg", "top3.jpg", "top4.jpg"]



function ImageSlider() {
  const [image, setImage] = useState(0);
  useEffect(() => {
	const interval = setInterval(() => {
	  setImage(prev => (prev + 1) % images.length)
	}, 3000);
	return () => clearInterval(interval);
  }, [])
  return (
    <>
	  <div className="slider-container">
	  {images.map(img => (
		<img src={`/slider/${img}`} key={img} className='img-slider-img' style={{translate: `${image * -100}%`}}/>
	  ))}
	  </div>
    </>
  )
}

export default ImageSlider 
