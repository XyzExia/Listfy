import React from 'react';
import '../assets/css/app.css'

const Home = () => {

  return (
    <main>

      <div class="d-flex justify-content-center mt-5">
        <div class="row align-items-center justify-content-center">
          <div class="col">
            <h1 class='mx-auto '>
              Listfy
            </h1>
            <div>
              Keep Track Today
            </div>
          </div>
          <div class='col'>
            <p>
              Your Personal List.
            </p>
          </div>
        </div>

      </div>



      <div class="d-flex justify-content-center mt-5">
        <div class="row align-items-center justify-content-center">
          <p>
            Sign to start or login to continue
          </p>
        </div>

      </div>

      <div class="row align-items-center justify-content-center">
        <img src='https://static.vecteezy.com/system/resources/previews/003/510/336/non_2x/single-one-line-drawing-of-open-notepad-paper-back-to-school-minimalist-education-concept-continuous-simple-line-draw-style-design-graphic-illustration-vector.jpg'
        alt="Simple Note" class="picSize" >
        </img>
      </div>





    </main>
  );
};

export default Home;
