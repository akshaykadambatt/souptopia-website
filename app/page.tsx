import Image from "next/image";
import { CgMenu } from "react-icons/cg";
import { Menu } from "./menu";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Menu />
      <section className="first-section h-screen">
        <div className="image-container container mx-auto h-screen items-center justify-center  flex">
          <div className="hero-img relative h-[50%] w-[100%] md:w-[40%] pt-[40%]">
            <Image
              src="/food-one.jpg"
              alt="profile"
              objectFit="cover"
              fill
              className="w-full h-full top-0 left-0 object-cover rounded"
            />
          </div>
          <div className="image-text absolute md:static ml-[-2%] z-10 max-w-md">
            <p className="text-4xl font-bold mb-2">
              Roasted Butternut Squash Soup
            </p>
            <p className="text-sm mb-4">
              {`Oh yeah. It's the best part. It's crunchy, it's explosive, it's
              where the muffin breaks free of the pan and sort of does it's own
              thing. I'll tell you. That's a million dollar idea right there.
              Just sell the tops.`}
            </p>
            <div className="call-to-action">
              <button>
                Call to Action 1
              </button>
              <button>Call to Action 2</button>
            </div>
          </div>
        </div>
      </section>
      <section className="carousel">
        <div className="carousel">
          <div className="carousel-slide slide-outer">
            <a href="">
              <div className="slide-inner">
                {/* <img src="image1.jpg" alt="Image 1" /> */}
                <div className="carousel-caption">Caption 1</div>
              </div>
            </a>
          </div>

          <button className="carousel-prev">Prev</button>
          <button className="carousel-next">Next</button>
        </div>
      </section>
      <section className="newsletter"></section>
      <section className="instagram-images">
        <section className="instagram-section">
          {/* 
            .masonry {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 20px;
            }
            */}
          <div className="masonry">
            <div className="card">
              {/* <img src="image1.jpg" alt="Image 1" /> */}
              <h3>Card Title 1</h3>
              <p>Description for Card 1</p>
            </div>
          </div>
        </section>
      </section>
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      a<br />
      <footer>
        <div className="footer-logo">Footer Logo</div>
        <ul className="footer-links">
          <li>
            <a href="#">Link 1</a>
          </li>
          <li>
            <a href="#">Link 2</a>
          </li>
          <li>
            <a href="#">Link 3</a>
          </li>
        </ul>
      </footer>
    </main>
  );
}
