import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaExternalLinkAlt,
  FaNodeJs,
  FaFire,
  FaDocker,
  FaGitAlt,
  FaAws,
  FaLink
} from "react-icons/fa";
import { CgCPlusPlus } from "react-icons/cg";
import { DiPython } from "react-icons/di";
import {
  SiMysql,
  SiDart,
  SiTensorflow,
  SiReact,
  SiFlask,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiGraphql,
  SiSocketdotio,
  SiRedis,
  SiDatadog,
  SiApacheairflow,
  SiJira,
  SiJenkins,
  SiLinux,
  SiKubernetes,
  SiPostman
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import heroImage from "../Assets/Sanjeev_pose.png";
import nokiaLogo from "../Assets/company-logos/nokiaLogo.png";
import skillzLogo from "../Assets/company-logos/skillzLogo.jpeg";
import spiderLogo from "../Assets/company-logos/spiderLogo.jpeg";
import iitMadrasLogo from "../Assets/company-logos/iitMadrasLogo.png";
import iitKharagpurLogo from "../Assets/company-logos/iitKharagpurLogo.png";
import HeroTypewriter from "./HeroTypewriter";
import RoleBubbleOrbit from "./RoleBubbleOrbit";
import "./App2.css";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Experience", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" }
];

const skillTree = {
  root: "Core Skills",
  branches: [
    {
      label: "Software Engineering",
      groups: [
        {
          label: "Frontend & Mobile",
          items: [
            { name: "TypeScript", icon: <SiTypescript /> },
            { name: "React", icon: <SiReact /> },
            { name: "Next.js", icon: <TbBrandNextjs /> },
            { name: "Flutter", icon: <SiDart /> },
          ]
        },
        {
          label: "Backend & Systems",
          items: [
            { name: "Node.js", icon: <FaNodeJs /> },
            { name: "Express", icon: <SiExpress /> },
            { name: "Flask", icon: <SiFlask /> },
            { name: "GraphQL", icon: <SiGraphql /> },
            { name: "Socket.io", icon: <SiSocketdotio /> },
            { name: "MongoDB", icon: <SiMongodb /> },
            { name: "PostgreSQL", icon: <SiPostgresql /> },
            { name: "MySQL", icon: <SiMysql /> },
            { name: "Redis", icon: <SiRedis /> },
            { name: "C++", icon: <CgCPlusPlus /> }
          ]
        }
      ]
    },
    {
      label: "AI, Data & Infra",
      groups: [
        {
          label: "ML & Data Science",
          items: [
            { name: "Python", icon: <DiPython /> },
            { name: "TensorFlow", icon: <SiTensorflow /> },
            { name: "LangChain", icon: <FaLink /> }
          ]
        },
        {
          label: "Cloud, DevOps & Tooling",
          items: [
            { name: "AWS", icon: <FaAws /> },
            { name: "Firebase", icon: <FaFire /> },
            { name: "Docker", icon: <FaDocker /> },
            { name: "Kubernetes", icon: <SiKubernetes /> },
            { name: "Jenkins", icon: <SiJenkins /> },
            { name: "Airflow", icon: <SiApacheairflow /> },
            { name: "Datadog", icon: <SiDatadog /> },
            { name: "Git", icon: <FaGitAlt /> },
            { name: "Jira", icon: <SiJira /> },
            { name: "Postman", icon: <SiPostman /> },
            { name: "Linux", icon: <SiLinux /> },
          ]
        }
      ]
    }
  ]
};

// Toggle this to quickly switch between current grouped tree and alternate random binary tree.
const SHOW_ALT_BINARY_SKILL_TREE = true;
const SHOW_HERO_MEDIA_FRAME = false;
const FORMSPREE_ENDPOINT = process.env.REACT_APP_FORMSPREE_ENDPOINT || "";
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const SKILL_CATEGORY_ORDER = [
  "Languages",
  "Frontend",
  "Backend",
  "Databases",
  "AI/ML",
  "Cloud & DevOps",
  "Tooling",
  "Systems"
];
const LEVEL_BAND_LABELS = {
  top: "Languages",
  middle: "Backend / Frontend",
  lower: "AI + Cloud"
};
const SKILL_CATEGORY_BY_NAME = {
  TypeScript: "Languages",
  Python: "Languages",
  "C++": "Languages",
  HTML5: "Frontend",
  CSS3: "Frontend",
  React: "Frontend",
  "Next.js": "Frontend",
  Flutter: "Frontend",
  "Node.js": "Backend",
  Express: "Backend",
  Flask: "Backend",
  GraphQL: "Backend",
  "Socket.io": "Backend",
  MongoDB: "Databases",
  PostgreSQL: "Databases",
  MySQL: "Databases",
  Redis: "Databases",
  TensorFlow: "AI/ML",
  LangChain: "AI/ML",
  AWS: "Cloud & DevOps",
  Firebase: "Cloud & DevOps",
  Docker: "Cloud & DevOps",
  Kubernetes: "Cloud & DevOps",
  Jenkins: "Cloud & DevOps",
  Airflow: "Cloud & DevOps",
  Datadog: "Tooling",
  Git: "Tooling",
  Jira: "Tooling",
  Postman: "Tooling",
  Linux: "Systems"
};

const flattenSkills = (tree) => {
  const items = [];
  tree.branches.forEach((branch) => {
    branch.groups.forEach((group) => {
      group.items.forEach((item) =>
        items.push({
          ...item,
          category: SKILL_CATEGORY_BY_NAME[item.name] ?? "Other"
        })
      );
    });
  });
  return items;
};

const orderSkillsByCategory = (skills) => {
  const byCategory = new Map();
  skills.forEach((skill) => {
    const key = skill.category ?? "Other";
    if (!byCategory.has(key)) byCategory.set(key, []);
    byCategory.get(key).push(skill);
  });

  byCategory.forEach((categorySkills) => {
    categorySkills.sort((a, b) => a.name.localeCompare(b.name));
  });

  const ordered = [];
  SKILL_CATEGORY_ORDER.forEach((category) => {
    const categorySkills = byCategory.get(category);
    if (categorySkills?.length) ordered.push(...categorySkills);
    byCategory.delete(category);
  });

  Array.from(byCategory.keys())
    .sort((a, b) => a.localeCompare(b))
    .forEach((category) => {
      ordered.push(...byCategory.get(category));
    });

  return ordered;
};

const getSkillBand = (skillName) => {
  const languageSkills = new Set(["TypeScript", "Python", "C++"]);
  const backendFrontendSkills = new Set([
    "HTML5",
    "CSS3",
    "React",
    "Next.js",
    "Flutter",
    "Node.js",
    "Express",
    "Flask",
    "GraphQL",
    "Socket.io"
  ]);

  if (languageSkills.has(skillName)) return 0;
  if (backendFrontendSkills.has(skillName)) return 1;
  return 2;
};

const orderSkillsByLevelBands = (skills) => {
  const withIndex = skills.map((skill, index) => ({ skill, index }));
  withIndex.sort((a, b) => {
    const bandDiff = getSkillBand(a.skill.name) - getSkillBand(b.skill.name);
    if (bandDiff !== 0) return bandDiff;
    return a.skill.name.localeCompare(b.skill.name);
  });
  return withIndex.map((entry) => entry.skill);
};

const buildBinaryTree = (skills) => {
  if (!skills.length) return null;

  let index = 0;
  const root = {
    key: `${skills[index].name}-${index}`,
    item: skills[index],
    left: null,
    right: null
  };
  index += 1;

  let parents = [root];
  while (index < skills.length && parents.length) {
    const nextLevel = [];

    for (const parent of parents) {
      if (index >= skills.length) break;
      const leftNode = {
        key: `${skills[index].name}-${index}`,
        item: skills[index],
        left: null,
        right: null
      };
      parent.left = leftNode;
      nextLevel.push(leftNode);
      index += 1;
    }

    for (const parent of parents) {
      if (index >= skills.length) break;
      const rightNode = {
        key: `${skills[index].name}-${index}`,
        item: skills[index],
        left: null,
        right: null
      };
      parent.right = rightNode;
      nextLevel.push(rightNode);
      index += 1;
    }

    parents = nextLevel;
  }

  return root;
};

const getTreeMaxWidth = (viewportWidth) => {
  if (viewportWidth < 768) return Math.max(300, viewportWidth - 32);
  if (viewportWidth < 992) return Math.max(420, viewportWidth - 48);
  return Math.min(1120, Math.max(560, viewportWidth - 100));
};

const getTreeMetrics = (root) => {
  if (!root) return { leafCount: 0, depth: 0 };

  const walk = (node, depth) => {
    if (!node) return { leafCount: 0, depth: depth - 1 };
    if (!node.left && !node.right) return { leafCount: 1, depth };

    const left = walk(node.left, depth + 1);
    const right = walk(node.right, depth + 1);
    return {
      leafCount: left.leafCount + right.leafCount,
      depth: Math.max(left.depth, right.depth)
    };
  };

  return walk(root, 0);
};

const getResponsiveTreeSizing = ({ viewportWidth, maxWidth, leafCount, depth }) => {
  const safeLeaves = Math.max(leafCount, 1);
  const baseGap = viewportWidth < 768 ? 10 : 14;
  const innerWidth = Math.max(maxWidth - 56, 220);
  const maxNodeByWidth = Math.floor((innerWidth - baseGap * (safeLeaves - 1)) / safeLeaves);
  const minNode = viewportWidth < 768 ? 46 : 56;
  const maxNode = viewportWidth < 768 ? 70 : 88;
  const tileWidth = clamp(maxNodeByWidth, minNode, maxNode);
  const tileHeight = clamp(Math.round(tileWidth * 0.94), minNode - 2, maxNode - 2);
  const nodeGap = clamp(Math.round(tileWidth * 0.28), viewportWidth < 768 ? 8 : 12, 26);
  const baseHeightPerLevel = viewportWidth < 768 ? 72 : 84;
  const roomFactor = depth >= 5 ? 1 : 1.08;
  const levelGap = clamp(
    Math.round((baseHeightPerLevel + tileHeight * 0.3) * roomFactor),
    viewportWidth < 768 ? 76 : 92,
    viewportWidth < 768 ? 112 : 132
  );
  const iconSizePx = clamp(Math.round(tileWidth * 0.32), 14, 24);
  const labelSizePx = clamp(Math.round(tileWidth * 0.13 * 10) / 10, 6.2, 8.6);

  return {
    tileWidth,
    tileHeight,
    nodeGap,
    levelGap,
    iconSize: `${iconSizePx}px`,
    labelSize: `${labelSizePx}px`
  };
};

const getLevelBandLabel = (depth) => {
  if (depth <= 1) return LEVEL_BAND_LABELS.top;
  if (depth === 2) return LEVEL_BAND_LABELS.middle;
  return LEVEL_BAND_LABELS.lower;
};

const layoutBinaryTree = (root, options) => {
  if (!root) {
    return { nodes: [], edges: [], levelLabels: [], width: 0, height: 0 };
  }

  const nodes = [];
  const edges = [];
  const { tileWidth, tileHeight, levelGap, nodeGap, maxWidth, labelGutter } = options;
  const layoutMap = new Map();
  let cursorX = 0;

  const assign = (node, depth) => {
    if (!node) return null;
    const left = assign(node.left, depth + 1);
    const right = assign(node.right, depth + 1);

    let x;
    if (!left && !right) {
      x = cursorX;
      cursorX += tileWidth + nodeGap;
    } else if (left && right) {
      x = (left.x + right.x) / 2;
    } else {
      x = (left ?? right).x;
    }

    const y = depth * levelGap + tileHeight / 2 + 8;
    const positioned = { key: node.key, item: node.item, x, y, depth };
    layoutMap.set(node.key, positioned);
    nodes.push(positioned);
    return positioned;
  };

  assign(root, 0);

  const buildEdges = (node) => {
    if (!node) return;
    const parent = layoutMap.get(node.key);
    if (node.left) {
      const child = layoutMap.get(node.left.key);
      edges.push({
        x1: parent.x,
        y1: parent.y + tileHeight / 2,
        x2: child.x,
        y2: child.y - tileHeight / 2
      });
      buildEdges(node.left);
    }
    if (node.right) {
      const child = layoutMap.get(node.right.key);
      edges.push({
        x1: parent.x,
        y1: parent.y + tileHeight / 2,
        x2: child.x,
        y2: child.y - tileHeight / 2
      });
      buildEdges(node.right);
    }
  };

  buildEdges(root);

  let minX = Number.POSITIVE_INFINITY;
  let maxX = Number.NEGATIVE_INFINITY;
  let maxY = Number.NEGATIVE_INFINITY;

  nodes.forEach((node) => {
    minX = Math.min(minX, node.x - tileWidth / 2);
    maxX = Math.max(maxX, node.x + tileWidth / 2);
    maxY = Math.max(maxY, node.y + tileHeight / 2);
  });

  const padX = 28;
  const padY = 14;
  const shiftX = -minX + padX;
  const shiftY = padY;

  let normalizedNodes = nodes.map((node) => ({
    ...node,
    x: node.x + shiftX,
    y: node.y + shiftY
  }));

  let normalizedEdges = edges.map((edge) => ({
    x1: edge.x1 + shiftX,
    y1: edge.y1 + shiftY,
    x2: edge.x2 + shiftX,
    y2: edge.y2 + shiftY
  }));

  const effectiveMaxWidth =
    maxWidth && labelGutter > 0 ? Math.max(maxWidth - labelGutter, 260) : maxWidth;

  let width = Math.ceil(maxX - minX + padX * 2);
  if (effectiveMaxWidth && width > effectiveMaxWidth) {
    const contentWidth = width - padX * 2;
    const safeMax = Math.max(effectiveMaxWidth - padX * 2, 1);
    const scale = safeMax / contentWidth;

    normalizedNodes = normalizedNodes.map((node) => ({
      ...node,
      x: padX + (node.x - padX) * scale
    }));

    normalizedEdges = normalizedEdges.map((edge) => ({
      ...edge,
      x1: padX + (edge.x1 - padX) * scale,
      x2: padX + (edge.x2 - padX) * scale
    }));

    width = effectiveMaxWidth;
  }

  const centeredNodeBounds = normalizedNodes.reduce(
    (acc, node) => ({
      minX: Math.min(acc.minX, node.x - tileWidth / 2),
      maxX: Math.max(acc.maxX, node.x + tileWidth / 2)
    }),
    { minX: Number.POSITIVE_INFINITY, maxX: Number.NEGATIVE_INFINITY }
  );

  const centerShift =
    width / 2 - (centeredNodeBounds.minX + centeredNodeBounds.maxX) / 2;

  if (Number.isFinite(centerShift) && Math.abs(centerShift) > 0.1) {
    normalizedNodes = normalizedNodes.map((node) => ({
      ...node,
      x: node.x + centerShift
    }));

    normalizedEdges = normalizedEdges.map((edge) => ({
      ...edge,
      x1: edge.x1 + centerShift,
      x2: edge.x2 + centerShift
    }));
  }

  const levels = new Map();
  normalizedNodes.forEach((node) => {
    if (!levels.has(node.depth)) {
      levels.set(node.depth, {
        y: node.y,
        minX: node.x,
        categories: new Map()
      });
    }
    const level = levels.get(node.depth);
    level.minX = Math.min(level.minX, node.x);
    const category = node.item.category ?? "Other";
    level.categories.set(category, (level.categories.get(category) ?? 0) + 1);
  });

  const levelLabels = Array.from(levels.entries())
    .sort((a, b) => a[0] - b[0])
    .map(([depth, level]) => {
      return {
        depth,
        text: getLevelBandLabel(depth),
        y: level.y,
        x: Math.max(10, level.minX - tileWidth / 2 - 106)
      };
    });

  if (labelGutter > 0) {
    normalizedNodes = normalizedNodes.map((node) => ({
      ...node,
      x: node.x + labelGutter
    }));

    normalizedEdges = normalizedEdges.map((edge) => ({
      ...edge,
      x1: edge.x1 + labelGutter,
      x2: edge.x2 + labelGutter
    }));

    width += labelGutter;
  }

  return {
    nodes: normalizedNodes,
    edges: normalizedEdges,
    levelLabels,
    width,
    height: Math.ceil(maxY + padY * 2)
  };
};

const projects = [
  {
    title: "BrevityCloud",
    date: "2024",
    text: (
      <>
        Built a <span className="emph2">cloud-native collaboration platform</span> focused
        on <span className="emph2">fast, reliable workflows</span> under real user load.
        Click through to see the <span className="emph2">architecture decisions</span> and
        production-style engineering tradeoffs.
      </>
    ),
    href: "https://github.com/The-Brevity-Cloud/term-project-team4-brevitycloud"
  },
  {
    title: "Lynx NITT",
    date: "2022",
    text: (
      <>
        Led development of the <span className="emph2">official campus app</span> with
        <span className="emph2"> secure .edu authentication</span>, event flows, and
        student-first UX. Open it to explore how <span className="emph2">product thinking</span>
        and <span className="emph2">full-stack execution</span> came together.
      </>
    ),
    href: "https://github.com/sanjeevmax6/Lynx-NITT"
  },
  {
    title: "TCP RL",
    date: "2024",
    text: (
      <>
        Designed a <span className="emph2">reinforcement-learning driven TCP control strategy</span>
        to improve network behavior in dynamic conditions. The repo shows
        <span className="emph2"> simulation setup</span>, <span className="emph2">reward design</span>,
        and performance-focused experimentation.
      </>
    ),
    href: "https://github.com/sanjeevmax6/tcp-rl"
  },
  {
    title: "NTID Chat App",
    date: "2023",
    text: (
      <>
        Engineered a <span className="emph2">real-time chat experience</span> with robust
        messaging flows, low-friction UX, and <span className="emph2">scalable backend integration</span>.
        Click to review implementation details and the product-quality finish.
      </>
    ),
    href: "https://github.com/sanjeevmax6/NTID-Chat-App"
  },
  {
    title: "Stock Market Ingestion Pipeline",
    date: "2024",
    text: (
      <>
        Built a <span className="emph2">market-data ingestion and analytics workflow</span>
        for quant-style use cases, with clean processing stages and
        <span className="emph2"> signal-oriented outputs</span>. Open the project to see
        the data engineering depth end-to-end.
      </>
    ),
    href: "https://github.com/sanjeevmax6/quant-dev-trial-sanjeev"
  },
  {
    title: "GCP Neural Networks (Cui Labs)",
    date: "2023",
    text: (
      <>
        Applied <span className="emph2">deep-learning workflows on GCP</span> in a
        cloud-first research setting, translating theory into
        <span className="emph2"> publishable outcomes</span> with reproducible experimentation.
        Click to see the research group and technical depth.
      </>
    ),
    href: "https://www.rit.edu/science/cui-research-group#current-members"
  },
  {
    title: "CarRacing Reinforcement Learning",
    date: "2024",
    text: (
      <>
        Built and tuned <span className="emph2">reinforcement learning agents</span> for a
        continuous-control racing environment, balancing exploration, stability, and
        <span className="emph2"> reward shaping</span> for stronger lap behavior.
      </>
    ),
    href: "https://github.com/sanjeevmax6/CarRacing-ReinforcementLearning"
  },
  {
    title: "ALSO Optimization",
    date: "2024",
    text: (
      <>
        Implemented <span className="emph2">optimization workflows</span> for robust
        decision-making under constraints, with clear experiment structure and
        <span className="emph2"> reproducible performance comparisons</span>.
      </>
    ),
    href: "https://github.com/sanjeevmax6/ALSO-Optimization"
  }
];

const companyLogos = {
  Nokia: nokiaLogo,
  Skillz: skillzLogo,
  "Spider R&D": spiderLogo,
  "IIT Madras": iitMadrasLogo,
  "IIT Kharagpur": iitKharagpurLogo
};

const experiences = [
  {
    role: "Software Engineer, Agentic AI",
    org: "Nokia",
    duration: "10 months",
    text: (
      <>
        Built <span className="emph2">backend automation</span> that cut operational
        workflows from <span className="emph2">4 hours to 10 minutes</span> and supported
        initiatives linked to <span className="emph2">$11M in cloud-cost optimization</span>.
      </>
    )
  },
  {
    role: "Software Engineer, Fullstack",
    org: "Skillz",
    duration: "6 months",
    text: (
      <>
        Resolved <span className="emph2">10+ critical Web SDK issues per week</span> and
        shipped <span className="emph2">high-impact features</span> that measurably improved
        tournament stability and release quality.
      </>
    )
  },
  {
    role: "Senior Application Developer",
    org: "Spider R&D",
    duration: "3 years",
    text: (
      <>
        Led <span className="emph2">20 developers across 17 teams</span> and launched campus
        apps that reached <span className="emph2">1,000+ downloads</span> with a
        <span className="emph2"> 4.9/5 user rating</span>.
      </>
    )
  },
  {
    role: "System Architect Intern",
    org: "IIT Madras",
    duration: "5 months",
    text: (
      <>
        Automated <span className="emph2">RISC-V compliance workflows</span> and generated
        <span className="emph2"> 100+ architecture test runs</span>, accelerating validation
        cycles for bit-manipulation instruction support.
      </>
    )
  },
  {
    role: "Full Stack Developer Intern",
    org: "IIT Kharagpur",
    duration: "3 months",
    text: (
      <>
        Delivered a <span className="emph2">Dockerized healthcare platform</span> on
        Raspberry Pi, enabling <span className="emph2">real-time vitals access</span> with
        automated backup and high-reliability edge deployments.
      </>
    )
  }
];

function ExperienceLogo({ company }) {
  const [error, setError] = useState(false);
  const logo = companyLogos[company];
  const initials = company
    .split(" ")
    .filter(Boolean)
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (!logo || error) {
    return <span className="experience2-logo-fallback">{initials}</span>;
  }

  return (
    <img
      className="experience2-logo"
      src={logo}
      alt={`${company} logo`}
      loading="lazy"
      onError={() => setError(true)}
    />
  );
}

function App2() {
  const experienceTrackRef = useRef(null);
  const heroImageWrapRef = useRef(null);
  const [activeExperience, setActiveExperience] = useState(0);
  const [contactState, setContactState] = useState("idle");
  const [contactMessage, setContactMessage] = useState("");
  const [viewportWidth, setViewportWidth] = useState(
    typeof window === "undefined" ? 1280 : window.innerWidth
  );
  const categorizedSkills = useMemo(
    () => orderSkillsByCategory(flattenSkills(skillTree)),
    []
  );
  const orderedSkills = useMemo(
    () => orderSkillsByLevelBands(categorizedSkills),
    [categorizedSkills]
  );
  const binarySkillTree = useMemo(
    () => buildBinaryTree(orderedSkills),
    [orderedSkills]
  );
  const treeLabelGutter = viewportWidth < 768 ? 88 : 128;
  const treeMaxWidth = useMemo(
    () => getTreeMaxWidth(viewportWidth),
    [viewportWidth]
  );
  const treeMetrics = useMemo(
    () => getTreeMetrics(binarySkillTree),
    [binarySkillTree]
  );
  const treeSizing = useMemo(
    () =>
      getResponsiveTreeSizing({
        viewportWidth,
        maxWidth: Math.max(treeMaxWidth - treeLabelGutter, 220),
        leafCount: treeMetrics.leafCount,
        depth: treeMetrics.depth
      }),
    [viewportWidth, treeLabelGutter, treeMaxWidth, treeMetrics.leafCount, treeMetrics.depth]
  );
  const denseSkillTree = treeSizing.tileWidth <= 60;
  const binaryTreeLayout = useMemo(
    () =>
      layoutBinaryTree(binarySkillTree, {
        tileWidth: treeSizing.tileWidth,
        tileHeight: treeSizing.tileHeight,
        levelGap: treeSizing.levelGap,
        nodeGap: treeSizing.nodeGap,
        maxWidth: treeMaxWidth,
        labelGutter: treeLabelGutter
      }),
    [
      binarySkillTree,
      treeMaxWidth,
      treeLabelGutter,
      treeSizing.levelGap,
      treeSizing.nodeGap,
      treeSizing.tileHeight,
      treeSizing.tileWidth
    ]
  );

  useEffect(() => {
    const track = experienceTrackRef.current;
    if (!track) return;
    const card = track.children[activeExperience];
    if (!card) return;

    track.scrollTo({
      left: card.offsetLeft,
      behavior: "smooth",
      top: 0
    });
  }, [activeExperience]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveExperience((prev) => (prev + 1) % experiences.length);
    }, 3800);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const onResize = () => setViewportWidth(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleExperienceScroll = () => {
    const track = experienceTrackRef.current;
    if (!track) return;

    const cards = Array.from(track.children);
    if (!cards.length) return;

    const currentScroll = track.scrollLeft;
    let closestIndex = 0;
    let minDistance = Number.POSITIVE_INFINITY;

    cards.forEach((card, index) => {
      const distance = Math.abs(card.offsetLeft - currentScroll);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    if (closestIndex !== activeExperience) {
      setActiveExperience(closestIndex);
    }
  };

  const handleContactSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!FORMSPREE_ENDPOINT) {
      setContactState("error");
      setContactMessage(
        "Form is not configured yet. Add REACT_APP_FORMSPREE_ENDPOINT in your .env file."
      );
      return;
    }

    setContactState("loading");
    setContactMessage("Sending...");

    try {
      const formData = new FormData(form);
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json"
        }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setContactState("success");
      setContactMessage("Message sent successfully. I will get back to you soon.");
    } catch (error) {
      setContactState("error");
      setContactMessage("Could not send message. Please try again in a moment.");
    }
  };

  return (
    <div className="site2">
      <header className="nav2">
        <div className="container2 nav2-inner">
          <nav className="nav2-links">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <a className="brand2" href="#home">
            Sanjeev Vijayakumar
          </a>

          <a className="btn2 nav-contact2" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main>
        <section className="section2 hero2" id="home">
          <div className="container2 hero2-grid">
            <div className="hero2-copy">
              <HeroTypewriter />
              <p className="lead2">
                I&apos;m a <span className="emph2">software engineer</span> who likes building
                systems that live at the edge of <span className="emph2">backend</span>,
                <span className="emph2"> infrastructure</span>, and
                <span className="emph2"> applied AI</span> with a strong frontend sensibility.
                I enjoy tackling problems that start off unclear or messy, and turning
                them into tools people actually <span className="emph2">trust and use</span>.
              </p>
            </div>
            <div
              className="hero2-media-zone"
            >
              <RoleBubbleOrbit anchorRef={heroImageWrapRef} />
              <div
                className={`hero2-image-wrap ${
                  SHOW_HERO_MEDIA_FRAME ? "is-framed" : "is-plain"
                }`}
                ref={heroImageWrapRef}
              >
                <img src={heroImage} alt="Sanjeev Vijayakumar" className="hero2-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="section2 section2-alt">
          <div className="container2 center2">
            <h2 className="heading2">
              The goal is not just to build software, but systems that people use & trust.
            </h2>
          </div>
        </section>

        <section className="section2" id="about">
          <div className="container2">
            <div className="section-header2">
              <p className="label2">Experience</p>
              <h3 className="subheading2">At a glance</h3>
            </div>
            <div className="experience2-carousel">
              <div
                className="experience2-track"
                ref={experienceTrackRef}
                onScroll={handleExperienceScroll}
              >
                {experiences.map((item, index) => (
                  <article className="experience2-card" key={item.role}>
                    <div className="experience2-card-head">
                      <div className="experience2-logo-wrap">
                        <ExperienceLogo company={item.org} />
                      </div>
                      <div className="experience2-title-wrap">
                        <h4>{item.role}</h4>
                        <p className="experience2-company">{item.org}</p>
                      </div>
                    </div>
                    <p className="experience2-text">{item.text}</p>
                    <span className="experience2-count">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section2 section2-alt" id="skills">
          <div className="container2">
            <div className="section-header2">
              <p className="label2">Skills</p>
              <h3 className="subheading2">My (Complete Binary) Skills</h3>
            </div>

            {SHOW_ALT_BINARY_SKILL_TREE ? (
              <div className={`skilltree3-wrap ${denseSkillTree ? "is-dense" : ""}`}>
                <div
                  className="skilltree3-canvas"
                  style={{
                    width: `${binaryTreeLayout.width}px`,
                    height: `${binaryTreeLayout.height}px`,
                    "--tree-node-w": `${treeSizing.tileWidth}px`,
                    "--tree-node-h": `${treeSizing.tileHeight}px`,
                    "--tree-icon-size": treeSizing.iconSize,
                    "--tree-label-size": treeSizing.labelSize
                  }}
                >
                  <svg
                    className="skilltree3-lines"
                    viewBox={`0 0 ${binaryTreeLayout.width} ${binaryTreeLayout.height}`}
                    preserveAspectRatio="xMidYMin meet"
                    aria-hidden="true"
                  >
                    {binaryTreeLayout.edges.map((edge, index) => (
                      <line
                        key={`edge-${index}`}
                        x1={edge.x1}
                        y1={edge.y1}
                        x2={edge.x2}
                        y2={edge.y2}
                      />
                    ))}
                  </svg>
                  {binaryTreeLayout.levelLabels
                    .filter((levelLabel) => levelLabel.depth !== 0 && levelLabel.depth !== 3)
                    .map((levelLabel, index) => (
                      <p
                        className="skilltree3-level-label"
                        key={`${levelLabel.text}-${index}`}
                        style={{
                          left: `${viewportWidth < 768 ? 14 : 18}px`,
                          top: `${levelLabel.y}px`
                        }}
                      >
                        {levelLabel.text}
                      </p>
                    ))}
                  {binaryTreeLayout.nodes.map((node) => (
                    <article
                      className="skill2-tile skilltree3-tile"
                      key={node.key}
                      aria-label={node.item.name}
                      style={{
                        left: `${node.x}px`,
                        top: `${node.y}px`
                      }}
                    >
                      <div className="skill2-icon">{node.item.icon}</div>
                      <p className="skill2-name">{node.item.name}</p>
                    </article>
                  ))}
                </div>
              </div>
            ) : (
              <div className="skilltree2-wrap">
                <div className="skilltree2-branches">
                  {skillTree.branches.map((branch) => (
                    <div className="skilltree2-branch" key={branch.label}>
                      <div className="skilltree2-branch-node">{branch.label}</div>
                      <div className="skilltree2-branch-line" />

                      <div className="skilltree2-groups">
                        {branch.groups.map((group) => (
                          <div className="skilltree2-group" key={group.label}>
                            <div className="skilltree2-group-node">{group.label}</div>
                            <div className="skills2-grid">
                              {group.items.map((item) => (
                                <article
                                  className="skill2-tile"
                                  key={`${group.label}-${item.name}`}
                                  aria-label={item.name}
                                >
                                  <div className="skill2-icon">{item.icon}</div>
                                  <p className="skill2-name">{item.name}</p>
                                </article>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="section2" id="projects">
          <div className="container2">
            <div className="section-header2">
              <p className="label2">Projects</p>
              <h3 className="subheading2">Here&apos;s my spare time bundled up</h3>
            </div>
            <div className="cards3-2">
              {projects.map((project) => (
                <article className="card2 project2" key={project.title}>
                  <p className="project2-date">{project.date}</p>
                  <h4>{project.title}</h4>
                  <p>{project.text}</p>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    View Project <FaExternalLinkAlt />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section2 cta2">
          <div className="container2 cta2-row">
            <h3>The work I do helps teams ship faster and scale confidently.</h3>
          </div>
        </section>

      </main>

      <footer className="footer2" id="contact">
        <div className="container2 footer2-grid">
          <div>
            <h4 className="footer2-title">Let&apos;s build something useful.</h4>
            <p>Open to Software Engineering and AI Engineering opportunities.</p>
            <div className="social2">
              <a
                href="https://github.com/sanjeevmax6"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjeev06/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a href="mailto:sv8958@rit.edu" aria-label="Email">
                <FaEnvelope />
              </a>
            </div>
          </div>

          <form className="contact2" onSubmit={handleContactSubmit}>
            <h4>Let&apos;s Work Together</h4>
            <div className="contact2-grid">
              <input type="text" name="firstName" placeholder="First name" required />
              <input type="text" name="lastName" placeholder="Last name" required />
              <input type="email" name="email" placeholder="Email" required />
              <input type="tel" name="phone" placeholder="Phone number" />
              <textarea
                rows="5"
                name="message"
                placeholder="Tell me about your project"
                required
              />
            </div>
            <button className="btn2" type="submit" disabled={contactState === "loading"}>
              {contactState === "loading" ? "Sending..." : "Submit"}
            </button>
            {contactMessage ? (
              <p className={`contact2-status is-${contactState}`}>{contactMessage}</p>
            ) : null}
          </form>
        </div>
      </footer>
    </div>
  );
}

export default App2;
