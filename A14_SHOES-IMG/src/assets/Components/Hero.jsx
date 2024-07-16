export default function Hero() {
  return (
    <main className="Hero">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="hero-btns">
          <button>ShopNow</button>
          <button className="second">Category</button>
        </div>

        <div className="hero-shop">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/public/Images/flipkart.png" alt="Flipkart" />
            <img src="/public/Images/amazon.png" alt="Amazon" />
          </div>
        </div>
      </div>
      <div className="hero-shoes">
        <img src="/public/Images/shoe_image.png" alt="Shoe Image" />
      </div>
    </main>
  );
}
