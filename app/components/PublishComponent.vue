<template>
  <div class="space-y-3">
    <JobCard
        name="publish:blog"
        status="passed"
        description="I write about the real forces that shape developer productivity, drawing on two decades of work in startups, scale-ups, and large organisations. My focus is on how culture, processes, and organisational behaviour influence the developer experience, often far more than the tools teams use."
        :tags="['blog.pragmaticdx.com','Pragmatic Developer Experience']"
        duration="13.0s"
        href="https://blog.pragmaticdx.com/"
    />

    <JobCard
        name="publish:dx-radar"
        status="passed"
        description="The DX Radar gathers and highlights the latest ideas, research, and discussions on developer experience from across the web, making it easier to stay informed without having to search for everything yourself."
        :tags="['radar.pragmaticdx.com','DX Radar']"
        duration="5.0s"
        href="https://radar.pragmaticdx.com/"
    />

    <TerminalSection
        title="publication results"
        :lines="[
              '✓ All projects successfully delivered',
              '✓ 40% improvement in developer satisfaction',
              '✓ 100+ subscribers',
              '✓ 99% positive feedback rating'
            ]"
    />
  </div>
</template>
<script setup lang="ts">
</script>