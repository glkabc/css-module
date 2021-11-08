import image from '../images/clock.png'
import style from './index.module.scss'
// import style from './index.scss'

export default function () {

  return (
    <div className={style.box}>
      <img src={image} alt="" />
      <span>这是 home 下的 span 标签</span>
    </div>
  )
}