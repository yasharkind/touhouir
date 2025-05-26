import { useEffect, useState } from "react";

let images = ["top1.jpg", "top2.jpg", "top3.jpg", "top4.jpg"]



function ImageSlider() {
	function shiftList(lst) {
	let last = images[lst.length - 1]
	let new_list = [last]
	for (let i = 0; i < lst.length - 1; i++)
		new_list.push(lst[i])
	console.log()
	return new_list
	}
  const [image, setImage] = useState(0);
  useEffect(() => {
	const interval = setInterval(() => {
	  if (image === images.length - 1){
		images = shiftList(images)
		setImage(prev => 0)
		console.log(images)
		return
	  }
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
