<template>
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
</template>