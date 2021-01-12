import { IResolvers } from "apollo-server";
import { join } from "path";
import { readFileSync } from "fs";
import IDigimon from "./interfaces/IDigimon";

const data: IDigimon[] = JSON.parse(
    readFileSync(join(__dirname, "../data/digimon.json"), "utf8").toString()
);

const resolvers: IResolvers = {
    Query: {
        digimon: (
            parent,
            { digimon: { id, name, type, memory, attribute, equipSlot } }
        ) => {
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
                .filter((value) =>
                    name === "all" ? true : value.name === name
                )
                .filter((value) =>
                    type === "all" ? true : value.type === type
                )
                .filter((value) =>
                    memory === "all" ? true : value.memory === memory
                )
                .filter((value) =>
                    attribute === "all" ? true : value.attribute === attribute
                )
                .filter((value) =>
                    equipSlot === "all" ? true : value.equipSlot === equipSlot
                );
            return result;
        },
    },
};

export default resolvers;
