import express from "express";
const router = express.Router();

router.get("/digimons", (req, res) => {
  res.json({
    message: "Hello",
  });
});

export default router;
