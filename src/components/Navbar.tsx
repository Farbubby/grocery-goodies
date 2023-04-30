function Navbar() {
  return (
    <>
      <div className="flex w-full h-14 bg-red-400 border-b border-black">
        <div className="flex p-2 w-14 text-2xl font-bold items-center gap-x-2 mr-auto">
          <img src="./src/assets/logo.webp" alt="Logo"></img>
          Store
        </div>
        <div className="flex h-14 font-white font-bold items-center gap-x-9 mr-20">
          <div>Home</div>
          <div>About</div>
          <div>Purchase</div>
        </div>
      </div>
    </>
  )
}

export default Navbar
