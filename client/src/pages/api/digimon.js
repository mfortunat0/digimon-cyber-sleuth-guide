import { readFileSync } from "fs";
import path from "path";

const data = JSON.parse(
  readFileSync(
    path.join(process.cwd(), "/src/pages/api/data/digimon.json"),
    "utf8"
  ).toString()
);

const digimonApi = (req, res) => {
  const id = req.query.id || "all";
  const name = req.query.name || "all";
  const type = req.query.type || "all";
  const memory = req.query.memory || "all";
  const attribute = req.query.attribute || "all";
  const equipSlot = req.query.equipSlot || "all";
  const result = data
    .filter((value) => {
      if (id === "all") {
        return true;
      } else {
        if (id.length === 1) {
          return value.id === `00${id}`;
        }
        if (id.length === 2) {
          return value.id === `0${id}`;
        }
        return value.id === id;
      }
    })
    .filter((value) => (name === "all" ? true : value.name === name))
    .filter((value) => (type === "all" ? true : value.type === type))
    .filter((value) => (memory === "all" ? true : value.memory === memory))
    .filter((value) =>
      attribute === "all" ? true : value.attribute === attribute
    )
    .filter((value) =>
      equipSlot === "all" ? true : value.equipSlot === equipSlot
    );
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(result));
};

export default digimonApi;
