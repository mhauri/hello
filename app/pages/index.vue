<script setup lang="ts">
import {Github, Linkedin, Mail, Twitter, FileText, Download} from "lucide-vue-next"

const today = new Date()
const buildNumber = `#${today.getFullYear()}${String(today.getMonth() + 1).padStart(2, '0')}${String(today.getDate()).padStart(2, '0')}`
</script>

<template>
  <main class="min-h-screen bg-neutral-900">
    <PipelineHeader/>

    <div class="container mx-auto px-4 py-8 max-w-6xl">
      <!-- Pipeline Overview -->
      <div class="mb-8 bg-card border border-border rounded-lg p-6">
        <div class="flex items-start justify-between mb-4">
          <div>
            <h1 class="text-2xl font-bold text-foreground mb-2">Hey I'm Marcel 👋</h1>
            <p class="text-sm text-muted-foreground">
              Pipeline created by <span class="text-foreground font-mono">Marcel Hauri</span> for commit <span
                class="text-foreground font-mono bg-zinc-700 p-1 text-xs">{{ buildNumber }}</span> in <span
                class="text-foreground font-mono">main</span> branch •
              <span class="text-muted-foreground ml-1">3 stages</span> •
              <span class="text-muted-foreground ml-1">8 jobs</span>
            </p>
          </div>
          <StatusBadge type="running" label="Running"/>
        </div>

        <div class="flex gap-2">
          <a
              href="https://github.com/mhauri/dx"
              class="inline-flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 text-secondary-foreground rounded-md text-sm font-medium transition-colors"
          >
            <Github class="h-4 w-4"/>
            View Source
          </a>
          <a
              href="/resume.pdf"
              class="inline-flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md text-sm font-medium transition-colors"
          >
            <Download class="h-4 w-4"/>
            Download Resume
          </a>
        </div>
      </div>

      <!-- Build Stage -->
      <PipelineStage title="build" status="passed" duration="45s">
        <div class="space-y-3">
          <JobCard
              name="initialize:profile"
              status="passed"
              description="I’ve spent over two decades writing code. Today, I work as a Developer Experience Engineer, helping teams build better systems, faster."
              duration="0.7s"
          />
          <JobCard
              name="compile:further-education"
              status="passed"
              description="Cyber Security Specialist (Swiss Federal Examination)"
              :tags="['Digital Forensics', 'System Analysis', 'Incident Response', 'Threat Management', 'Team Development', 'Leadership']"
              duration="3.0s"
          />

          <JobCard
              name="compile:expertise"
              status="passed"
              :tags="['AI-Assisted Development', 'Developer Productivity','Engineering Enablement', 'API Design', 'DORA Metrics', 'SPACE Framework', 'DevOps', 'Coaching']"
              duration="41.3s"
          />

          <TerminalSection
              title="build output"
              :lines="[
              '✓ Compiled expertise in developer experience',
              '✓ Generated comprehensive documentation skills',
              '✓ Built community engagement capabilities',
              '✓ Optimized for maximum developer happiness'
            ]"
          />
        </div>
      </PipelineStage>

      <!-- Test Stage -->
      <PipelineStage title="test" status="passed" duration="13s">
        <div class="space-y-3">
          <JobCard
              name="test:projects:blog"
              status="passed"
              description="I write about the real factors that make developers productive, rooted in two decades of experience across startups, scale-ups, and enterprises, and expose how culture, process, and organizational dysfunction matter far more than tools."
              :tags="['Pragmatic DX','Pragmatic Developer Experience']"
              duration="13.0s"
              href="https://blog.pragmaticdx.com/"
          />

          <TerminalSection
              title="test results"
              :lines="[
              '✓ All projects successfully delivered',
              '✓ 40% improvement in developer satisfaction',
              '✓ 100+ subscribers',
              '✓ 99% positive feedback rating'
            ]"
          />
        </div>
      </PipelineStage>

      <!-- Deploy Stage -->
      <PipelineStage title="deploy" status="running" duration="0">
        <div class="space-y-3">
          <JobCard
              name="deploy:work:developer-experience-engineer"
              status="running"
              description="Die Mobiliar • Shaping and delivering the Developer Experience strategy by removing friction from the developer journey, improving workflows, advancing dev environments, defining meaningful DX metrics, and driving AI-assisted DevOps to boost engineering productivity."
              :tags="['2026 — Present']"
              duration="ongoing"
          />


          <JobCard
              name="deploy:social:connect"
              status="pending"
              description="Building connections with the developer and devex community across multiple platforms"
              duration="pending"
          />

          <div class="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4">
            <a
                href="https://github.com/mhauri"
                class="flex items-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary border border-border rounded-md text-sm font-medium transition-all hover:border-primary/30"
            >
              <Github class="h-4 w-4"/>
              <span>GitHub</span>
            </a>

            <a
                href="https://linkedin.com"
                class="flex items-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary border border-border rounded-md text-sm font-medium transition-all hover:border-primary/30"
            >
              <Linkedin class="h-4 w-4"/>
              <span>LinkedIn</span>
            </a>

            <a
                href="https://twitter.com"
                class="flex items-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary border border-border rounded-md text-sm font-medium transition-all hover:border-primary/30"
            >
              <Twitter class="h-4 w-4"/>
              <span>Twitter</span>
            </a>

            <a
                href="mailto:hello@example.com"
                class="flex items-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary border border-border rounded-md text-sm font-medium transition-all hover:border-primary/30"
            >
              <Mail class="h-4 w-4"/>
              <span>Email</span>
            </a>

            <a
                href="/resume.pdf"
                class="flex items-center gap-2 px-4 py-3 bg-secondary/50 hover:bg-secondary border border-border rounded-md text-sm font-medium transition-all hover:border-primary/30"
            >
              <FileText class="h-4 w-4"/>
              <span>Resume</span>
            </a>
          </div>
        </div>
      </PipelineStage>

      <!-- Final Summary -->
      <div class="mt-8 border border-success/30 bg-success/5 rounded-lg p-6">
        <h3 class="text-lg font-semibold text-foreground mb-3 flex items-center gap-2">
          <span class="h-2 w-2 rounded-full bg-success animate-pulse"/>
          Pipeline Summary
        </h3>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p class="text-muted-foreground mb-1">Total Duration</p>
            <p class="text-foreground font-mono font-semibold"><Timer :start="88"/></p>
          </div>
          <div class="text-left md:text-right">
            <p class="text-muted-foreground mb-1">Jobs Completed</p>
            <p class="text-foreground font-mono font-semibold">6 / 8</p>
          </div>
        </div>

        <div class="mt-4 pt-4 border-t border-success/20">
          <p class="text-muted-foreground text-sm mb-3">Ready to collaborate?</p>
          <a
              href="mailto:hello@example.com"
              class="inline-flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-md font-medium transition-all hover:shadow-lg hover:shadow-primary/20"
          >
            <Mail class="h-4 w-4"/>
            Start a Conversation
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <footer class="bg-black border-t border-border mt-12">
      <div class="container mx-auto px-4 py-6">
        <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p class="font-mono">© 2025 DX Engineer Pipel ine • Built with Nuxt & TypeScript</p>
          <p class="font-mono">Last deployed: 5 minutes ago</p>
        </div>
      </div>
    </footer>
  </main>
</template>
