import React from 'react'
// import ecommerce from '../../assets/ecommerce.png'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block"/>readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">Get ready to embark on an electrifying shopping spree like never before, as Ecommerce presents an incredible extravaganza of huge sales! We believe in making every shopping experience unforgettable, and what better way to do that than by offering jaw-dropping discounts and irresistible deals on a wide range of products?
       <br /> <br />
       Join the excitement and take advantage of our incredible offers today! Don't miss out on this opportunity to indulge in the ultimate shopping spree and enjoy the satisfaction of finding incredible deals and saving big. Visit Ecommerce now and let the thrill of huge sales take your shopping experience to new heights!
</p>

      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">View Our Products</button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Learn More</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      {/* <img className="object-cover object-center rounded" alt="hero" src={ecommerce}/> */}
    </div>
  </div>
</section>
  )
}

export default Hero