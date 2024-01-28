import { FC } from 'react';
import { Badge } from './ui/badge';

interface SkillsProps {
  skills: string[];
}

const Skills: FC<SkillsProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap justify-start gap-2">
      {skills.map((skill) => (
        <Badge key={skill}>{skill}</Badge>
      ))}
    </div>
  );
};

export default Skills;
