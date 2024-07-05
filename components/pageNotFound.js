// components/PageNotFound.js

const PageNotFound = () => {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100 relative">
        {/* Background GIF */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/404.gif")', // Replace with your GIF path
            backgroundSize: '100% 100%', // Stretch to fill entire container
            backgroundRepeat: 'repeat-x', // Repeat horizontally if smaller than container width
          }}
        />
  
        {/* Content */}
        <div className="relative z-10 top-48 text-center text-gray-800">
          <h1 className="text-6xl font-bold">404</h1>
          <p className="text-xl mt-4">Oops! The page you are looking for could not be found.</p>
        </div>
      </div>
    );
  };
  
  export default PageNotFound;
  