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

const data: IDigimon[] = JSON.parse(
    readFileSync(
        path.join(__dirname, "../data/digimon.json"),
        "utf8"
    ).toString()
);

const router = express.Router();

router.get("/digimons", (req, res) => {
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

    res.json(result);
});

export default router;
