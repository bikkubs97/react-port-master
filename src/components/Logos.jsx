import React from 'react';

export default function Logos() {
  return (
    <div className='logos'>
      <div
        style={{
          width: '380px', // Slightly bigger width
          height: '380px', // Slightly bigger height
          borderRadius: '50%',
          position: 'relative',
          margin: '100px',
        }}
      >
          <div
          style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '65px',
            height: '65px',
            marginTop: '-47.5px',
            marginLeft: '-47.5px',
            background: '#E4E4E4',
            borderRadius: '10%',
            textAlign: 'center',
            lineHeight: '95px',
            color: 'white',
            transform: 'rotate(180deg) translate(191px) rotate(-180deg)', // Slightly bigger translation
            backgroundImage: 'url("/images/mongo-db.png")', // Replace with your image path
            backgroundSize: 'cover',
          }}
        >
         
        </div>
        <div
          style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '65px', // Slightly bigger width
            height: '65px', // Slightly bigger height
            marginTop: '-47.5px', // half of the new height
            marginLeft: '-47.5px', // half of the new width
            background: '#E4E4E4',
            borderRadius: '10%',
            textAlign: 'center',
            lineHeight: '95px', // same as the new height
            color: 'white',
            transform: 'rotate(0deg) translate(191px) rotate(0deg)', // Slightly bigger translation
            backgroundImage: 'url("/images/tailwind.png")', // Replace with your image path
            backgroundSize: 'cover',
          }}
        >
         
        </div>
        <div
          style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '65px',
            height: '65px',
            marginTop: '-47.5px',
            marginLeft: '-47.5px',
            background: '#E4E4E4',
            borderRadius: '10%',
            textAlign: 'center',
            lineHeight: '95px',
            color: 'white',
            transform: 'rotate(90deg) translate(191px) rotate(-90deg)', // Slightly bigger translation
            backgroundImage: 'url("/images/react-inro.png")', // Replace with your image path
            backgroundSize: 'cover',
          }}
        >
     
        </div>
      
        <div
          style={{
            display: 'block',
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '65px',
            height: '65px',
            marginTop: '-47.5px',
            marginLeft: '-47.5px',
            background: '#E4E4E4',
            borderRadius: '10%',
            textAlign: 'center',
            lineHeight: '95px',
            color: 'white',
            transform: 'rotate(270deg) translate(191px) rotate(-270deg)', // Slightly bigger translation
            backgroundImage: 'url("/images/nodejs.png")', // Replace with your image path
            backgroundSize: 'cover',
          }}
        >
       
        </div>
      </div>
    </div>
  );
}
