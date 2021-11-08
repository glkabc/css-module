import image from '../images/clock.png'
import style from './index.module.css'
// import style from './index.css'

function About () {

  return (
    <div className={style.box}>
      <img src={image} alt="这是一个图片" />
      <span>这是 about 下的 span 标签</span>
    </div>
  )
}

export default About