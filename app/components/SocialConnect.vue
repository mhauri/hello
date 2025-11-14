<template>
  <nav class="grid grid-cols-2 md:grid-cols-5 gap-3 mt-4" aria-label="Social media links">
    <a
        href="https://github.com/mhauri"
        class="flex items-center gap-2 px-4 py-3 bg-secondary hover:bg-neutral-700 border border-border rounded-md text-sm font-medium transition-all"
        rel="noopener noreferrer me"
        target="_blank"
        aria-label="Visit Marcel Hauri's GitHub profile"
        title="Visit Marcel Hauri's GitHub profile"
    >
      <Icon name="line-md:github" class="h-4 w-4" aria-hidden="true"/>
      <span>GitHub</span>
    </a>

    <a
        href="https://www.linkedin.com/in/marcelhauri/"
        class="flex items-center gap-2 px-4 py-3 bg-secondary hover:bg-neutral-700 border border-border rounded-md text-sm font-medium transition-all"
        rel="noopener noreferrer me"
        target="_blank"
        aria-label="Connect with Marcel Hauri on LinkedIn"
        title="Connect with Marcel Hauri on LinkedIn"
    >
      <Icon name="line-md:linkedin" class="h-4 w-4" aria-hidden="true"/>
      <span>LinkedIn</span>
    </a>

    <a
        href="https://swiss.social/@mhauri"
        class="flex items-center gap-2 px-4 py-3 bg-secondary hover:bg-neutral-700 border border-border rounded-md text-sm font-medium transition-all"
        rel="noopener noreferrer me"
        target="_blank"
        aria-label="Follow Marcel Hauri on Mastodon"
        title="Follow Marcel Hauri on Mastodon"
    >
      <Icon name="line-md:mastodon" class="h-4 w-4" aria-hidden="true"/>
      <span>Mastodon</span>
    </a>

    <a
        href="https://bsky.app/profile/hauri.dev"
        class="flex items-center gap-2 px-4 py-3 bg-secondary hover:bg-neutral-700 border border-border rounded-md text-sm font-medium transition-all"
        rel="noopener noreferrer me"
        target="_blank"
        aria-label="Follow Marcel Hauri on Bluesky"
        title="Follow Marcel Hauri on Bluesky"
    >
      <Icon name="line-md:bluesky" class="h-4 w-4" aria-hidden="true"/>
      <span>Bluesky</span>
    </a>

    <a
        href="mailto:marcel@hauri.dev"
        class="flex items-center gap-2 px-4 py-3 bg-secondary hover:bg-neutral-700 border border-border rounded-md text-sm font-medium transition-all"
        aria-label="Email Marcel Hauri"
        title="Email Marcel Hauri"
    >
      <Icon name="line-md:email" class="h-4 w-4" aria-hidden="true"/>
      <span>Email</span>
    </a>

  </nav>
</template>