<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import PersonalInfo from './components/PersonalInfo.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Activities from './components/Activities.vue'

const { t, locale } = useI18n()

const toggleLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const printCV = () => {
  window.print()
}
</script>

<template>
  <div class="cv-container">
    <div class="language-switch">
      <button @click="toggleLanguage">
        {{ locale === 'fr' ? 'FR' : 'EN' }}
      </button>
    </div>
    <button @click="printCV" class="print-cv-button">{{ t('printCV.button') }}</button>
    <header class="cv-header">
      <h1>Patrick Tchepga</h1>
      <h2 class="job-title">{{ t('header.jobTitle') }}</h2>
      <div class="header-divider"></div>
      <p class="tagline">{{ t('header.tagline') }}</p>
    </header>

    <div class="cv-content">
      <div class="sub-header">
        <PersonalInfo />
      </div>
      <main class="cv-main">
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

.language-switch {
  position: absolute;
  top: 1rem;
  right: 1rem;
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
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background-color: var(--primary-color);
  color: white;
  padding: 0.6rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  height: min-content;
}
@media screen and (min-width: 768px) {
  .print-cv-button {
    top: 1rem;
    right: 5rem;
  }
}

/* Styles d'impression */
@media print {
  .language-switch,
  .print-cv-button {
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
