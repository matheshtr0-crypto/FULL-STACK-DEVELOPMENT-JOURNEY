import BurgerLogo from "../assets/BurgerLogo.jpg";
import Burger from "../assets/Burger.jpg";

function BurgerHouse() {
  return (
    <div>

      {/* ================= NAVBAR ================= */}

      <nav className="h-[100px] bg-orange-500 flex items-center px-5 fixed top-0 left-0 w-full">

        <img
          src={BurgerLogo}
          alt="Burger House Logo"
          className="w-[80px] h-[80px] rounded-full"
        />

        <h1 className="text-3xl font-bold ml-4">
          Burger-House
        </h1>

        <div className="ml-auto flex gap-5">

          <button className="bg-black text-white rounded-full px-4 py-2">
            HOME
          </button>

          <button className="bg-black text-white rounded-full px-4 py-2">
            MENU
          </button>

          <button className="bg-black text-white rounded-full px-4 py-2">
            ABOUT
          </button>

          <button className="bg-black text-white rounded-full px-4 py-2">
            CONTACT
          </button>

        </div>

      </nav>


      {/* ================= HERO ================= */}

      <section className="h-[700px] pt-[150px] px-[100px]">

        <div className="flex items-center justify-between">

          <div>

            <h1 className="text-6xl font-bold">
              THE BEST BURGER
            </h1>

            <h1 className="text-6xl font-bold mt-5">
              IN YOUR CITY
            </h1>

            <p className="text-xl font-bold mt-8">
              --- Fresh * Hot * Delicious ---
            </p>

            <button className="bg-orange-600 text-white rounded-full px-6 py-3 text-xl font-bold mt-10">
              ORDER NOW
            </button>

          </div>

          <img
            src={Burger}
            alt="Burger"
            className="w-[500px] h-[400px] object-cover"
          />

        </div>

      </section>


      {/* ================= SPECIALS ================= */}

      <section className="border-4 border-black py-16">

        <h1 className="text-center text-4xl font-bold">
          OUR SPECIALS
        </h1>

        <div className="flex justify-center gap-10 mt-16">

          <BurgerCard
            title="Classic"
            price="₹199"
          />

          <BurgerCard
            title="Cheese"
            price="₹249"
          />

          <BurgerCard
            title="Spicy"
            price="₹229"
          />

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}

      <section className="py-16">

        <h1 className="text-center text-4xl font-bold">
          WHY CHOOSE US
        </h1>

        <div className="flex justify-center gap-20 mt-16">

          <Feature
            icon="🥩"
            title="Fresh"
          />

          <Feature
            icon="⚡"
            title="Fast"
          />

          <Feature
            icon="❤️"
            title="Quality"
          />

        </div>

      </section>


      {/* ================= ABOUT ================= */}

      <section className="bg-orange-100 py-16 text-center">

        <h1 className="text-4xl font-bold">
          ABOUT BURGER HOUSE
        </h1>

        <p className="max-w-2xl mx-auto mt-5">
          We serve fresh, hot and delicious burgers
          made with quality ingredients.
        </p>

      </section>


      {/* ================= CONTACT ================= */}

      <section className="py-16 text-center">

        <h1 className="text-4xl font-bold">
          CONTACT US
        </h1>

        <p className="mt-5">
          Email: burgerhouse@example.com
        </p>

        <p>
          Phone: 9876543210
        </p>

      </section>

    </div>
  );
}


// ======================================================
// BURGER CARD COMPONENT
// ======================================================

function BurgerCard({ title, price }) {
  return (
    <div className="border-4 border-black w-[250px] p-5 text-center">

      <img
        src={Burger}
        alt={title}
        className="w-[200px] h-[180px] object-cover mx-auto"
      />

      <h2 className="text-2xl font-bold mt-5">
        {title}
      </h2>

      <p className="text-xl mt-3">
        {price}
      </p>

    </div>
  );
}


// ======================================================
// FEATURE COMPONENT
// ======================================================

function Feature({ icon, title }) {
  return (
    <div className="text-center">

      <div className="text-5xl">
        {icon}
      </div>

      <h2 className="text-2xl font-bold mt-4">
        {title}
      </h2>

    </div>
  );
}

export default BurgerHouse;