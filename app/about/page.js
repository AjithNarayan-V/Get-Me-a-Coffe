
const page = () => {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-2xl px-6 py-12 bg-white shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">About Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at elit in odio
          ultricies egestas sit amet eget quam. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia curae.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mt-4">
          Mauris lobortis sagittis ante, nec dictum metus dapibus non. Quisque eu convallis
          dolor, eget rhoncus ligula.
        </p>
      </div>
    </div></>
  )
}

export default page

export const metadata ={
    title: 'About-Get Me A Chai',
    description: 'About  Get ME A Chai'
  }

