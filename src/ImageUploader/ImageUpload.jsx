import React,{useState} from 'react'
// import img from "../../public/defaultImg"
export default function ImageUpload() {
  const [imageUrl, setImageUrl] = useState("/defaultImg.png")
    const handleChange=(e)=>{
        const fileUrl=e.target.files[0]
        const reader=new FileReader()
      reader.onload=()=>{
          if(reader.readyState===2){
                setImageUrl(reader.result)
          }
      }
      reader.readAsDataURL(fileUrl)
    }

    return (
     <React.Fragment>
           <form action="">
               <img style={{width:"20%",height:"60px",borderRadius:"50%"}} src={imageUrl} alt="" /><br/><br/>
               <input type="file" 
               style={{display:'none'}}  
               accept="/image"  onChange={handleChange} />
           </form>
         </React.Fragment>
    )
}
