const express = require("express");
const app = express();
const server = app.listen(8000, () =>
    console.log(`Server is locked and loaded on port ${server.address().port}!`)
);
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

const users = [
  { firstName: "Reimu",  lastName: "Hakurei"    },
  { firstName: "Marisa", lastName: "Kirisame"   },
  { firstName: "Sanae",  lastName: "Kochiya"    },
  { firstName: "Sakuya", lastName: "Izayoi"     },
  { firstName: "Momiji", lastName: "Inubashiri" }
];



app.get("/api", (req, res) => {
  res.send("Our express api server is now sending this over to the browser!!!!!!");
});

app.get("/api/users", (req, res) => {
  res.json(users);
})

app.post("/api/users", (req, res) => {
  console.log(req.body);
  res.json({status: "ok"});
})

app.get("/api/users/:id", (req, res) => {
  console.log(req.params.id);
  res.json( users[req.params.id] );
});

app.patch("/api/users/:id", (req, res) => {
  const id = req.params.id
  users[id] = req.body;
  res.json({status: "ok"});
})

app.delete("/api/users/:id", (req, res) => {
  const id = req.params.id;
  users.splice(id, 1);
  res.json( { status: "ok" } );
});
