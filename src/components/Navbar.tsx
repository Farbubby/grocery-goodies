function Navbar() {
  return (
    <>
      <div className="flex w-full h-14 bg-red-400 border-b border-black">
        <div className="flex p-2 w-14 text-2xl font-bold items-center gap-x-2 mr-auto">
          <img src="./src/assets/logo.webp" alt="Logo"></img>
          Store
        </div>
        <div className="flex h-14 font-white font-bold items-center gap-x-9 mr-20">
          <div className="hover:text-white">Home</div>
          <div className="hover:text-white">About</div>
          <div className="hover:text-white">Foods</div>
          <div className="hover:text-white">Cart</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
