const Banner: React.FC = () => {
    return (
      <div className="relative banner overflow-hidden">
        <img
          src="/path/to/image.jpg"
          alt="Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-4xl font-bold text-white">Returns made simple.</h1>
        </div>
      </div>
    );
  };
  
  export default Banner;
  