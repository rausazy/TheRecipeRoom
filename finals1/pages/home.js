import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import HEART from '../public/assets/HEART.png'
import logo1 from '../public/assets/logo1.png'
import spoon from '../public/assets/spoonandfork.png'
import breakfast from '../public/assets/breakfast.jpg'
import lunch from '../public/assets/lunch.jpg'
import salad from '../public/assets/salad.jpg'
import dinner from '../public/assets/dinner.jpg'
import Link from "next/link";
import fs from 'fs';
import path from "path";



const inter = Inter({ subsets: ["latin"] });

export default function HomePage({recipe}) {
  return (
    <>
      <Head>
        <title>The Recipe Room</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="assets/logo1.png" />
     
      </Head>
      <section className="section1">
      <div className="container"> 
      <form>
        <div className="mobile">
            <div className="search-home">
                <input className="search-bar" type="search" placeholder="Search Recipes..."></input>
            </div>
            </div>
        </form>
        <h1 className="hometitle">Top 10 Recipes</h1>
        </div>

        <section className="recipe-section">
            {recipe && recipe.slice(0,5).map((recipes) => {
                return (

                    <Link className="recipe-boxes" 
                    href={`/view/${recipes.id}`}
                    key={recipes.id}>
                    <Image 
                        src = {`/recipics/${recipes.image1}`} 
                        alt=""
                        width='200'
                        height='100'
                    />
                    <h5 className="recipetitles">{recipes.Recipe_Name}</h5>
                    </Link>
                );
            })}
        </section>


        <div className="button">
          <Link className="viewmore" href="/recipes">View More</Link>
        </div>
      </section>

      <section className="section2">
        <div className="container2">
          <div className="heart">
            <Image 
              src= {HEART}
              alt="Heart"
              width='70'
              height='70'
            />
          </div>

          <div className="description-c2">
            <p>"Discover a world of culinary <br />inspiration with The Recipe Room, <br /> your ultimate recipe repository!"</p>
          </div>
          

          <div className="logo1">
            <Image 
              src={logo1}
              alt="The Recipe Room Logo (1)"
              width='200'
              height='150'
            />
          </div>
        </div>
      </section>

      <section className="section3">
        <div className="container3">
          <div className="spoon">
            <Image 
              src = {spoon}
              alt = "Spoon and Fork logo"
              width='70'
              height='70'
            />
          </div>

          <div className="latest">
            <h1 className="latestrecipes">Latest Recipes</h1>

            <div className="categories">
              <div className="category">
                <Image 
                  src ={breakfast}
                  alt = "Breakfast"
                  width='300'
                  height='350'
                />

                <div className="content">
                  <h1>Breakfast</h1>
                  <p>Start your day with a delightful and energizing breakfast experience that awakens your senses and fuels your body for the challenges ahead. Our breakfast offerings are a symphony of flavors, carefully curated to provide a perfect balance of nutrition and indulgence.</p>
                  <button className="viewmore-section3">View More</button>
                </div>
              </div>

              <div className="category">
                <Image 
                  src={lunch}
                  alt="Lunch"
                  width='300'
                  height='350'
                />
                <div className="content">
                  <h1>Lunch</h1>
                  <p>Savor the artistry of our skilled chefs as they transform simple ingredients <br/> into culinary masterpieces. Whether you're in the mood for a succulent <br/>grilled dish, a hearty pasta creation, or a light and refreshing wrap, our menu caters <br /> to every craving and culinary preference.</p>
                  <button className="viewmore-section3">View More</button>
                </div>
              </div>

              <div className="category">
                <Image 
                  src={salad}
                  alt="Salad"
                  width='300'
                  height='350'
                />

                <div className="content">
                  <h1>Salad</h1>
                  <p>Introducing our vibrant and enticing salads that redefine the art of freshness and flavor. Crafted with a meticulous blend of crisp, garden-fresh ingredients, each salad on our menu is a masterpiece designed to elevate your dining experience to new heights.</p>
                  <button className="viewmore-section3">View More</button>
                </div>
              </div>

              <div className="category">
                <Image 
                  src={dinner}
                  alt="Dinner"
                  width='300'
                  height='350'
                />

                <div className="content">
                  <h1>Dinner</h1>
                  <p>Experience an exquisite evening of culinary delight at our dining destination. Our dinner menu invites you to savor a symphony of flavors, expertly crafted to satisfy every palate.</p>    
                  <button className="viewmore-section3">View More</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const filePath = path.join(process.cwd(), "./pages/recipe.json");
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const data = JSON.parse(fileContent);

  console.log(data);
  return {
      props: {
          recipe: data,
      },
  };
}