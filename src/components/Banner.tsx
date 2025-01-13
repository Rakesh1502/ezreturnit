const Banner: React.FC = () => {
    return (
      <div className="banner">
        {/* Background image */}
        <img src="/path/to/image.jpg" alt="Banner" />
        
        {/* Content */}
        <div className="content">
          <h1>Start Saving with Ezshipit</h1>
          <p>
            Ezshipit is simple to set up and use daily. Join us to compare transparent, fully landed 
            shipping costs with no hidden fees or charges. Save instantly with exclusive discounted rates.
          </p>
        </div>
      </div>
    );
  };
  
  export default Banner;
  