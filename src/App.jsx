import { useMemo, useState } from "react";
import {
  Container,
  Group,
  Stack,
  Title,
  Text,
  Button,
  Card,
  Badge,
  SimpleGrid,
  Anchor,
  Divider,
  Modal,
} from "@mantine/core";
import classes from "./App.module.css";

import danPhoto from "./assets/dan.png";

const GITHUB = "https://github.com/DanHult88";
const LINKEDIN = "https://www.linkedin.com/in/dan-hult/";
const EMAIL = "Dan.hult@hotmail.com";


const RESUME_PDF = "/Dan_Hult_CV_2025.pdf";
const LETTER_PDF = "/Dan_Hult_Personligt_Brev_2025.pdf";

const projects = [
  {
    title: "Cloud Notes App (AWS)",
    description:
      "Full-stack notes app with a React frontend and backend API. Focused on clean project structure, async flows, and cloud-ready architecture.",
    tags: ["React", "API", "AWS", "Full-stack"],
    live: null,
    frontendRepo: "https://github.com/DanHult88/aws-notes-frontend",
    backendRepo: "https://github.com/DanHult88/aws-notes-backend",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "React chat app exploring real-time UI patterns, message flows, and component structure. Built to practice interactive state updates and UX.",
    tags: ["React", "JavaScript", "UI", "State"],
    live: null,
    repo: "https://github.com/DanHult88/ChatApp",
  },
  {
    title: "Bloggy CRUD Backend",
    description:
      "CRUD backend built in C# with a focus on data modeling and predictable endpoints. Demonstrates backend fundamentals and maintainable structure.",
    tags: ["C#", "CRUD", "Backend", "API"],
    live: null,
    repo: "https://github.com/DanHult88/Bloggy-CRUD",
  },
  {
    title: "Web Analytics Tool",
    description:
      "Tool for collecting and presenting web analytics insights. Focused on transforming data into clear UI and building features that feel product-driven.",
    tags: ["JavaScript", "Data", "UI", "Tooling"],
    live: null,
    repo: "https://github.com/DanHult88/Web-Analytics-Tools",
  },
  {
    title: "Weather Search App",
    description:
      "Weather app consuming a public API with search, loading/error states, and clean UI. Built to practice async data handling and UX polish.",
    tags: ["JavaScript", "API", "UX", "Frontend"],
    live: null,
    repo: "https://github.com/DanHult88/Weatherapp",
  },
  {
    title: "Snake Game (JavaScript)",
    description:
      "Classic Snake game built with vanilla JavaScript. Focused on game loop logic, input handling, and state updates.",
    tags: ["JavaScript", "Game", "Logic"],
    live: null,
    repo: "https://github.com/DanHult88/SnakeGame",
  },
];

export default function App() {
  const [opened, setOpened] = useState(false);
  const [selectedTitle, setSelectedTitle] = useState(null);

  const selected = useMemo(() => {
    if (!selectedTitle) return null;
    return projects.find((p) => p.title === selectedTitle) ?? null;
  }, [selectedTitle]);

  const openProject = (p) => {
    setSelectedTitle(p.title);
    setOpened(true);
  };

  const closeProject = () => setOpened(false);

  const getRepoLinks = (p) => {
    const links = [];
    if (p.frontendRepo) links.push({ label: "Frontend repo", href: p.frontendRepo });
    if (p.backendRepo) links.push({ label: "Backend repo", href: p.backendRepo });
    if (!p.frontendRepo && !p.backendRepo && p.repo) {
      links.push({ label: "GitHub", href: p.repo });
    }
    return links;
  };

  return (
    <div className={classes.page}>
      <Container size="md" py={56}>
        {/* Top nav */}
        <Group justify="space-between" align="center">
          <Text fw={800} c="white">
           Dan Hult
          </Text>

          <Group gap="md">
            <Anchor href="#projects" underline="never" className={classes.navLink}>
              Projects
            </Anchor>
            <Anchor href="#about" underline="never" className={classes.navLink}>
              About
            </Anchor>
            <Anchor href="#contact" underline="never" className={classes.navLink}>
              Contact
            </Anchor>
          </Group>
        </Group>

        {/* ===== HERO ===== */}
        <div className={classes.heroGrid}>
          {/* LEFT */}
          <div>
            

            {/* Greeting block */}
            <div className={classes.heroTopBlock}>
              <div className={classes.helloRow}>
                <div className={classes.heroHello}>Hello</div>
                <div className={classes.helloDot} />
              </div>

              <div className={classes.heroName}>I’m Dan</div>

              <div className={classes.heroRole}>
                Web Developer{" "}
                <span style={{ color: "rgba(255,255,255,0.78)" }}>
                  (Frontend / Full-stack)
                </span>
              </div>

              <div className={classes.heroAccentLine} />
            </div>

            {/* Body block */}
            <Stack gap="md" className={classes.heroBodyWrap}>
              <Text className={classes.heroBody}>
               I’m a web developer with experience working across both frontend and backend. I mainly work with React, JavaScript, and C#/.NET,
                and I’m continuing to build my skills in cloud development using Azure and AWS, Secure DevOps,
                and Python with a focus on AI. I enjoy learning new technologies and building clean, reliable code.
              </Text>

              <Text className={classes.heroCallout}>
                Currently looking for junior roles within web development, frontend, or full-stack (React/.NET), based in Kalmar or open to remote opportunities.
              </Text>
            </Stack>

            {/* Tech row */}
            <Group className={classes.techBanner}>
              <Text>HTML5</Text>
              <Text>JavaScript</Text>
              <Text>React</Text>
              <Text>C# / .NET</Text>
              <Text>SQL</Text>
              <Text>Azure</Text>
              <Text>AWS</Text>
              <Text>Secure DevOps</Text>
              <Text>Python</Text>
              <Text>Git</Text>
              <Text>GitHub</Text>
              <Text>WordPress</Text>
            </Group>

            

            {/* CTA buttons */}
            <Group mt="xl" gap="md">

              
              <Button
                component="a"
                href={RESUME_PDF}
                target="_blank"
                radius="md"
                className={classes.primaryBtn}
              >
                Resume
              </Button>

              <Button
                variant="default"
                component="a"
                href={LETTER_PDF}
                target="_blank"
                radius="md"
                classNames={{ root: classes.hoverBtn }}
              >
                Personal letter
              </Button>

              <Button
                variant="default"
                component="a"
                href={GITHUB}
                target="_blank"
                radius="md"
                classNames={{ root: classes.hoverBtn }}
              >
                GitHub
              </Button>
              
            </Group>
            <br>
            </br>
            <Badge
              variant="filled"
              radius="xl"
              styles={{
                root: {
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                },
              }}
            >
              Available for opportunities
            </Badge>

          </div>

          {/* RIGHT (Photo) */}
          <div className={classes.photoWrap}>
            <div className={classes.photoHalo} />
            <div className={classes.photoRing} />
            <img className={classes.avatar} src={danPhoto} alt="Dan Hult" />
          </div>
        </div>

        <Divider my={56} color="rgba(255,255,255,0.10)" />

        {/* Projects */}
        <section id="projects" className={classes.section}>
          <div className={classes.sectionInner}>
            <Title order={2} c="white" className={classes.sectionTitle}>
              Projects
            </Title>

            {/* ✅ BAR under Projects title */}
            <div className={classes.sectionBar} />

            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md" mt="xl">
              {projects.map((p) => {
                const repoLinks = getRepoLinks(p);

                return (
                  <Card
                    key={p.title}
                    radius="lg"
                    padding="lg"
                    tabIndex={0}
                    className={classes.projectCard}
                    onClick={() => openProject(p)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") openProject(p);
                    }}
                    styles={{
                      root: {
                        backgroundColor: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.10)",
                      },
                    }}
                  >
                    <Stack gap="xs" className={classes.projectBody}>
                      <Title order={3} size="h4" c="white">
                        {p.title}
                      </Title>

                      <Text c="gray.3" size="sm" className={classes.projectDescription}>
                        {p.description}
                      </Text>

                      <Group gap={8} mt="xs">
                        {p.tags.map((t) => (
                          <Badge
                            key={t}
                            variant="filled"
                            styles={{
                              root: {
                                backgroundColor: "rgba(255,255,255,0.06)",
                                border: "1px solid rgba(255,255,255,0.10)",
                              },
                            }}
                          >
                            {t}
                          </Badge>
                        ))}
                      </Group>

                      <Group
                        gap="md"
                        mt="sm"
                        className={classes.projectLinks}
                        onClick={(e) => e.stopPropagation()}
                      >
                        {repoLinks.map((l) => (
                          <Anchor key={l.href} href={l.href} target="_blank" c="gray.2">
                            {l.label}
                          </Anchor>
                        ))}
                      </Group>
                    </Stack>
                  </Card>
                );
              })}
            </SimpleGrid>
          </div>
        </section>

        <Divider my={56} color="rgba(255,255,255,0.10)" />

        {/* About */}
        <section id="about" className={classes.section}>
          <div className={classes.sectionInner}>
            <Title order={2} c="white" className={classes.sectionTitle}>
              About
            </Title>

            {/* ✅ BAR under About title */}
            <div className={classes.sectionBar} />

            <Text c="gray.3" mt="lg" style={{ textAlign: "center" }}>
              I’m a solution-oriented web developer with a strong focus on modern web applications.
              I have experience working with React, JavaScript, C#, .NET/Blazor, SQL, HTML, and CSS,
              and I enjoy working at the intersection of user experience and technical quality.
              <br />
              <br />
              Beyond my core education, I’ve expanded my skill set through hands-on work and courses
              in AI development with Python, cloud development using Azure and AWS, and Secure DevOps.
              I’m particularly interested in scalable, secure solutions and building systems that are reliable
              in real-world environments.
            </Text>
          </div>
        </section>

        <Divider my={56} color="rgba(255,255,255,0.10)" />

        {/* Contact */}
        <section id="contact" className={classes.section}>
          <div className={classes.sectionInner}>
            <Title order={2} c="white" className={classes.sectionTitle}>
              Contact
            </Title>

            {/* ✅ BAR under Contact title */}
            <div className={classes.sectionBar} />

            <Text c="gray.3" mt="lg" style={{ textAlign: "center" }}>
              If you’d like to get in touch with me, feel free to reach out via email or connect with me on LinkedIn. This can easily be done by using the buttons below
            </Text>

            <Group mt="xl" gap="md" justify="center">
  <Button
    component="a"
    href={`mailto:${EMAIL}`}
    variant="default"
    radius="md"
    size="md"
    w={180}
    classNames={{ root: classes.hoverBtn }}
  >
    Email me
  </Button>

  <Button
    component="a"
    href={LINKEDIN}
    target="_blank"
    variant="default"
    radius="md"
    size="md"
    w={180}
    classNames={{ root: classes.hoverBtn }}
  >
    LinkedIn
  </Button>
</Group>
          </div>
        </section>

        <Text c="gray.5" mt={64} size="sm" style={{ textAlign: "center" }}>
          © {new Date().getFullYear()} Dan Hult. All rights reserved.
        </Text>
      </Container>

      {/* Project Modal */}
      <Modal
        opened={opened}
        onClose={closeProject}
        centered
        size="lg"
        title={selected?.title ?? "Project"}
        styles={{
          content: {
            backgroundColor: "#0b0b10",
            border: "1px solid rgba(255,255,255,0.10)",
          },
          header: {
            backgroundColor: "#0b0b10",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          },
          title: { color: "white", fontWeight: 800 },
          close: { color: "white" },
        }}
      >
        {selected && (
          <Stack gap="md">
            <Text c="gray.3">{selected.description}</Text>

            <Group gap={8}>
              {selected.tags.map((t) => (
                <Badge
                  key={t}
                  variant="filled"
                  styles={{
                    root: {
                      backgroundColor: "rgba(255,255,255,0.06)",
                      border: "1px solid rgba(255,255,255,0.10)",
                    },
                  }}
                >
                  {t}
                </Badge>
              ))}
            </Group>

            <Group mt="sm" gap="md">
              {getRepoLinks(selected).map((l) => (
                <Button
                  key={l.href}
                  component="a"
                  href={l.href}
                  target="_blank"
                  variant="default"
                  classNames={{ root: classes.hoverBtn }}
                >
                  {l.label}
                </Button>
              ))}
            </Group>
          </Stack>
        )}
      </Modal>
    </div>
  );
}
