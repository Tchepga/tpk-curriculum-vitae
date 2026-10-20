<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PersonalInfo from './components/PersonalInfo.vue'
import Skills from './components/Skills.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Activities from './components/Activities.vue'
import { useSeo } from './composables/useSeo'

const { t, locale } = useI18n()
useSeo()

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const printCV = () => {
  window.print()
}
</script>

<template>
  <div class="cv-container" itemscope itemtype="https://schema.org/Person">
    <div class="cv-toolbar">
      <button @click="printCV" class="print-cv-button">{{ t('printCV.button') }}</button>
      <div class="language-switch">
        <button
          @click="toggleLanguage"
          :aria-label="locale === 'fr' ? 'Switch to English' : 'Passer en français'"
        >
          {{ locale === 'fr' ? 'EN' : 'FR' }}
        </button>
      </div>
    </div>
    <header class="cv-header">
      <h1 itemprop="name">Patrick Tchepga</h1>
      <h2 class="job-title" itemprop="jobTitle">{{ t('header.jobTitle') }}</h2>
      <div class="header-divider"></div>
      <p class="tagline" itemprop="description">{{ t('header.tagline') }}</p>
    </header>

    <div class="cv-content">
      <div class="sub-header">
        <PersonalInfo />
      </div>
      <main class="cv-main">
        <Skills />
        <Experience />
        <Education />
        <Activities />
        <section class="hobbies">
          <h2>{{ t('hobbies.title') }}</h2>
          <ul>
            <li>{{ t('hobbies.football') }}</li>
            <li>{{ t('hobbies.videogames') }}</li>
          </ul>
        </section>
      </main>
    </div>
  </div>
</template>

<style>
.cv-container {
  max-width: 100%;
  background-color: white;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  @media screen and (min-width: 768px) {
    width: 70%;
  }
}

.cv-header {
  text-align: center;
  margin-bottom: 2rem;
}

.job-title {
  color: var(--primary-color);
  font-size: 1.2rem;
  font-weight: 500;
  margin: 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.header-divider {
  width: 100%;
  height: 1px;
  background-color: var(--primary-color);
  margin: 1rem 0;
  position: relative;
}

.tagline {
  font-size: 1rem;
  color: var(--text-color);
  margin: 1rem auto;
  font-weight: 400;
  max-width: 800px;
  line-height: 1.6;
  font-style: italic;
}

.cv-content {
  display: flex;
  flex-direction: column;
}

.cv-sidebar {
  display: grid;
  gap: 2rem;
}

.cv-sidebar h2 {
  color: var(--primary-color);
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  font-weight: 600;
}

.hobbies ul {
  list-style: none;
  padding: 0;
}

.hobbies li {
  padding: 0.5rem 0;
  color: var(--text-color);
}

@media (max-width: 768px) {
  .cv-container {
    padding: 1rem;
    margin: 0;
  }

  .cv-content {
    grid-template-columns: 1fr;
  }
}

.cv-toolbar {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

@media screen and (min-width: 768px) {
  .cv-toolbar {
    position: fixed;
    top: 1rem;
    right: 1rem;
    z-index: 10;
    margin-bottom: 0;
  }
}

.language-switch button {
  font-family: 'Poppins', sans-serif;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  background-color: transparent;
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.language-switch button:hover {
  background-color: var(--primary-color);
  color: white;
}

.print-cv-button {
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.5rem 1rem;
  border: 1px solid var(--primary-color);
  border-radius: 4px;
  cursor: pointer;
}

/* Styles d'impression */
@media print {
  /* Configuration de la page */
  @page {
    margin: 1.5cm;
    size: A4;
  }
  /* Imprime les couleurs (pastilles de niveau, mots-clés) même sans « Graphiques d'arrière-plan » */
  * {
    -webkit-print-color-adjust: exact !important;
    print-color-adjust: exact !important;
  }
  html,
  body {
    background: white !important;
  }
  /* Version imprimée plus compacte */
  html {
    font-size: 13px;
  }
  .cv-header {
    margin-bottom: 1rem;
  }
  .experience,
  .education,
  .skills,
  .activities,
  .personal-info {
    padding: 0.5rem 0 !important;
  }
  .experience-item {
    padding-bottom: 0.8rem !important;
    margin-bottom: 0.8rem;
  }
  /* Pas de titre orphelin en bas de page */
  h2,
  h3,
  h4,
  .job-header,
  .company,
  .sector {
    break-after: avoid;
    page-break-after: avoid;
  }
  /* Ne pas couper un bloc entre deux pages */
  .education-item,
  .activity-item,
  .skill-category,
  .personal-info {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  .cv-toolbar {
    display: none !important;
  }
  /* Assurer que les liens sont lisibles en noir */
  a {
    color: black !important;
    text-decoration: none !important;
  }
  .cv-container {
    margin: 0;
    padding: 0;
    box-shadow: none;
    width: 100% !important;
  }
}
</style>
