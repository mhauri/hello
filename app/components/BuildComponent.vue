<template>
  <div class="space-y-3">
    <JobCard
        name="initialize:profile"
        status="passed"
        description="I’ve spent more than twenty years writing software across a wide range of technologies and environments. Over that time, I’ve learned how to design reliable systems, solve complex engineering problems, and support teams through periods of rapid change. Today, I work as a Developer Experience Engineer, focusing on improving the tools, processes, and infrastructure that developers rely on every day. My role is to remove friction, strengthen engineering workflows, and help teams deliver high-quality systems faster and with greater confidence."
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
</template>