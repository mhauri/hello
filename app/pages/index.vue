<MetaComponent/>
<template>
  <div class="min-h-screen bg-neutral-900">
    <PipelineHeader/>
    <div class="container mx-auto px-4 py-8 max-w-6xl">
      <PipelineOverview/>

      <!-- Build Stage -->
      <PipelineStage title="build" status="passed" duration="45s">
        <BuildComponent/>
      </PipelineStage>

      <!-- Test Stage -->
      <PipelineStage title="test" status="passed" duration="18s">
        <TestComponent/>
      </PipelineStage>

      <!-- Deploy Stage -->
      <PipelineStage title="deploy" status="running" duration="0">
        <DeployComponent/>
      </PipelineStage>
      <PipelineSummary/>
    </div>

    <FooterComponent/>
  </div>
</template>
