import React from 'react';
import './index.css';

const images = [
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
  "https://media.istockphoto.com/id/157590474/photo/indian-woman-standing-with-arms-folded-smiling.jpg?s=612x612&w=0&k=20&c=SwQsffdwaij9fT7IGqfs3JDsivZGXTNklDVH8HpTT7M=",
  "https://media.istockphoto.com/id/1220780604/photo/portrait-of-pensive-teenege-girl.jpg?s=612x612&w=0&k=20&c=5kt9doD4R976eJUbtX3CS8AQEFZkxP8UhVASQtjNR_Y=",
];

const CircularImageSlider = () => {
  return (
    <div className='main'>
      <div className="slider-container ">
        {images.map((image, index) => (
          <div key={index} className="slider-image" style={{ '--i': index }}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>

      <div className='slider-container1'>
        {images.map((image, index) => (
          <div key={index} className="slider-image1" style={{ '--i': index }}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className='slider-container2'>
        {images.map((image, index) => (
          <div key={index} className="slider-image2" style={{ '--i': index }}>
            <img src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularImageSlider;
