import ISkill from "./ISkill";

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

export default IDigimon;
