import { useEffect, useState } from "react";
import { Link, Routes, Route, useParams, useNavigate } from "react-router-dom";
import Grace from "../assets/red.jpg";

const API = "http://localhost:3000";

// -------------------------------------------------- NAVBAR --------------------------------------------------

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">

        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-xl text-white">
            W
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">
              WANDERLY
            </h1>
            <p className="hidden text-[10px] tracking-[3px] text-slate-400 sm:block">
              TRAVEL YOUR WAY
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Home
          </Link>

          <Link
            to="/destinations"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            Explore
          </Link>

          <Link
            to="/trips"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            My Trips
          </Link>

          <Link
            to="/about"
            className="text-sm font-medium text-slate-600 transition hover:text-slate-950"
          >
            About
          </Link>

          <Link
            to="/login"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Login
          </Link>

        </div>

        <button
          onClick={() => setMenu(!menu)}
          className="rounded-lg border border-slate-200 px-3 py-2 md:hidden"
        >
          ☰
        </button>

      </div>

      {menu && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 md:hidden">

          <div className="flex flex-col gap-4">

            <Link onClick={() => setMenu(false)} to="/">
              Home
            </Link>

            <Link onClick={() => setMenu(false)} to="/destinations">
              Explore
            </Link>

            <Link onClick={() => setMenu(false)} to="/trips">
              My Trips
            </Link>

            <Link onClick={() => setMenu(false)} to="/about">
              About
            </Link>

            <Link
              onClick={() => setMenu(false)}
              to="/login"
              className="rounded-lg bg-slate-900 px-4 py-2 text-center text-white"
            >
              Login
            </Link>

          </div>

        </div>
      )}
    </nav>
  );
}



  // -------------------------------------------------- FOOTER --------------------------------------------------  


function Footer() {
  return (
    <footer className="mt-20 bg-slate-950 text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">

        <div>
          <h2 className="text-2xl font-bold">WANDERLY</h2>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Discover beautiful places, create meaningful journeys,
            and plan your next adventure with Wanderly.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Explore</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <Link to="/destinations">Destinations</Link>
            <Link to="/trips">Plan a Trip</Link>
            <Link to="/about">About Wanderly</Link>
          </div>
        </div>

        <div>
          <h3 className="font-semibold">Popular Regions</h3>

          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-400">
            <p>Tamil Nadu</p>
            <p>Kerala</p>
            <p>South India</p>
          </div>
        </div>

      </div>

      <div className="border-t border-slate-800 px-5 py-5 text-center text-sm text-slate-500">
        © 2026 Wanderly. Explore more. Travel better.
      </div>

    </footer>
  );
}



  // -------------------------------------------------- HOME --------------------------------------------------


function Home() {

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {

    fetch(`${API}/destinations`)
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.log(error));

  }, []);

  const popular = destinations.slice(0, 6);

  const categories = [
    {
      name: "Temples",
      icon: "🛕",
      text: "Ancient architecture & culture"
    },
    {
      name: "Hill Station",
      icon: "⛰️",
      text: "Cool weather & mountain views"
    },
    {
      name: "Waterfall",
      icon: "💧",
      text: "Nature, rivers & waterfalls"
    },
    {
      name: "Beach",
      icon: "🏖️",
      text: "Relax by the sea"
    }
  ];

  return (
    <div>

      {/* HERO */}

      <section className="relative min-h-[650px] overflow-hidden">

        <img
          src={Grace}
          alt="Travel landscape"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-slate-950/55"></div>

        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center px-5">

          <div className="max-w-3xl text-white">

            <p className="mb-5 text-sm font-semibold uppercase tracking-[4px] text-white/80">
              Discover • Plan • Wander
            </p>

            <h1 className="text-5xl font-bold leading-tight sm:text-6xl md:text-7xl">
              Go somewhere
              <span className="block text-slate-300">
                you have never been.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
              Discover breathtaking destinations across Tamil Nadu
              and Kerala. Find your next escape and build a trip
              that feels completely yours.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                to="/destinations"
                className="rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Explore destinations →
              </Link>

              <Link
                to="/trips"
                className="rounded-full border border-white/50 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Plan my trip
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* INTRO */}

      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="max-w-2xl">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-400">
            Find your kind of escape
          </p>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Travel isn't just about places.
            <span className="block text-slate-500">
              It's about how they make you feel.
            </span>
          </h2>

        </div>


        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (

            <Link
              key={category.name}
              to="/destinations"
              className="group rounded-2xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >

              <div className="text-4xl">
                {category.icon}
              </div>

              <h3 className="mt-6 text-lg font-bold text-slate-900">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                {category.text}
              </p>

              <p className="mt-5 text-sm font-semibold text-slate-900">
                Explore →
              </p>

            </Link>

          ))}

        </div>

      </section>


      {/* POPULAR DESTINATIONS */}

      <section className="bg-slate-100 py-20">

        <div className="mx-auto max-w-7xl px-5">

          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

            <div>

              <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-400">
                Popular right now
              </p>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                Places worth the journey
              </h2>

            </div>

            <Link
              to="/destinations"
              className="text-sm font-semibold text-slate-900"
            >
              View all destinations →
            </Link>

          </div>


          <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {popular.map((destination) => (

              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="group overflow-hidden rounded-2xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-64 overflow-hidden">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold">
                    ⭐ {destination.rating}
                  </div>

                </div>

                <div className="p-6">

                  <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                    {destination.type}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-slate-900">
                    {destination.name}
                  </h3>

                  <p className="mt-2 text-sm text-slate-500">
                    📍 {destination.location}
                  </p>

                </div>

              </Link>

            ))}

          </div>

        </div>

      </section>


      {/* CTA */}

      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="rounded-3xl bg-slate-900 px-7 py-14 text-center text-white sm:px-14">

          <p className="text-sm uppercase tracking-[4px] text-slate-400">
            Your next adventure starts here
          </p>

          <h2 className="mx-auto mt-4 max-w-2xl text-3xl font-bold sm:text-4xl">
            Stop saving places.
            Start planning them.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-400">
            Pick a destination, choose your date, and create a trip
            you can actually look forward to.
          </p>

          <Link
            to="/trips"
            className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 font-semibold text-slate-950"
          >
            Create my trip
          </Link>

        </div>

      </section>

      <Footer />

    </div>
  );
}



  // -------------------------------------------------- DESTINATIONS --------------------------------------------------


function Destinations() {

  const [destinations, setDestinations] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    fetch(`${API}/destinations`)
      .then((response) => response.json())
      .then((data) => {
        setDestinations(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, []);


  const filteredDestinations = destinations.filter((destination) => {

    const searchMatch =
      destination.name.toLowerCase().includes(search.toLowerCase()) ||
      destination.location.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || destination.type === category;

    return searchMatch && categoryMatch;
  });


  if (loading) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        <p className="text-slate-500">
          Loading destinations...
        </p>
      </div>
    );
  }


  return (
    <div className="min-h-screen">

      <section className="bg-slate-100 px-5 py-20">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-400">
            Explore
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900 sm:text-5xl">
            Find your next place.
          </h1>

          <p className="mt-4 max-w-2xl leading-7 text-slate-500">
            From ancient temples to misty mountains and peaceful beaches,
            discover places that deserve a spot on your travel list.
          </p>


          <div className="mt-10 grid gap-4 md:grid-cols-[1fr_220px]">

            <input
              type="text"
              placeholder="Search by destination or location..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-slate-500"
            />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none"
            >
              <option value="All">All types</option>
              <option value="Temple">Temples</option>
              <option value="Hill Station">Hill Stations</option>
              <option value="Waterfall">Waterfalls</option>
              <option value="Beach">Beaches</option>
              <option value="Heritage">Heritage</option>
            </select>

          </div>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-5 py-16">

        <div className="mb-8 flex items-center justify-between">

          <p className="text-sm text-slate-500">
            Showing {filteredDestinations.length} destinations
          </p>

        </div>


        {filteredDestinations.length === 0 ? (

          <div className="rounded-2xl border border-dashed border-slate-300 py-20 text-center">
            <p className="text-lg font-semibold text-slate-700">
              No destinations found
            </p>

            <p className="mt-2 text-sm text-slate-500">
              Try another search.
            </p>
          </div>

        ) : (

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {filteredDestinations.map((destination) => (

              <Link
                key={destination.id}
                to={`/destinations/${destination.id}`}
                className="group overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div className="relative h-60 overflow-hidden">

                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-bold shadow">
                    ⭐ {destination.rating}
                  </div>

                </div>


                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {destination.type}
                    </span>

                  </div>

                  <h2 className="mt-4 text-xl font-bold text-slate-900">
                    {destination.name}
                  </h2>

                  <p className="mt-2 text-sm text-slate-500">
                    📍 {destination.location}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {destination.description}
                  </p>

                  <div className="mt-5 text-sm font-bold text-slate-900">
                    Explore place →
                  </div>

                </div>

              </Link>

            ))}

          </div>

        )}

      </section>

      <Footer />

    </div>
  );
}



  // -------------------------------------------------- DESTINATION DETAILS --------------------------------------------------


function DestinationDetails() {

  const { id } = useParams();
  const navigate = useNavigate();

  const [destination, setDestination] = useState(null);
  const [favourite, setFavourite] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {

    fetch(`${API}/destinations/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setDestination(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });

  }, [id]);


  if (loading) {
    return (
      <div className="flex min-h-[600px] items-center justify-center">
        Loading...
      </div>
    );
  }


  if (!destination || destination.message) {
    return (
      <div className="flex min-h-[600px] flex-col items-center justify-center px-5">

        <h1 className="text-3xl font-bold">
          Destination not found
        </h1>

        <button
          onClick={() => navigate("/destinations")}
          className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-white"
        >
          Back to Explore
        </button>

      </div>
    );
  }


  return (
    <div>

      <section className="mx-auto max-w-7xl px-5 py-10">

        <button
          onClick={() => navigate(-1)}
          className="mb-8 text-sm font-semibold text-slate-500 hover:text-slate-900"
        >
          ← Back
        </button>


        <div className="grid overflow-hidden rounded-3xl bg-slate-100 lg:grid-cols-2">

          <div className="h-[400px] lg:h-[600px]">

            <img
              src={destination.image}
              alt={destination.name}
              className="h-full w-full object-cover"
            />

          </div>


          <div className="flex flex-col justify-center p-8 sm:p-12">

            <span className="w-fit rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-slate-500">
              {destination.type}
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
              {destination.name}
            </h1>

            <p className="mt-4 text-slate-500">
              📍 {destination.location}
            </p>

            <div className="mt-5 text-lg font-semibold">
              ⭐ {destination.rating}
              <span className="ml-2 text-sm font-normal text-slate-400">
                Recommended destination
              </span>
            </div>

            <p className="mt-7 leading-8 text-slate-600">
              {destination.description}
            </p>


            <div className="mt-8 flex flex-wrap gap-3">

              <button
                onClick={() => setFavourite(!favourite)}
                className="rounded-full border border-slate-300 bg-white px-6 py-3 font-semibold transition hover:bg-slate-100"
              >
                {favourite ? "♥ Saved" : "♡ Save place"}
              </button>

              <Link
                to={`/trips?destination=${destination.id}`}
                className="rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-slate-700"
              >
                Plan a trip →
              </Link>

            </div>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid gap-5 sm:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 p-6">
            <p className="text-sm text-slate-400">Experience</p>
            <p className="mt-2 font-bold">Nature & Culture</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <p className="text-sm text-slate-400">Best for</p>
            <p className="mt-2 font-bold">Friends & Family</p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6">
            <p className="text-sm text-slate-400">Rating</p>
            <p className="mt-2 font-bold">⭐ {destination.rating}/5</p>
          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}



  // -------------------------------------------------- PLAN MY TRIP --------------------------------------------------


function PlanTrip() {

  const [tripName, setTripName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [destinationId, setDestinationId] = useState("");

  const [destinations, setDestinations] = useState([]);
  const [trips, setTrips] = useState([]);

  const [editingId, setEditingId] = useState(null);


  useEffect(() => {

    fetch(`${API}/destinations`)
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.log(error));

    loadTrips();

  }, []);


  function loadTrips() {

    fetch(`${API}/trips`)
      .then((response) => response.json())
      .then((data) => setTrips(data))
      .catch((error) => console.log(error));

  }


  function addTrip() {

    if (
      tripName.trim() === "" ||
      startDate === "" ||
      destinationId === ""
    ) {
      alert("Please fill all fields");
      return;
    }


    const tripData = {
      trip_name: tripName,
      start_date: startDate,
      destination_id: Number(destinationId)
    };


    if (editingId) {

      fetch(`${API}/trips/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tripData)
      })
        .then((response) => response.json())
        .then(() => {

          alert("Trip updated successfully");

          clearForm();
          loadTrips();

        });

    } else {

      fetch(`${API}/trips`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(tripData)
      })
        .then((response) => response.json())
        .then(() => {

          alert("Trip created successfully");

          clearForm();
          loadTrips();

        });

    }

  }


  function clearForm() {

    setTripName("");
    setStartDate("");
    setDestinationId("");
    setEditingId(null);

  }


  function editTrip(trip) {

    setEditingId(trip.id);
    setTripName(trip.trip_name);
    setStartDate(trip.start_date?.slice(0, 10));
    setDestinationId(trip.destination_id);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  function deleteTrip(id) {

    const confirmDelete = window.confirm(
      "Are you sure you want to delete this trip?"
    );

    if (!confirmDelete) {
      return;
    }


    fetch(`${API}/trips/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => {

        alert("Trip deleted");

        loadTrips();

      });

  }


  return (
    <div className="min-h-screen">

      <section className="bg-slate-100 px-5 py-16">

        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-400">
            Trip planner
          </p>

          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Build your next adventure.
          </h1>

          <p className="mt-4 max-w-xl leading-7 text-slate-500">
            Give your journey a name, pick a date and destination.
            Wanderly will keep your plans organized.
          </p>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-5 py-12">

        <div className="grid gap-10 lg:grid-cols-[420px_1fr]">


          {/* FORM */}

          <div className="h-fit rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">

            <div className="flex items-center justify-between">

              <h2 className="text-xl font-bold">
                {editingId ? "Edit trip" : "Create a trip"}
              </h2>

              {editingId && (
                <button
                  onClick={clearForm}
                  className="text-sm text-slate-400"
                >
                  Cancel
                </button>
              )}

            </div>


            <label className="mt-7 block text-sm font-semibold">
              Trip name
            </label>

            <input
              type="text"
              placeholder="Kerala Weekend"
              value={tripName}
              onChange={(e) => setTripName(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500"
            />


            <label className="mt-6 block text-sm font-semibold">
              Start date
            </label>

            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500"
            />


            <label className="mt-6 block text-sm font-semibold">
              Destination
            </label>

            <select
              value={destinationId}
              onChange={(e) => setDestinationId(e.target.value)}
              className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none"
            >

              <option value="">
                Select destination
              </option>

              {destinations.map((destination) => (

                <option
                  key={destination.id}
                  value={destination.id}
                >
                  {destination.name}
                </option>

              ))}

            </select>


            <button
              onClick={addTrip}
              className="mt-7 w-full rounded-xl bg-slate-900 py-3.5 font-semibold text-white transition hover:bg-slate-700"
            >
              {editingId ? "Update trip" : "Create trip"}
            </button>

          </div>


          {/* TRIPS */}

          <div>

            <div className="mb-6 flex items-center justify-between">

              <h2 className="text-2xl font-bold">
                My trips
              </h2>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-500">
                {trips.length} trips
              </span>

            </div>


            {trips.length === 0 ? (

              <div className="rounded-3xl border border-dashed border-slate-300 py-20 text-center">

                <div className="text-5xl">
                  🧳
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  No trips yet
                </h3>

                <p className="mt-2 text-sm text-slate-500">
                  Your next adventure starts with a plan.
                </p>

              </div>

            ) : (

              <div className="space-y-5">

                {trips.map((trip) => (

                  <div
                    key={trip.id}
                    className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                  >

                    <div className="flex flex-col justify-between gap-5 sm:flex-row">

                      <div>

                        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
                          Trip
                        </p>

                        <h3 className="mt-2 text-xl font-bold text-slate-900">
                          {trip.trip_name}
                        </h3>

                        <div className="mt-3 space-y-1 text-sm text-slate-500">

                          <p>
                            📅 {new Date(trip.start_date).toLocaleDateString()}
                          </p>

                          <p>
                            📍 {trip.destination_name}
                          </p>

                          <p>
                            {trip.location}
                          </p>

                        </div>

                      </div>


                      <div className="flex h-fit gap-2">

                        <button
                          onClick={() => editTrip(trip)}
                          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-100"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() => deleteTrip(trip.id)}
                          className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50"
                        >
                          Delete
                        </button>

                      </div>

                    </div>

                  </div>

                ))}

              </div>

            )}

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}



  // -------------------------------------------------- ABOUT --------------------------------------------------


function About() {

  return (
    <div>

      <section className="bg-slate-100 px-5 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[4px] text-slate-400">
            About Wanderly
          </p>

          <h1 className="mt-4 text-4xl font-bold text-slate-900 sm:text-6xl">
            Travel should feel personal.
          </h1>

          <p className="mt-7 text-lg leading-8 text-slate-500">
            Wanderly is a travel discovery and trip planning platform
            designed to make exploring South India simpler, more visual
            and more enjoyable.
          </p>

        </div>

      </section>


      <section className="mx-auto max-w-7xl px-5 py-20">

        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-400">
              Why Wanderly
            </p>

            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Discover places beyond the usual checklist.
            </h2>

            <p className="mt-6 leading-8 text-slate-500">
              From the grand architecture of Thanjavur and Madurai
              to the misty hills of Kodaikanal and Munnar, Wanderly
              brings different kinds of experiences together in one place.
            </p>

            <p className="mt-5 leading-8 text-slate-500">
              The goal is simple: discover a place, understand what
              makes it special, and turn that inspiration into an actual trip.
            </p>

          </div>


          <div className="overflow-hidden rounded-3xl">

            <img
              src="https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1000&q=85"
              alt="Indian architecture"
              className="h-[450px] w-full object-cover"
            />

          </div>

        </div>

      </section>


      <section className="bg-slate-950 px-5 py-20 text-white">

        <div className="mx-auto max-w-7xl">

          <div className="grid gap-10 md:grid-cols-3">

            <div>
              <p className="text-4xl font-bold">01</p>
              <h3 className="mt-4 text-xl font-bold">
                Discover
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Search destinations based on the experience you want.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold">02</p>
              <h3 className="mt-4 text-xl font-bold">
                Save
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Keep the places that inspire your next journey.
              </p>
            </div>

            <div>
              <p className="text-4xl font-bold">03</p>
              <h3 className="mt-4 text-xl font-bold">
                Plan
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">
                Turn your favourite destination into a real trip.
              </p>
            </div>

          </div>

        </div>

      </section>

      <Footer />

    </div>
  );
}



  // -------------------------------------------------- LOGIN --------------------------------------------------


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function loginUser() {

    if (email === "" || password === "") {
      alert("Please enter email and password");
      return;
    }

    alert("Login demo successful!");
  }


  return (
    <div className="flex min-h-[750px] items-center justify-center bg-slate-100 px-5 py-16">

      <div className="grid w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-xl md:grid-cols-2">

        <div className="hidden bg-slate-950 p-12 text-white md:flex md:flex-col md:justify-between">

          <div>

            <p className="text-sm uppercase tracking-[4px] text-slate-500">
              Welcome back
            </p>

            <h1 className="mt-6 text-4xl font-bold leading-tight">
              Your next journey
              <span className="block text-slate-500">
                is waiting.
              </span>
            </h1>

          </div>

          <p className="text-sm leading-7 text-slate-500">
            Sign in to manage your travel plans and continue
            discovering new places.
          </p>

        </div>


        <div className="p-8 sm:p-12">

          <h2 className="text-2xl font-bold text-slate-900">
            Sign in
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Welcome back to Wanderly.
          </p>


          <label className="mt-8 block text-sm font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500"
          />


          <label className="mt-6 block text-sm font-semibold">
            Password
          </label>

          <input
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-slate-500"
          />


          <button
            onClick={loginUser}
            className="mt-7 w-full rounded-xl bg-slate-900 py-3.5 font-semibold text-white hover:bg-slate-700"
          >
            Sign in
          </button>


          <p className="mt-6 text-center text-xs text-slate-400">
            Demo login for project presentation
          </p>

        </div>

      </div>

    </div>
  );
}



  // -------------------------------------------------- ADMIN DESTINATION MANAGEMENT --------------------------------------------------


function AdminDestinations() {

  const [destinations, setDestinations] = useState([]);

  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState("Temple");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [rating, setRating] = useState("");

  const [editingId, setEditingId] = useState(null);


  useEffect(() => {
    loadDestinations();
  }, []);


  function loadDestinations() {

    fetch(`${API}/destinations`)
      .then((response) => response.json())
      .then((data) => setDestinations(data))
      .catch((error) => console.log(error));

  }


  function clearDestinationForm() {

    setName("");
    setLocation("");
    setType("Temple");
    setDescription("");
    setImage("");
    setRating("");
    setEditingId(null);

  }


  function saveDestination() {

    if (
      name === "" ||
      location === "" ||
      description === "" ||
      image === "" ||
      rating === ""
    ) {
      alert("Please fill all fields");
      return;
    }


    const data = {
      name,
      location,
      description,
      image,
      rating: Number(rating),
      type
    };


    if (editingId) {

      fetch(`${API}/destinations/${editingId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then(() => {

          alert("Destination updated");

          clearDestinationForm();
          loadDestinations();

        });

    } else {

      fetch(`${API}/destinations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
        .then((response) => response.json())
        .then(() => {

          alert("Destination added");

          clearDestinationForm();
          loadDestinations();

        });

    }

  }


  function editDestination(destination) {

    setEditingId(destination.id);
    setName(destination.name);
    setLocation(destination.location);
    setType(destination.type);
    setDescription(destination.description);
    setImage(destination.image);
    setRating(destination.rating);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  }


  function deleteDestination(id) {

    if (!window.confirm("Delete this destination?")) {
      return;
    }


    fetch(`${API}/destinations/${id}`, {
      method: "DELETE"
    })
      .then((response) => response.json())
      .then(() => {

        alert("Destination deleted");

        loadDestinations();

      });

  }


  return (
    <div className="min-h-screen bg-slate-100 px-5 py-14">

      <div className="mx-auto max-w-7xl">

        <div>

          <p className="text-sm font-semibold uppercase tracking-[3px] text-slate-400">
            Admin
          </p>

          <h1 className="mt-2 text-4xl font-bold">
            Destination management
          </h1>

        </div>


        <div className="mt-10 grid gap-10 lg:grid-cols-[420px_1fr]">


          {/* FORM */}

          <div className="h-fit rounded-3xl bg-white p-7 shadow-sm">

            <h2 className="text-xl font-bold">
              {editingId ? "Edit destination" : "Add destination"}
            </h2>


            <input
              type="text"
              placeholder="Destination name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-6 w-full rounded-xl border px-4 py-3"
            />


            <input
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="mt-4 w-full rounded-xl border px-4 py-3"
            />


            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="mt-4 w-full rounded-xl border px-4 py-3"
            >
              <option>Temple</option>
              <option>Hill Station</option>
              <option>Waterfall</option>
              <option>Beach</option>
              <option>Heritage</option>
            </select>


            <textarea
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-4 min-h-28 w-full rounded-xl border px-4 py-3"
            />


            <input
              type="text"
              placeholder="Image URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-4 w-full rounded-xl border px-4 py-3"
            />


            <input
              type="number"
              min="1"
              max="5"
              step="0.1"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="mt-4 w-full rounded-xl border px-4 py-3"
            />


            <button
              onClick={saveDestination}
              className="mt-5 w-full rounded-xl bg-slate-900 py-3 font-semibold text-white"
            >
              {editingId ? "Update destination" : "Add destination"}
            </button>


            {editingId && (

              <button
                onClick={clearDestinationForm}
                className="mt-3 w-full rounded-xl border py-3 font-semibold"
              >
                Cancel
              </button>

            )}

          </div>


          {/* LIST */}

          <div className="space-y-5">

            {destinations.map((destination) => (

              <div
                key={destination.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row"
              >

                <img
                  src={destination.image}
                  alt={destination.name}
                  className="h-40 w-full rounded-xl object-cover sm:w-52"
                />

                <div className="flex-1">

                  <p className="text-xs uppercase tracking-widest text-slate-400">
                    {destination.type}
                  </p>

                  <h3 className="mt-2 text-xl font-bold">
                    {destination.name}
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    {destination.location}
                  </p>

                  <p className="mt-2 text-sm">
                    ⭐ {destination.rating}
                  </p>

                  <div className="mt-5 flex gap-2">

                    <button
                      onClick={() => editDestination(destination)}
                      className="rounded-lg border px-4 py-2 text-sm font-semibold"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteDestination(destination.id)}
                      className="rounded-lg border border-red-200 px-4 py-2 text-sm font-semibold text-red-600"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </div>
  );
}



  // -------------------------------------------------- MAIN APP --------------------------------------------------


function Travelprjct() {

  return (
    <>
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/destinations/:id"
          element={<DestinationDetails />}
        />

        <Route
          path="/trips"
          element={<PlanTrip />}
        />

        <Route
          path="/about"
          element={<About />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/admin"
          element={<AdminDestinations />}
        />

      </Routes>
    </>
  );
}

export default Travelprjct;