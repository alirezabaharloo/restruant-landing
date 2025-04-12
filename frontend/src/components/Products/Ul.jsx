


export default function Ul({ component: Component, children, error, isFetching , componentProps, ...props }){
  return (
    <section {...props}>
      {
        error ? <div className='text-center'>{error}!</div> :
        isFetching || isFetching === null ? <div className='text-center'>Fetching data...</div> :
        (
          children.map((data, index)=>{
            return (
              <Component key={data.id} {...data} {...componentProps} />
            )
          })
        )
      }
        
    </section>
  );
}