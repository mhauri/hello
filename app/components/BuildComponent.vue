<template>
  <div class="space-y-3">
    <JobCard
        name="build:initialize:profile"
        status="passed"
        description="I’ve spent more than twenty years writing software across a wide range of technologies and environments. Over that time, I’ve learned how to design reliable systems, solve complex engineering problems, and support teams through periods of rapid change. Today, I work as a Developer Experience Engineer, focusing on improving the tools, processes, and infrastructure that developers rely on every day. My role is to remove friction, strengthen engineering workflows, and help teams deliver high-quality systems faster and with greater confidence."
        duration="0.7s"
    />

    <JobCard
        name="build:compile:expertise"
        status="passed"
        description="My experience includes working with AI-assisted development, strengthening developer productivity, and building the foundations that enable engineering teams to move with confidence. This covers API design, DevOps practices, and the use of metrics such as DORA and SPACE to understand how teams actually work"
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
</template>