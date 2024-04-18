import {
  FaJs,
  FaPython,
  FaHtml5,
  FaCss3,
  FaReact,
  FaGit,
  FaJava,
  FaPhp,
  FaFigma,
  FaNode
} from "react-icons/fa";
import {
  SiMysql,
  SiPostgresql,
  SiVite,
  SiOpencv,
  SiMui,
  SiGnubash,
  SiFirebase,
  SiFlask,
  SiCsharp,
  SiTypescript,
  SiAdobephotoshop,
  SiExpress,
  SiQgis
} from "react-icons/si";
import { BsBootstrap } from "react-icons/bs";
import { BiLogoSpringBoot } from "react-icons/bi";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
const TechStack = () => {
  return (
    <>
      <div className="flex justify-center" style={{ margin: "1rem" }}>
        <FaPython className="text-6xl" style={{ margin: "10px" }} />
        <SiMysql className="text-6xl" style={{ margin: "10px" }} />
        <SiPostgresql className="text-6xl" style={{ margin: "10px" }} />
        <FaHtml5 className="text-6xl" style={{ margin: "10px" }} />
        <FaCss3 className="text-6xl" style={{ margin: "10px" }} />
        <FaReact className="text-6xl" style={{ margin: "10px" }} />
        <SiVite className="text-6xl" style={{ margin: "10px" }} />
        <FaGit className="text-6xl" style={{ margin: "10px" }} />
        <SiOpencv className="text-6xl" style={{ margin: "10px" }} />
        <SiMui className="text-6xl" style={{ margin: "10px" }} />
        <FaJs className="text-6xl" style={{ margin: "10px" }} />
        <SiGnubash className="text-6xl" style={{ margin: "10px" }} />
        <BsBootstrap className="text-6xl" style={{ margin: "10px" }} />
        <SiFirebase className="text-6xl" style={{ margin: "10px" }} />
      </div>
      <div className="flex justify-center" style={{ margin: "1rem" }}>
        <FaJava className="text-6xl" style={{ margin: "10px" }} />
        <BiLogoSpringBoot className="text-6xl" style={{ margin: "10px" }} />
        <FaPhp className="text-6xl" style={{ margin: "10px" }} />
        <SiFlask className="text-6xl" style={{ margin: "10px" }} />
        <TbBrandNextjs className="text-6xl" style={{ margin: "10px" }} />
        <SiCsharp className="text-6xl" style={{ margin: "10px" }} />
        <SiTypescript className="text-6xl" style={{ margin: "10px" }} />
        <FaFigma className="text-6xl" style={{ margin: "10px" }} />
        <SiAdobephotoshop className="text-6xl" style={{ margin: "10px" }} />
        <SiExpress className="text-6xl" style={{ margin: "10px" }} />
        <FaNode className="text-6xl" style={{ margin: "10px" }} />
        <TbBrandThreejs className="text-6xl" style={{ margin: "10px" }} />
        <SiQgis className="text-6xl" style={{ margin: "10px" }} />
      </div>
    </>
  );
};

export default TechStack;
