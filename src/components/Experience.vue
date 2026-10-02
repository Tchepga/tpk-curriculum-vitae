<template>
  <section class="experience">
    <h2>{{ t('experience.title') }}</h2>
    <div class="experience-item" v-for="(job, index) in localizedJobs" :key="index">
      <div class="job-header">
        <h3>{{ job.title }}</h3>
        <div class="period-info">
          <span class="period">{{ job.period }}</span>
          <span v-if="job.duration" class="duration">({{ job.duration }})</span>
        </div>
      </div>
      <div class="company">{{ job.company }}</div>
      <div class="sector">{{ job.sector }}</div>
      <p class="description">{{ job.description }}</p>

      <div v-if="job.responsibilities?.length" class="responsibilities">
        <h4>{{ t('experience.responsibilities') }}</h4>
        <ul>
          <li v-for="(resp, idx) in job.responsibilities" :key="idx">{{ resp }}</li>
        </ul>
      </div>

      <div v-if="job.keywords?.length" class="keywords">
        <h4>{{ t('experience.keywords') }}</h4>
        <div class="keyword-list">
          <span v-for="(keyword, idx) in job.keywords" :key="idx" class="keyword">
            {{ keyword }}
          </span>
        </div>
      </div>

      <div class="tech-stack" v-if="job.technologies">
        <h4>{{ t('experience.environment') }}</h4>
        {{ job.technologies }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { t, locale } = useI18n()

type Language = 'fr' | 'en'

interface JobContent {
  title: string
  company: string
  period: string
  description: string
  responsibilities?: string[]
  keywords?: string[]
  technologies: string
  sector: string
  duration?: string
}
interface Job {
  fr: JobContent
  en: JobContent
}

const jobs: Job[] = [
  {
    fr: {
      title: 'Développeur Full-Stack PHP / Angular',
      company: 'Luxair, Munsbach',
      period: 'nov. 2021 - présent',
      duration: '~5 ans',
      description:
        "Au sein de l'équipe Scrum Luxair, je développe et maintiens les applications web de la compagnie et de Luxairtours. Périmètre principal : l'API Symfony du booking engine booking.luxairtours, qui agrège plusieurs services externes, les interfaces Angular/TypeScript et les CMS Drupal destinés aux équipes métier.",
      responsibilities: [
        "Conception et maintenance de l'API du booking engine booking.luxairtours (Symfony), passerelle d'agrégation de plusieurs API",
        'Développement front-end Angular / TypeScript et intégration de web components (micro-frontend)',
        'Responsable de la mise en production des applications Luxair et Luxairtours',
        "Conception et intégration d'API REST dans un environnement Nx",
        'Développement et configuration du CMS Drupal selon les besoins métier',
      ],
      keywords: [
        'API Gateway',
        'Symfony',
        'PHP',
        'Angular',
        'TypeScript',
        'approche DDD',
        'Micro Frontend',
        'API design',
        'Nx',
        'Docker',
        'Azure',
        'CI/CD',
      ],
      technologies:
        'PHP, Symfony, Angular 12+, AngularJS, TypeScript, Node.js, Nx, Vue.js, Twig, Drupal, Docker, Azure DevOps, GitLab',
      sector: 'Public, transport',
    },
    en: {
      title: 'Full-Stack PHP / Angular Developer',
      company: 'Luxair, Munsbach',
      period: 'Nov 2021 - present',
      duration: '~5 years',
      description:
        'Within the Luxair Scrum team, I develop and maintain the company and Luxairtours web applications. Main scope: the Symfony booking-engine API for booking.luxairtours, which aggregates several external services, Angular/TypeScript interfaces, and Drupal CMS for business teams.',
      responsibilities: [
        'Design and maintenance of the booking.luxairtours booking-engine API (Symfony), a gateway aggregating several APIs',
        'Angular / TypeScript front-end development and web-component integration (micro-frontend)',
        'Responsible for production releases of the Luxair and Luxairtours applications',
        'REST API design and integration in an Nx environment',
        'Drupal CMS development and configuration according to business needs',
      ],
      keywords: [
        'API Gateway',
        'Symfony',
        'PHP',
        'Angular',
        'TypeScript',
        'DDD approach',
        'Micro Frontend',
        'API design',
        'Nx',
        'Docker',
        'Azure',
        'CI/CD',
      ],
      technologies:
        'PHP, Symfony, Angular 12+, AngularJS, TypeScript, Node.js, Nx, Vue.js, Twig, Drupal, Docker, Azure DevOps, GitLab',
      sector: 'Public, transport',
    },
  },
  {
    fr: {
      title: 'Développeur full-stack Java/Vue.js',
      company: 'Lusis, Roeser — Ministère des Transports / CTIE (Tachygraphe)',
      period: 'mars 2021 - oct. 2021',
      duration: '8 mois',
      description:
        "Dans une équipe de 4 personnes, développement d'une application de gestion des cartes de tachygraphe pour le Ministère des Transports du Luxembourg (REST, SOAP, Vue.js / TypeScript).",
      technologies: 'Java 8, Vue.js, TypeScript, Maven, REST, SOAP, DB2, GitLab',
      sector: 'Public, transport',
    },
    en: {
      title: 'Full-stack Java/Vue.js developer',
      company: 'Lusis, Roeser — Ministry of Transport / CTIE (Tachograph)',
      period: 'Mar 2021 - Oct 2021',
      duration: '8 months',
      description:
        'In a team of 4, development of a tachograph-card management application for the Luxembourg Ministry of Transport (REST, SOAP, Vue.js / TypeScript).',
      technologies: 'Java 8, Vue.js, TypeScript, Maven, REST, SOAP, DB2, GitLab',
      sector: 'Public, transport',
    },
  },
  {
    fr: {
      title: 'Développeur Junior Python',
      company: 'LDE - Poplab',
      period: 'juin 2020 - mars 2021',
      description:
        "Développement Agile d'applications d'assistance pédagogique et de partage de documents (Python/Django, Vue.js).",
      technologies: 'Python 3, Django, Vue.js, PostgreSQL, Selenium',
      sector: 'Éducation',
    },
    en: {
      title: 'Junior Python developer',
      company: 'LDE - Poplab',
      period: 'Jun 2020 - Mar 2021',
      description:
        'Agile development of educational-support and document-sharing applications (Python/Django, Vue.js).',
      technologies: 'Python 3, Django, Vue.js, PostgreSQL, Selenium',
      sector: 'Education',
    },
  },
  {
    fr: {
      title: 'Stagiaire développeur C++',
      company: 'DeltaCAD - DeltaMesh',
      period: 'sept. 2019 - févr. 2020',
      description:
        "Stage de Master : intégration d'une bibliothèque C++ de maillage 3D et d'un visualiseur d'objets 3D.",
      technologies: 'C++, Qt, Python, ParaView, CMake, SVN',
      sector: 'Industrie',
    },
    en: {
      title: 'C++ developer intern',
      company: 'DeltaCAD - DeltaMesh',
      period: 'Sep 2019 - Feb 2020',
      description:
        'Master internship: integration of a C++ 3D-meshing library and a 3D object viewer.',
      technologies: 'C++, Qt, Python, ParaView, CMake, SVN',
      sector: 'Industrial',
    },
  },
]

const localizedJobs = computed(() => {
  return jobs.map((job) => job[locale.value as Language])
})
</script>

<style scoped>
.experience {
  padding: 1rem;
}

.experience-item {
  padding-bottom: 2rem;
  border-bottom: 1px solid var(--light-bg);
}

.job-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 0.5rem;
}

.period-info {
  text-align: right;
}

.period,
.duration {
  color: var(--secondary-color);
  font-size: 0.9rem;
  font-style: italic;
}

.duration {
  margin-left: 0.5rem;
}

.company {
  color: var(--text-color);
  font-weight: 500;
  font-size: 0.9rem;
}

.sector {
  color: var(--secondary-color);
  font-size: 0.8rem;
  font-style: italic;
  margin-bottom: 1rem;
}

.description {
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1rem;
}

h4 {
  color: var(--primary-color);
  font-size: 0.9rem;
  margin: 1rem 0 0.5rem;
  font-weight: 600;
}

.responsibilities ul {
  list-style-type: disc;
  padding-left: 1.2rem;
  margin-bottom: 1rem;
}

.responsibilities li {
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 0.3rem;
}

.keywords {
  margin: 1rem 0;
}

.keyword-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.keyword {
  background-color: var(--light-bg);
  padding: 0.2rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: var(--secondary-color);
}

.tech-stack {
  font-size: 0.85rem;
  color: var(--secondary-color);
  line-height: 1.6;
}

@media print {
  .experience-item {
    padding-bottom: 0 !important;
  }
}
</style>
