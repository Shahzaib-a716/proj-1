import React, { useEffect } from 'react';
 // Import custom styles for animations
 import { Link } from 'react-router-dom'; 
 
const Page = () => {
  // Handling dynamic behavior via useEffect
  useEffect(() => {
    const et_link_options_data = [
      { class: 'et_pb_row_1', url: 'https://hm.ez123.eu/robbie/test-home/', target: '_self' },
      { class: 'dnxte_text_animation_0', url: 'https://hm.ez123.eu/robbie/test-home/', target: '_self' }
    ];

    // Handle other JS behaviors
  }, []);

  return (
    <div
    className="min-h-screen bg-no-repeat bg-center bg-cover"
    style={{ backgroundImage: 'url(/assets/images/day.jpg)' }}
  >
      <div id="page-container">
        <div id="main-content">
          <article id="post-335594">
            <div className="entry-content">
              <div className="et-l et-l--post">
                <div className="et_builder_inner_content">
                  {/* Section with background image */}
                  <div
                    id="mozgó-bg2"
                    className="relative bg-cover h-[350px] overflow-hidden"
                    style={{ backgroundImage: 'url("/assets/images/Sky-scaled.webp")' }}
                  >
                    <div className=" inset-0 flex mt-10 justify-center items-center">
                      {/* Video Embed */}
                      <div className="w-full max-w-3xl">
                      
                      </div>
                    </div>
                  </div>

                  {/* Animated Heading */}
                  <div className="text-center mt-7 mb-11">
                    <h1 className="text-5xl font-bold text-gray-700 tracking-wider animation-bounce">
                    <Link to="/Home"> 
                        <span className="block">START THE ADVENTURE</span>
                      </Link>
                      <span className="text-black animation-fade-in text-6xl ">ClICK HERE</span> {/* Increased size */}
                    </h1>
                  </div>

                  {/* Footer text */}
                  <div className="text-center mt-8">
                    <p className="text-2xl text-white font-bold"> {/* Increased size */}
                      All Rights reserved • Service Hub by Total Mizers Ltd. Toronto, Ontario CANADA (416) 333.FAST (3278) • Copyright © 2016–2024 Les The Handyman.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </article>
        </div>
      
    </div>
    </div>
  );
};

export default Page;
