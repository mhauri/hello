<template>

</template>
<script>
useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Marcel Hauri',
        url: 'https://hauri.dev',
        image: 'https://hauri.dev/og-image.png',
        jobTitle: 'Developer Experience Engineer',
        worksFor: {
          '@type': 'Organization',
          name: 'Die Mobiliar'
        },
        description: 'Developer Experience Engineer, helping teams build better systems, faster.',
        sameAs: [
          'https://github.com/mhauri',
          'https://www.linkedin.com/in/marcelhauri/',
          'https://swiss.social/@mhauri',
          'https://bsky.app/profile/hauri.dev',
          'https://blog.pragmaticdx.com/'
        ],
        knowsAbout: [
          'Developer Experience',
          'AI-Assisted Development',
          'Developer Productivity',
          'Engineering Enablement',
          'API Design',
          'DORA Metrics',
          'SPACE Framework',
          'DevOps',
          'Cyber Security',
          'Digital Forensics',
          'System Analysis',
          'Incident Response'
        ],
        alumniOf: {
          '@type': 'EducationalOrganization',
          name: 'Cyber Security Specialist',
          description: ''
        }
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Marcel Hauri Portfolio',
        url: 'https://hauri.dev',
        description: 'Developer Experience Engineer, helping teams build better systems, faster.',
        author: {
          '@type': 'Person',
          name: 'Marcel Hauri'
        },
        inLanguage: 'en-US'
      })
    },
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ProfilePage',
        mainEntity: {
          '@type': 'Person',
          name: 'Marcel Hauri',
          jobTitle: 'Developer Experience Engineer'
        }
      })
    }
  ]
})
</script>