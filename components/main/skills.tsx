import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

// Define the type for skills
type Skill = {
  skill_name: string;
  image: string;
  width: number;
  height?: number;
};

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.9)" }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20"
    >
      <SkillText />

      {/* General Skill Section */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {(SKILL_DATA as Skill[]).map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Frontend Skill Section */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {(FRONTEND_SKILL as Skill[]).map((skill, i) => (
          <SkillDataProvider key={skill.skill_name} {...skill} index={i} />
        ))}
      </div>

      {/* Backend Skill Section */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {(BACKEND_SKILL as Skill[]).map((skill, i) => (
          <SkillDataProvider key={skill.skill_name} {...skill} index={i} />
        ))}
      </div>

      {/* Fullstack Skill Section */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {(FULLSTACK_SKILL as Skill[]).map((skill, i) => (
          <SkillDataProvider key={skill.skill_name} {...skill} index={i} />
        ))}
      </div>

      {/* Other Skills Section */}
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {(OTHER_SKILL as Skill[]).map((skill, i) => (
          <SkillDataProvider key={skill.skill_name} {...skill} index={i} />
        ))}
      </div>
    </section>
  );
};