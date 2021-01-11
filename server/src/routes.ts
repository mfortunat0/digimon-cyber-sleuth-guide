import express from "express";
import { readFileSync } from "fs";
import path from "path";

interface ISkill {
  level: string;
  name: string;
  sp: string;
  type: string;
  power: string;
  attribute: string;
  inherit: string;
  description: string;
}

interface IDigimon {
  id: string;
  name: string;
  type: string;
  memory: string;
  requirements: string;
  attribute: string;
  equipSlot: string;
  supSkillName: string;
  supSkillDescribe: string;
  digivolveFrom: string[];
  digivolveInto: string[];
  skills: ISkill[];
}

const router = express.Router();

const data: IDigimon[] = JSON.parse(
  readFileSync(path.join(__dirname, "../data/digimon.json"), "utf8").toString()
);

router.get("/digimons", (req, res) => {
  res.json(data);
});

export default router;
