<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

const content = {
  fr: {
    title: 'Compétences techniques',
    groups: [
      { label: 'Backend', value: 'Java 8, PHP, Symfony, Python, Django, API REST, SOAP, Maven' },
      { label: 'Frontend', value: 'Angular 12+, TypeScript, Vue.js, JavaScript, Nx' },
      { label: 'DevOps & données', value: 'Docker, Azure DevOps, GitLab CI/CD, DB2, PostgreSQL' },
      { label: 'Pratiques', value: 'Scrum, tests fonctionnels et d’intégration, support production' },
    ],
    learningLabel: 'Autoformation en cours',
    learningValue: 'Spring Boot 3, Spring Framework 6, Spring Security, JPA, JUnit 5',
  },
  en: {
    title: 'Technical skills',
    groups: [
      { label: 'Backend', value: 'Java 8, PHP, Symfony, Python, Django, REST APIs, SOAP, Maven' },
      { label: 'Frontend', value: 'Angular 12+, TypeScript, Vue.js, JavaScript, Nx' },
      { label: 'DevOps & data', value: 'Docker, Azure DevOps, GitLab CI/CD, DB2, PostgreSQL' },
      { label: 'Practices', value: 'Scrum, functional and integration testing, production support' },
    ],
    learningLabel: 'Currently self-learning',
    learningValue: 'Spring Boot 3, Spring Framework 6, Spring Security, JPA, JUnit 5',
  },
}

const localizedContent = computed(() => content[locale.value === 'en' ? 'en' : 'fr'])
</script>

<template>
  <section class="technical-skills">
    <h2>{{ localizedContent.title }}</h2>
    <div class="skills-grid">
      <div v-for="group in localizedContent.groups" :key="group.label" class="skill-group">
        <h3>{{ group.label }}</h3>
        <p>{{ group.value }}</p>
      </div>
    </div>
    <p class="learning">
      <strong>{{ localizedContent.learningLabel }} :</strong>
      {{ localizedContent.learningValue }}
    </p>
  </section>
</template>

<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.65rem 1.5rem;
}

.skill-group h3 {
  margin-bottom: 0.15rem;
  color: var(--primary-color);
  font-size: 0.82rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.skill-group p,
.learning {
  margin: 0;
  color: var(--text-color);
  font-size: 0.86rem;
  line-height: 1.45;
}

.learning {
  margin-top: 0.75rem;
  padding: 0.55rem 0.7rem;
  border-left: 3px solid var(--accent-color);
  background: var(--light-bg);
}

@media (max-width: 640px) {
  .skills-grid {
    grid-template-columns: 1fr;
  }
}

@media print {
  .skills-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
</style>
