<template>
  <section class="experience">
    <h2>Expérience professionnelle</h2>
    <div class="experience-item" v-for="(job, index) in jobs" :key="index">
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
        <h4>Responsabilités :</h4>
        <ul>
          <li v-for="(resp, idx) in job.responsibilities" :key="idx">{{ resp }}</li>
        </ul>
      </div>

      <div v-if="job.keywords" class="keywords">
        <h4>Mots-clés :</h4>
        <div class="keyword-list">
          <span v-for="(keyword, idx) in job.keywords" :key="idx" class="keyword">
            {{ keyword }}
          </span>
        </div>
      </div>

      <div class="tech-stack" v-if="job.technologies">
        <h4>Environnement technique :</h4>
        {{ job.technologies }}
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const jobs = [
  {
    title: 'Développeur full-stack php/angular',
    company: 'Luxair, Munsbach',
    period: 'nov. 2021 - présent',
    description:
      'Le poste consiste à maintenir plusieurs applications web de la compagnie et de rajouter de nouvelles fonctions définies par le chef de projet.',
    responsibilities: [
      'Implémentation et intégration de composants Figma',
      "Implémentation et intégration d'API",
      'Analyse et revue des exigences des parties prenantes',
      'Support et revue des tickets',
      'Gestion des releases',
    ],
    keywords: ['Monorepo', 'web hook', 'web component', 'approche DDD', 'scripting'],
    technologies: 'Angular 12+, Node.js, TypeScript, Nx, Drupal, PHP 7.2+, Azure DevOps, GitLab',
    sector: 'Public, transport',
  },
  {
    title: 'Développeur Java',
    company: 'Ministère des Transports / CTE (Tachygraphe)',
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
    technologies: 'VUE-JS, Maven, Java 8, REST, SOAP, DB2, Gitlab',
    sector: 'Public, transport',
  },
  {
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
  {
    title: 'Stagiaire Développeur C++',
    company: 'DeltaCAD - DeltaMesh',
    period: 'Septembre 2019 - Février 2020',
    duration: '120 H/J',
    description:
      "Stage réalisé dans le cadre du Master en ingénierie logicielle au sein d'une équipe de 4 personnes. Intégration d'une bibliothèque C++ pour le maillage 3D et implémentation d'un visualiseur d'objets 3D.",
    responsibilities: [
      'Revue de la littérature sur les outils de maillage 3D existants',
      'Développement de plugins pour les algorithmes de maillage',
      "Implémentation de l'interface utilisateur (UI)",
      'Optimisation algorithmique',
    ],
    technologies: 'C++, QT, Python, Paraview, CMake, SVN',
    sector: 'Industriel',
  },
]
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
</style>
