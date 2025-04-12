import restruntImage from '../../assets/pics/5cd0017f81f2c93398152929833720b4.png'


export default function Img(){
    return (
      <div className='h-[54px] bg-red1 w-[56px] flex justify-center items-center rounded-b-[0.3rem]'>
        <img src={restruntImage} alt="" className='scale-[75%]' />
      </div>
    )
}