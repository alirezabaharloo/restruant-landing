



export default function Li({ children, ...props }){
  return (
    <li className="[&:not(:first-child)]:text-gray1 [&:not(:first-child)]:text-medium first:text-red1 first:font-semibold" {...props}>
        <a href="#">{children}</a>
    </li>
  )
}