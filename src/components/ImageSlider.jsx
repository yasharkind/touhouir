import { useEffect, useState } from "react";



function ImageSlider(props) {
  const [image, setImage] = useState(0);
  useEffect(() => {
	const interval = setInterval(() => {
	  setImage(prev => (prev + 1) % props.images.length)
	}, 3000);
	return () => clearInterval(interval);
  }, [])
  return (
    <>
	  <div className={`slider-container ${props.className}`}>
	  {props.images.map(img => (
		<img src={`${img}`} key={img} className='img-slider-img' style={{translate: `${image * -100}%`}}/>
	  ))}
	  </div>
    </>
  )
}

export default ImageSlider 
