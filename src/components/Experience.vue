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

      <div v-if="job.responsibilities" class="responsibilities">
        <h4>{{ t('experience.responsibilities') }}</h4>
        <ul>
          <li v-for="(resp, idx) in job.responsibilities" :key="idx">{{ resp }}</li>
        </ul>
      </div>

      <div v-if="job.keywords" class="keywords">
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
  responsibilities: string[]
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
      title: 'Développeur full-stack php/angular',
      company: 'Luxair, Munsbach',
      period: 'nov. 2021 - présent',
      description:
        'Le poste consiste à maintenir plusieurs applications web de l\'équipe Scrum de Luxair et de rajouter de nouvelles fonctions. Maintenance de l\'API du booking engine booking.luxairtours développée en Symfony, qui agit comme une passerelle et agrégation de plusieurs autres API.',
      responsibilities: [
        'Maintenance de l\'API du booking engine booking.luxairtours (Symfony)',
        'Responsable de la mise en production des applications',
        'Intégration et mise en œuvre des web components',
        "Intégration et mise en œuvre d'API",
        'Analyse et revue des tickets',
      ],
      keywords: ['API Gateway', 'Symfony', 'PHP', 'approche DDD'],
      technologies: 'PHP, Symfony, Vue.js, Twig, Angular 12+, Node.js, TypeScript, Nx, Drupal, Azure DevOps, GitLab',
      sector: 'Public, transport',
    },
    en: {
      title: 'Full-stack php/angular developer',
      company: 'Luxair, Munsbach',
      period: 'nov. 2021 - present',
      description:
        'The position consists of maintaining several web applications of the Luxair Scrum team and adding new functions. Maintenance of the booking.luxairtours booking engine API developed in Symfony, which acts as a gateway and aggregation of several other APIs.',
      responsibilities: [
        'Maintenance of the booking.luxairtours booking engine API (Symfony)',
        'Responsible for the deployment of the applications',
        'Integration and implementation of web components',
        'Integration and implementation of APIs',
        'Analysis and review of tickets',
      ],
      keywords: ['API Gateway', 'Symfony', 'PHP', 'DDD approach'],
      technologies: 'PHP, Symfony, Vue.js, Twig, Angular 12+, Node.js, TypeScript, Nx, Drupal, Azure DevOps, GitLab',
      sector: 'Public, transport',
    },
  },
  {
    fr: {
      title: 'Développeur Java',
      company: 'Ministère des Transports / CTIE (Tachygraphe)',
      period: 'Mars 2021 - Octobre 2021',
      duration: '150H/J',
      description:
        "Au sein d'une équipe de 4 personnes, développement d'une application pour le Ministère des Transports du Luxembourg sous contrat à prix fixe. L'application gère les cartes de tachygraphe utilisées dans le transport de marchandises et de passagers.",
      responsibilities: [
        'Analyse et développement back-end avec Java 8',
        'Analyse et développement front-end avec Vue.js en TypeScript',
        'Développement de services Web REST et SOAP',
        'Création et configuration de modules Maven',
        'Tests fonctionnels',
      ],
      keywords: [],
      technologies: 'VUE-JS, Maven, Java 8, REST, SOAP, DB2, Gitlab',
      sector: 'Public, transport',
    },
    en: {
      title: 'Java developer',
      company: 'Ministry of Transport / CTIE (Tachygraphe)',
      period: 'Mars 2021 - Octobre 2021',
      duration: '150H/J',
      description:
        'In a team of 4 people, development of an application for the Ministry of Transport of Luxembourg under a fixed price contract. The application manages the tachygraphe cards used in the transport of goods and passengers.',
      responsibilities: [
        'Analysis and development of back-end with Java 8',
        'Analysis and development of front-end with Vue.js in TypeScript',
        'Development of Web REST and SOAP services',
        'Creation and configuration of Maven modules',
        'Functional tests',
      ],
      keywords: [],
      technologies: 'VUE-JS, Maven, Java 8, REST, SOAP, DB2, Gitlab',
      sector: 'Public, transport',
    },
  },
  {
    fr: {
      title: 'Développeur Junior Python',
      company: 'LDE - Poplab',
      period: 'Juin 2020 - Mars 2021',
      duration: '180H/J',
      description:
        "Au sein d'une équipe de 7 personnes, développement en mode Agile d'une application d'assistance pédagogique pour les écoles primaires et secondaires, ainsi qu'une application de gestion et de partage de documents numériques.",
      responsibilities: [
        'Analyse et développement back-end avec Python 3',
        'Analyse et développement front-end avec Vue.js en JavaScript',
        'Développement de services Web REST',
        'Tests fonctionnels avec Django Test',
        "Tests d'intégration avec Selenium",
      ],
      technologies: 'Python 3, Django, Selenium, Vuejs, Postgres',
      sector: 'Éducation',
    },
    en: {
      title: 'Junior Python developer',
      company: 'LDE - Poplab',
      period: 'Juin 2020 - Mars 2021',
      duration: '180H/J',
      description:
        'In a team of 7 people, development in Agile mode of an educational assistance application for primary and secondary schools, as well as an application for managing and sharing digital documents.',
      responsibilities: [
        'Analysis and development of back-end with Python 3',
        'Analysis and development of front-end with Vue.js in JavaScript',
        'Development of Web REST services',
        'Functional tests with Django Test',
        'Integration tests with Selenium',
      ],
      technologies: 'Python 3, Django, Selenium, Vuejs, Postgres',
      sector: 'Education',
    },
  },
  {
    fr: {
      title: 'Stagiaire Développeur C++',
      company: 'DeltaCAD - DeltaMesh',
      period: 'Septembre 2019 - Février 2020',
      duration: '120 H/J',
      description:
        'Internship realized in the framework of the Master in software engineering in a team of 4 people. Integration of a C++ library for 3D meshing and implementation of a 3D object viewer.',
      responsibilities: [
        'Revue de la littérature sur les outils de maillage 3D existants',
        'Development of plugins for the mesh algorithms',
        'Implementation of the UI',
        'Algorithm optimization',
      ],
      technologies: 'C++, QT, Python, Paraview, CMake, SVN',
      sector: 'Industrial',
    },
    en: {
      title: 'C++ developer intern',
      company: 'DeltaCAD - DeltaMesh',
      period: 'September 2019 - February 2020',
      duration: '120 H/J',
      description:
        'Internship realized in the framework of the Master in software engineering in a team of 4 people. Integration of a C++ library for 3D meshing and implementation of a 3D object viewer.',
      responsibilities: [
        'Review of the literature on existing 3D meshing tools',
        'Development of plugins for the mesh algorithms',
        'Implementation of the UI',
        'Algorithm optimization',
      ],
      technologies: 'C++, QT, Python, Paraview, CMake, SVN',
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
