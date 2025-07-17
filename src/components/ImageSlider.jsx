import { useEffect, useRef, useState } from "react";



function ImageSlider(props) {
	const [image, setImage] = useState(0);
	var manual = useRef(false)
	const manualTimeout = useRef(null);
	useEffect(() => {
		const interval = setInterval(() => {
			if(!manual.current) setImage(prev => (prev + 1) % props.images.length)
		}, 3000);

		return () => clearInterval(interval);
	}, [])
	const handleManualNavigation = (direction) => {
		manual.current = true;

		if (manualTimeout.current) {
			clearTimeout(manualTimeout.current);
		}

		manualTimeout.current = setTimeout(() => {
			manual.current = false;
		}, 5000);

		setImage(prev =>
			direction === 'next'
				? (prev + 1) % props.images.length
				: (prev + props.images.length - 1) % props.images.length
		);
	};
	return (
		<>
			<div className={`slider-container ${props.className} relative`}>
				<button className="slider-button absolute h-[100px] bg-2 z-100 w-[64px] opacity-75 top-1/2 -translate-y-1/2" onClick={() => handleManualNavigation("prev")}>
					<img src="/slider/left.svg" className="color-1" />
				</button>
				<button className="slider-button absolute h-[100px] bg-2 color-2 opacity-75 z-100 w-[64px] top-1/2 -translate-y-1/2 right-0" onClick={() => handleManualNavigation("next")}>
					<img src="/slider/right.svg" className="color-1" />
				</button>
				{props.images.map(img => (
					<img src={`${img}`} key={img} className='img-slider-img' style={{ translate: `${image * -100}%` }} />
				))}
			</div>
		</>
	)
}

export default ImageSlider 
