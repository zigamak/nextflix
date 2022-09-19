import "./ListItem.scss"
import {PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined, Add} from '@material-ui/icons'

const ListItem = () => {
  return (
    <div className="listItem">
      <img src="https://stat1.bollywoodhungama.in/wp-content/uploads/2020/01/Fast-And-Furious-9-The-Fast-Saga-English.jpg" alt="" />
    
    <div className="itemInfo">
      <div className="icons">
        <PlayArrow/>
        <Add/>
        <ThumbUpAltOutlined/>
        <ThumbDownAltOutlined/>

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
  </div>
  )
}

export default ListItem