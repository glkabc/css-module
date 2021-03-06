declare module '*.svg'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.gif'
declare module '*.bmp'
declare module '*.tiff'

declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.module.sass' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.scss'
declare module '*.css' 
declare module '*.sass'
declare module '*.less'