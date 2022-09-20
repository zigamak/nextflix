import {useState} from 'react'
import "./ListItem.scss"
import {PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, Add} from '@material-ui/icons'

const ListItem = ({index}) => {
  const [isHovered,setIsHovered] = useState(false);
  const trailer =
  "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761";
  return (
    <div 
    className="listItem"
    style={{left:isHovered && index * 225-50 + index * 2.5}}
    onMouseEnter={()=>setIsHovered(true)} 
    onMouseLeave={()=>setIsHovered(false)}
    >
      <img src="https://stat1.bollywoodhungama.in/wp-content/uploads/2020/01/Fast-And-Furious-9-The-Fast-Saga-English.jpg" alt="" />
    {isHovered && (
      <>
    <video src={trailer}  autoPlay={true} loop />
    <div className="itemInfo">
      <div className="icons">
        <PlayArrow className="icon" />
        <Add className="icon"/>
        <ThumbUpAltOutlined className="icon"/>
        <ThumbDownAltOutlined className="icon"/>

      </div>
      <div className="itemInfoTop">
        <span>1 hour 14 Mins</span>
        <span className="limit" >+16</span> 
        <span>1999</span> 
      </div>
      <div className="desc">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus dicta aliquid nesciunt recusandae sed architecto numquam ea est quasi amet placeat beatae saepe voluptatum iste perferendis, ipsa magnam laudantium fugiat?
      </div>
      <div className="genre">
        Action 
      </div>      
    </div>
    </>
        )}
  </div>
  )
}

export default ListItem