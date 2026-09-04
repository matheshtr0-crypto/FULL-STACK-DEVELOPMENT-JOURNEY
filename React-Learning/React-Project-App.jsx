// ============================================================

import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

import "./index.css";


// ============================================================
// 01. BASIC REACT COMPONENT
// ============================================================

function BasicComponent() {
  return (
    <div>
      <h1>Hello React</h1>
      <p>Learning React step by step</p>
    </div>
  );
}


// ============================================================
// 02. JSX
// ============================================================

function JSXExample() {
  const name = "Mathesh";
  const age = 21;

  return (
    <div>
      <h1>Hello {name}</h1>
      <p>Age: {age}</p>
    </div>
  );
}


// ============================================================
// 03. IMPORT / EXPORT
// ============================================================

function ExportExample() {
  return (
    <h2>Import and Export Example</h2>
  );
}

export { ExportExample };


// ============================================================
// 04. PROPS
// ============================================================

function StudentCard({ name, age, course }) {
  return (
    <div className="card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Course: {course}</p>
    </div>
  );
}

function PropsExample() {
  return (
    <div>
      <StudentCard
        name="Mathesh"
        age={21}
        course="Full Stack Development"
      />

      <StudentCard
        name="Arun"
        age={22}
        course="React"
      />
    </div>
  );
}


// ============================================================
// 05. IMAGE
// ============================================================

function ImageExample() {
  return (
    <div>
      <img
        src="https://via.placeholder.com/300"
        alt="React Example"
        width="300"
      />
    </div>
  );
}


// ============================================================
// 06. CSS
// ============================================================

function CSSExample() {
  return (
    <div className="card">
      <h2>CSS in React</h2>
      <p>This element uses a CSS class.</p>
    </div>
  );
}


// ============================================================
// 07. TAILWIND CSS
// ============================================================

function TailwindExample() {
  return (
    <div className="bg-black text-white p-5 rounded-lg">
      <h2 className="text-2xl font-bold">
        Tailwind CSS
      </h2>

      <p className="mt-2">
        Utility classes are used for styling.
      </p>
    </div>
  );
}


// ============================================================
// 08. useState
// ============================================================

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
      >
        Decrease
      </button>
    </div>
  );
}


// ============================================================
// 09. INPUT + onChange
// ============================================================

function InputExample() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
        placeholder="Enter your name"
      />

      <p>Hello {name}</p>
    </div>
  );
}


// ============================================================
// 10. EVENTS
// ============================================================

function EventExample() {
  function handleClick() {
    alert("Button clicked");
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}


// ============================================================
// 11. ARRAY
// ============================================================

function ArrayExample() {
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
  ];

  return (
    <div>
      <h2>Fruits</h2>

      <p>{fruits[0]}</p>
      <p>{fruits[1]}</p>
      <p>{fruits[2]}</p>
      <p>{fruits[3]}</p>
    </div>
  );
}


// ============================================================
// 12. map()
// ============================================================

function MapExample() {
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange"
  ];

  return (
    <div>
      {fruits.map((fruit, index) => (
        <p key={index}>
          {fruit}
        </p>
      ))}
    </div>
  );
}


// ============================================================
// 13. filter()
// ============================================================

function FilterExample() {
  const numbers = [
    1, 2, 3, 4,
    5, 6, 7, 8
  ];

  const evenNumbers =
    numbers.filter(
      (number) => number % 2 === 0
    );

  return (
    <div>
      {evenNumbers.map((number) => (
        <p key={number}>
          {number}
        </p>
      ))}
    </div>
  );
}


// ============================================================
// 14. find()
// ============================================================

function FindExample() {
  const students = [
    { id: 1, name: "Mathesh" },
    { id: 2, name: "Arun" },
    { id: 3, name: "Kumar" }
  ];

  const student =
    students.find(
      (item) => item.id === 2
    );

  return (
    <h2>
      Found: {student.name}
    </h2>
  );
}


// ============================================================
// 15. OBJECT
// ============================================================

function ObjectExample() {
  const student = {
    name: "Mathesh",
    age: 21,
    course: "React"
  };

  return (
    <div>
      <h2>{student.name}</h2>
      <p>{student.age}</p>
      <p>{student.course}</p>
    </div>
  );
}


// ============================================================
// 16. OBJECT + ARRAY
// ============================================================

function ObjectArrayExample() {
  const student = {
    name: "Mathesh",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React"
    ]
  };

  return (
    <div>
      <h2>{student.name}</h2>

      {student.skills.map(
        (skill, index) => (
          <p key={index}>
            {skill}
          </p>
        )
      )}
    </div>
  );
}


// ============================================================
// 17. CONDITIONAL RENDERING
// ============================================================

function ConditionalExample() {
  const [isLoggedIn, setIsLoggedIn] =
    useState(false);

  return (
    <div>
      {isLoggedIn ? (
        <h2>Welcome Mathesh</h2>
      ) : (
        <h2>Please Login</h2>
      )}

      <button
        onClick={() =>
          setIsLoggedIn(!isLoggedIn)
        }
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    </div>
  );
}


// ============================================================
// 18. ADD DATA USING useState
// ============================================================

function AddExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function addItem() {
    if (input.trim() === "") {
      return;
    }

    setList([
      ...list,
      input
    ]);

    setInput("");
  }

  return (
    <div>
      <input
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <button onClick={addItem}>
        Add
      </button>

      {list.map((item, index) => (
        <p key={index}>
          {item}
        </p>
      ))}
    </div>
  );
}


// ============================================================
// 19. DELETE DATA
// ============================================================

function DeleteExample() {
  const [list, setList] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  function deleteItem(index) {
    const newList =
      list.filter(
        (_, i) => i !== index
      );

    setList(newList);
  }

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <span>{item}</span>

          <button
            onClick={() =>
              deleteItem(index)
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}


// ============================================================
// 20. EDIT / UPDATE DATA
// ============================================================

function EditExample() {
  const [list, setList] = useState([
    "HTML",
    "CSS",
    "JavaScript"
  ]);

  function editItem(index) {
    const newValue =
      prompt(
        "Enter new value",
        list[index]
      );

    if (newValue !== null) {
      const updatedList =
        [...list];

      updatedList[index] =
        newValue;

      setList(updatedList);
    }
  }

  return (
    <div>
      {list.map((item, index) => (
        <div key={index}>
          <span>{item}</span>

          <button
            onClick={() =>
              editItem(index)
            }
          >
            Edit
          </button>
        </div>
      ))}
    </div>
  );
}


// ============================================================
// 21. CRUD
// ============================================================

function CRUDExample() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  function addItem() {
    if (input.trim() === "") {
      return;
    }

    setList([
      ...list,
      input
    ]);

    setInput("");
  }

  function editItem(index) {
    const newValue =
      prompt(
        "Edit item",
        list[index]
      );

    if (newValue !== null) {
      const updatedList =
        [...list];

      updatedList[index] =
        newValue;

      setList(updatedList);
    }
  }

  function deleteItem(index) {
    const newList =
      list.filter(
        (_, i) => i !== index
      );

    setList(newList);
  }

  return (
    <div>

      <h2>CRUD Example</h2>

      <input
        value={input}
        onChange={(e) =>
          setInput(e.target.value)
        }
      />

      <button onClick={addItem}>
        Add
      </button>

      {list.map((item, index) => (
        <div key={index}>

          <span>{item}</span>

          <button
            onClick={() =>
              editItem(index)
            }
          >
            Edit
          </button>

          <button
            onClick={() =>
              deleteItem(index)
            }
          >
            Delete
          </button>

        </div>
      ))}

    </div>
  );
}


// ============================================================
// 22. useEffect
// ============================================================

function EffectExample() {
  const [count, setCount] =
    useState(0);

  useEffect(() => {
    console.log(
      "Count changed:",
      count
    );
  }, [count]);

  return (
    <div>
      <h2>{count}</h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Increase
      </button>
    </div>
  );
}


// ============================================================
// 23. REACT ROUTER
// ============================================================

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}


// ============================================================
// 24. ROUTES
// ============================================================

function About() {
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}


// ============================================================
// 25. ROUTE
// ============================================================

function Contact() {
  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
}


// ============================================================
// 26. LINK
// ============================================================

function Navbar() {
  return (
    <nav>

      <Link to="/">
        Home
      </Link>

      <Link to="/about">
        About
      </Link>

      <Link to="/contact">
        Contact
      </Link>

    </nav>
  );
}


// ============================================================
// 27. useNavigate
// ============================================================

function NavigateExample() {
  const navigate =
    useNavigate();

  function goHome() {
    navigate("/");
  }

  return (
    <button onClick={goHome}>
      Go Home
    </button>
  );
}


// ============================================================
// 28. REUSABLE COMPONENT
// ============================================================

function Card({ title, description }) {
  return (
    <div className="card">

      <h2>{title}</h2>

      <p>{description}</p>

    </div>
  );
}

function ReusableExample() {
  return (
    <div>

      <Card
        title="React"
        description="JavaScript UI library"
      />

      <Card
        title="Node.js"
        description="JavaScript runtime"
      />

    </div>
  );
}


// ============================================================
// 29. MOVIE UI
// ============================================================

function MovieCard({ movie }) {
  return (
    <div className="card">

      <h2>{movie.title}</h2>

      <p>
        Category: {movie.category}
      </p>

      <p>
        Year: {movie.year}
      </p>

      <p>
        Rating: {movie.rating}
      </p>

    </div>
  );
}

function MovieExample() {
  const movies = [
    {
      id: 1,
      title: "Vikram",
      category: "Action",
      year: 2022,
      rating: 8
    },
    {
      id: 2,
      title: "Jailer",
      category: "Action",
      year: 2023,
      rating: 7
    }
  ];

  return (
    <div>

      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
        />
      ))}

    </div>
  );
}


// ============================================================
// 30. SEARCH
// ============================================================

function SearchExample() {
  const movies = [
    "Vikram",
    "Jailer",
    "Leo",
    "Master"
  ];

  const [search, setSearch] =
    useState("");

  const filteredMovies =
    movies.filter((movie) =>
      movie
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (
    <div>

      <input
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        placeholder="Search movie"
      />

      {filteredMovies.map(
        (movie) => (
          <p key={movie}>
            {movie}
          </p>
        )
      )}

    </div>
  );
}


// ============================================================
// 31. CATEGORY FILTER
// ============================================================

function CategoryExample() {
  const movies = [
    {
      title: "Vikram",
      category: "Action"
    },
    {
      title: "Jailer",
      category: "Action"
    },
    {
      title: "Movie 3",
      category: "Comedy"
    }
  ];

  const [category, setCategory] =
    useState("All");

  const filteredMovies =
    movies.filter((movie) =>
      category === "All"
        ? true
        : movie.category === category
    );

  return (
    <div>

      <select
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >

        <option value="All">
          All
        </option>

        <option value="Action">
          Action
        </option>

        <option value="Comedy">
          Comedy
        </option>

      </select>

      {filteredMovies.map(
        (movie) => (
          <p key={movie.title}>
            {movie.title}
          </p>
        )
      )}

    </div>
  );
}


// ============================================================
// 32. API FETCH + HTTP METHODS
// ============================================================

function APIExample() {

  const [data, setData] =
    useState([]);

  // GET
  function getData() {

    fetch(
      "http://localhost:3000/userData"
    )
      .then((response) =>
        response.json()
      )
      .then((result) =>
        setData(result)
      )
      .catch((error) =>
        console.log(error)
      );
  }


  // POST
  function addData() {

    fetch(
      "http://localhost:3000/userData",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          name: "Mathesh",
          course: "React"
        })
      }
    )
      .then((response) =>
        response.json()
      )
      .then((result) =>
        console.log(result)
      );
  }


  // PUT
  function updateData() {

    fetch(
      "http://localhost:3000/userData/1",
      {
        method: "PUT",

        headers: {
          "Content-Type":
            "application/json"
        },

        body: JSON.stringify({
          name: "Mathesh Updated",
          course: "React"
        })
      }
    )
      .then((response) =>
        response.json()
      )
      .then((result) =>
        console.log(result)
      );
  }


  // DELETE
  function deleteData() {

    fetch(
      "http://localhost:3000/userData/1",
      {
        method: "DELETE"
      }
    )
      .then((response) =>
        response.json()
      )
      .then((result) =>
        console.log(result)
      );
  }


  return (
    <div>

      <button onClick={getData}>
        GET
      </button>

      <button onClick={addData}>
        POST
      </button>

      <button onClick={updateData}>
        PUT
      </button>

      <button onClick={deleteData}>
        DELETE
      </button>

      {data.map((item) => (
        <p key={item.id}>
          {item.name}
        </p>
      ))}

    </div>
  );
}


// ============================================================
// 33. SIMPLE REACT PROJECT - BURGER HOUSE
// ============================================================

function BurgerCard({ name, price }) {
  return (
    <div className="card">

      <h2>{name}</h2>

      <p>
        Burger Price: ₹{price}
      </p>

      <button>
        Order Now
      </button>

    </div>
  );
}

function BurgerHouse() {

  return (
    <div>

      <header className="bg-orange-500 p-5">

        <h1>
          Burger House
        </h1>

        <nav>

          <Link to="/">
            Home
          </Link>

          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>

        </nav>

      </header>


      <section className="p-10 text-center">

        <h1>
          The Best Burger
          In Your City
        </h1>

        <p>
          Fresh, Hot and Delicious
        </p>

        <button>
          Order Now
        </button>

      </section>


      <section className="p-10">

        <h2>
          Our Specials
        </h2>

        <div>

          <BurgerCard
            name="Classic Burger"
            price="199"
          />

          <BurgerCard
            name="Cheese Burger"
            price="249"
          />

          <BurgerCard
            name="Spicy Burger"
            price="229"
          />

        </div>

      </section>


      <section className="p-10">

        <h2>
          Why Choose Us?
        </h2>

        <p>
          Fresh Ingredients
        </p>

        <p>
          Fast Delivery
        </p>

        <p>
          Quality Food
        </p>

      </section>


      <section className="p-10">

        <h2>
          About Burger House
        </h2>

        <p>
          We serve fresh and delicious
          burgers using quality ingredients.
        </p>

      </section>


      <section className="p-10">

        <h2>
          Contact
        </h2>

        <p>
          Email: burgerhouse@example.com
        </p>

        <p>
          Phone: 9876543210
        </p>

      </section>

    </div>
  );
}


// ============================================================
// ROUTER APPLICATION
// ============================================================

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<BurgerHouse />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/contact"
          element={<Contact />}
        />

      </Routes>

    </BrowserRouter>
  );
}


export default App;