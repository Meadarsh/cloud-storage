import React, { useEffect, useState } from "react";
import "../style/card.css";
import CopyToClipboard from "react-copy-to-clipboard";
import Qrcode from "./Qrcode";
const Card = ({ data }) => {
  const image = "png gif jpg jpeg webp heif";
  const video ='mp4 mkv webm'
  const videoFormat =video.split(' ')
  const imageFormats = image.split(" ");
  const [style, setStyle] = useState("");
  const [styleStoke, setStyleStroke] = useState("stroke-white");
  const [size,setSize]=useState('')
  const [more,setMore]=useState(false)

  useEffect(() => {
    if ("pdf" == data.format) {
      setStyle("bg-pink-700 text-pink-600 ");
      setStyleStroke("stroke-pink-800");
    }
    if ("xlsx"== data.format||"xls"=== data.format) {
      setStyle("bg-emerald-900 text-green-600 ");
      setStyleStroke("stroke-emerald-950");
    }
    if ("ppt"== data.format||"pptx"=== data.format) {
      setStyle("bg-red-600 text-red-600 ");
      setStyleStroke("stroke-red-800");
    }
    if ("doc"== data.format||"docx"=== data.format) {
      setStyle("bg-blue-800 text-blue-600 ");
      setStyleStroke("stroke-blue-800");
    }
    if(data.size>=1048576){
        let sizeMb=((data.size/1024)/1024).toFixed(1);
        setSize(`${sizeMb}MB`)
    }
    if(data.size<1048576){
      let sizeKb=(data.size/1024).toFixed(1)
        setSize(`${sizeKb}KB`)
    }
  }, [data]);
 
  return (
    <div className={`card ${style}`}>
       
      {imageFormats.includes(data.format) ? (
        <img src={`${data.path}`}></img>
      ) : null}
      {
        videoFormat.includes(data.format)?(
        <video src={data.path} autoPlay muted loop></video>
        ):null
        }
     { more?<Qrcode data={data.path} id={data._id}/>:<div className="text">
     
        <span>{data.name}</span>
        <p className="subtitle">{data.createTime}</p>
        <h1>.{data.format}</h1>
        <h3>{size}</h3>
      </div>}
      <div className="icons">
        
        <a
          className="btn"
          href={data.path}
          download={`${data.name}.${data.format}`}
        >
          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            className={`svg-icon ${styleStoke}`}
          >
            <path
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              d="M31.8,64.5a14.5,14.5,0,0,1-3.2-28.7,17.5,17.5,0,0,1-.4-4,18.2,18.2,0,0,1,36-3.6h.3a18.2,18.2,0,0,1,3.7,36M39.1,75.4,50,86.3m0,0L60.9,75.4M50,86.3V42.7"
            ></path>
          </svg>
        </a>
        <CopyToClipboard text={data.path}>
        <a className="btn" href="#">
          <svg className={`svg-icon ${styleStoke}`} viewBox="0 0 20 20">
            <path d="M4.317,16.411c-1.423-1.423-1.423-3.737,0-5.16l8.075-7.984c0.994-0.996,2.613-0.996,3.611,0.001C17,4.264,17,5.884,16.004,6.88l-8.075,7.984c-0.568,0.568-1.493,0.569-2.063-0.001c-0.569-0.569-0.569-1.495,0-2.064L9.93,8.828c0.145-0.141,0.376-0.139,0.517,0.005c0.141,0.144,0.139,0.375-0.006,0.516l-4.062,3.968c-0.282,0.282-0.282,0.745,0.003,1.03c0.285,0.284,0.747,0.284,1.032,0l8.074-7.985c0.711-0.71,0.711-1.868-0.002-2.579c-0.711-0.712-1.867-0.712-2.58,0l-8.074,7.984c-1.137,1.137-1.137,2.988,0.001,4.127c1.14,1.14,2.989,1.14,4.129,0l6.989-6.896c0.143-0.142,0.375-0.14,0.516,0.003c0.143,0.143,0.141,0.374-0.002,0.516l-6.988,6.895C8.054,17.836,5.743,17.836,4.317,16.411"></path>
          </svg>
        </a>
        </CopyToClipboard>
        <a className="btn" href="#" onClick={()=>more?setMore(false):setMore(true)}>
          <svg
            y="0"
            xmlns="http://www.w3.org/2000/svg"
            x="0"
            width="100"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
            height="100"
            className={`svg-icon ${styleStoke}`}
          >
            <path
              strokeWidth="8"
              strokeLinejoin="round"
              strokeLinecap="round"
              fill="none"
              d="M21.9,50h0M50,50h0m28.1,0h0M25.9,50a4,4,0,1,1-4-4A4,4,0,0,1,25.9,50ZM54,50a4,4,0,1,1-4-4A4,4,0,0,1,54,50Zm28.1,0a4,4,0,1,1-4-4A4,4,0,0,1,82.1,50Z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
    
  );
};

export default Card;
