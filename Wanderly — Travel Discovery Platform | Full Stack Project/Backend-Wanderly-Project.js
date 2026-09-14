import express from "express";
import cors from "cors";
import database from "./dbconfig.js";

const app = express();

const port = 3000;

app.use(cors());

app.use(express.json());



// -----------HOME----------------------------------------------------------------------------------------------------------------------------


app.get("/", (req, res) => {

  res.json({
    message: "Wanderly API Running"
  });

});



// ---------GET ALL DESTINATIONS------------------------------------------------------------------------------------------------------------------------


app.get("/destinations", (req, res) => {

  const query = `
    SELECT
      destinations.id,
      destinations.name,
      destinations.location,
      destinations.description,
      destinations.image,
      destinations.rating,
      categories.name AS type
    FROM destinations
    INNER JOIN categories
    ON destinations.category_id = categories.id
    ORDER BY destinations.id DESC
  `;


  database.query(query, (error, result) => {

    if (error) {
      return res.status(500).json({
        error: error.message
      });
    }

    res.json(result);

  });

});



//-------GET SINGLE DESTINATION---------------------------------------------------------------------------------------------------------------


app.get("/destinations/:id", (req, res) => {

  const id = req.params.id;


  const query = `
    SELECT
      destinations.id,
      destinations.name,
      destinations.location,
      destinations.description,
      destinations.image,
      destinations.rating,
      categories.name AS type
    FROM destinations
    INNER JOIN categories
    ON destinations.category_id = categories.id
    WHERE destinations.id = ?
  `;


  database.query(
    query,
    [id],
    (error, result) => {

      if (error) {
        return res.status(500).json({
          error: error.message
        });
      }


      if (result.length === 0) {
        return res.status(404).json({
          message: "Destination not found"
        });
      }


      res.json(result[0]);

    }
  );

});



//-------------ADD DESTINATION------------------------------------------------------------------------------------------------------------------------------


app.post("/destinations", (req, res) => {

  const {
    name,
    location,
    description,
    image,
    rating,
    type
  } = req.body;


  const categoryQuery = `
    SELECT id
    FROM categories
    WHERE name = ?
  `;


  database.query(
    categoryQuery,
    [type],
    (categoryError, categoryResult) => {

      if (categoryError) {

        return res.status(500).json({
          error: categoryError.message
        });

      }


      if (categoryResult.length === 0) {

        return res.status(400).json({
          message: "Category not found"
        });

      }


      const categoryId = categoryResult[0].id;


      const insertQuery = `
        INSERT INTO destinations
        (
          name,
          location,
          description,
          image,
          rating,
          category_id
        )
        VALUES (?, ?, ?, ?, ?, ?)
      `;


      database.query(
        insertQuery,
        [
          name,
          location,
          description,
          image,
          rating,
          categoryId
        ],
        (error, result) => {

          if (error) {

            return res.status(500).json({
              error: error.message
            });

          }


          res.json({
            message: "Destination added successfully",
            id: result.insertId
          });

        }
      );

    }
  );

});



//---------UPDATE DESTINATION----------------------------------------------------------------------------------------------------------------


app.put("/destinations/:id", (req, res) => {

  const id = req.params.id;


  const {
    name,
    location,
    description,
    image,
    rating,
    type
  } = req.body;


  const categoryQuery = `
    SELECT id
    FROM categories
    WHERE name = ?
  `;


  database.query(
    categoryQuery,
    [type],
    (categoryError, categoryResult) => {

      if (categoryError) {

        return res.status(500).json({
          error: categoryError.message
        });

      }


      if (categoryResult.length === 0) {

        return res.status(400).json({
          message: "Category not found"
        });

      }


      const categoryId = categoryResult[0].id;


      const updateQuery = `
        UPDATE destinations
        SET
          name = ?,
          location = ?,
          description = ?,
          image = ?,
          rating = ?,
          category_id = ?
        WHERE id = ?
      `;


      database.query(
        updateQuery,
        [
          name,
          location,
          description,
          image,
          rating,
          categoryId,
          id
        ],
        (error, result) => {

          if (error) {

            return res.status(500).json({
              error: error.message
            });

          }


          res.json({
            message: "Destination updated successfully"
          });

        }
      );

    }
  );

});



//-------------DELETE DESTINATION-------------------------------------------------------------------------------------------------------------


app.delete("/destinations/:id", (req, res) => {

  const id = req.params.id;


  database.query(
    "DELETE FROM destinations WHERE id = ?",
    [id],
    (error, result) => {

      if (error) {

        return res.status(500).json({
          error: error.message
        });

      }


      res.json({
        message: "Destination deleted successfully"
      });

    }
  );

});



//-----------GET ALL CATEGORIES-----------------------------------------------------------------------------------------------------------------------


app.get("/categories", (req, res) => {

  database.query(
    "SELECT * FROM categories",
    (error, result) => {

      if (error) {

        return res.status(500).json({
          error: error.message
        });

      }

      res.json(result);

    }
  );

});



//---------------GET ALL TRIPS------------------------------------------------------------------------------------------------------------------------------


app.get("/trips", (req, res) => {

  const query = `
    SELECT
      trips.id,
      trips.trip_name,
      trips.start_date,
      trips.destination_id,
      destinations.name AS destination_name,
      destinations.location
    FROM trips
    INNER JOIN destinations
    ON trips.destination_id = destinations.id
    ORDER BY trips.start_date ASC
  `;


  database.query(query, (error, result) => {

    if (error) {

      return res.status(500).json({
        error: error.message
      });

    }

    res.json(result);

  });

});



//-----------ADD TRIP------------------------------------------------------------------------------------------------------------------------------------------


app.post("/trips", (req, res) => {

  const {
    trip_name,
    start_date,
    destination_id
  } = req.body;


  if (
    !trip_name ||
    !start_date ||
    !destination_id
  ) {

    return res.status(400).json({
      message: "All fields are required"
    });

  }


  const query = `
    INSERT INTO trips
    (
      trip_name,
      start_date,
      destination_id
    )
    VALUES (?, ?, ?)
  `;


  database.query(
    query,
    [
      trip_name,
      start_date,
      destination_id
    ],
    (error, result) => {

      if (error) {

        return res.status(500).json({
          error: error.message
        });

      }


      res.json({
        message: "Trip created successfully",
        id: result.insertId
      });

    }
  );

});



//-------------UPDATE TRIP-----------------------------------------------------------------------------------------------------------------


app.put("/trips/:id", (req, res) => {

  const id = req.params.id;


  const {
    trip_name,
    start_date,
    destination_id
  } = req.body;


  const query = `
    UPDATE trips
    SET
      trip_name = ?,
      start_date = ?,
      destination_id = ?
    WHERE id = ?
  `;


  database.query(
    query,
    [
      trip_name,
      start_date,
      destination_id,
      id
    ],
    (error, result) => {

      if (error) {

        return res.status(500).json({
          error: error.message
        });

      }


      res.json({
        message: "Trip updated successfully"
      });

    }
  );

});



//---------------DELETE TRIP---------------------------------------------------------------------------------------------------------------------------


app.delete("/trips/:id", (req, res) => {

  const id = req.params.id;


  database.query(
    "DELETE FROM trips WHERE id = ?",
    [id],
    (error, result) => {

      if (error) {

        return res.status(500).json({
          error: error.message
        });

      }


      res.json({
        message: "Trip deleted successfully"
      });

    }
  );

});



//--------------SERVER------------------------------------------------------------------------------------------------------------------------


app.listen(port, () => {

  console.log(
    `Wanderly Server Running on http://localhost:${port}`
  );

});