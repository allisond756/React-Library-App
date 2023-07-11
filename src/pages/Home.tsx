import Background from '../assets/bookshelf.jpg'

function Home() {
  return (
    <div style={{ backgroundImage: `url(${ Background })`}}
    className='flex flex-grow justify-center mx-auto bg-cover bg-fixed'
    >
      <div className='flex place-items-center h-screen'>
        <h3 className='p-5 font-semibold tracking-wider bg-amber-200 bg-opacity-60 border-2 border-amber-900 text-yellow-950 rounded'>Open Your BookVault</h3>
      </div>
    </div>
  )
}

export default Home