// import home from './home/index'
import './home/index.css'
import './home/index.scss'

function get () {
  console.log('你好啊')
}

((doc) => {
  console.log(doc, 'sss')
  get()
  const app = doc.querySelector('#app')
  app.className = 'text'
  app && (app.innerHTML = '深刻的打瞌睡')
  const div = doc.createElement('div')
  div.innerHTML = '<span>span 标签</span>'
  div.className = 'box'
  app.appendChild(div)
  return app
})(document)

export {}