



export default function Li({ children, ...props }){
  let liClasses = "[&:not(:first-child)]:text-gray1 [&:not(:first-child)]:text-medium first:text-red1 first:font-semibold"
  
  return (
    <li className={liClasses} {...props}>
        <a href="#">{children}</a>
    </li>
  )
}