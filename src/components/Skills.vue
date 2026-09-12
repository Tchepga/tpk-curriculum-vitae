<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed } from 'vue'

const { locale } = useI18n()

type Language = 'fr' | 'en'

interface SkillCategory {
  title: string
  skills: { name: string; level: number }[]
}

const categories: Record<Language, SkillCategory[]> = {
  fr: [
    {
      title: 'Back-end',
      skills: [
        { name: 'PHP / Symfony', level: 3 },
        { name: 'Java / Spring', level: 3 },
        { name: 'Python / Django', level: 2 },
        { name: 'Node.js (exposition)', level: 2 },
        { name: 'REST API', level: 2 },
      ],
    },
    {
      title: 'Front-end',
      skills: [
        { name: 'Angular 12+', level: 5 },
        { name: 'React.js', level: 2 },
        { name: 'TypeScript', level: 4 },
        { name: 'HTML / CSS', level: 5 },
        { name: 'Web Components', level: 4 },
      ],
    },
    {
      title: 'Outils & Environnement',
      skills: [
        { name: 'GitLab / Git', level: 4 },
        { name: 'Nx Monorepo', level: 3 },
        { name: 'Docker (utilisation)', level: 2 },
        { name: 'Azure DevOps', level: 3 },
      ],
    },
    {
      title: 'Bases de données',
      skills: [
        { name: 'PostgreSQL', level: 3 },
        { name: 'MySQL', level: 3 },
        { name: 'DB2', level: 2 },
      ],
    },
  ],
  en: [
    {
      title: 'Back-end',
      skills: [
        { name: 'PHP / Symfony', level: 3 },
        { name: 'Java / Spring', level: 3 },
        { name: 'Python / Django', level: 2 },
        { name: 'Node.js (exposure)', level: 2 },
        { name: 'REST API', level: 2 },
      ],
    },
    {
      title: 'Front-end',
      skills: [
        { name: 'Angular 12+', level: 5 },
        { name: 'React.js', level: 2 },
        { name: 'TypeScript', level: 4 },
        { name: 'HTML / CSS', level: 5 },
        { name: 'Web Components', level: 4 },
      ],
    },
    {
      title: 'Tools & Environment',
      skills: [
        { name: 'GitLab / Git', level: 4 },
        { name: 'Nx Monorepo', level: 3 },
        { name: 'Docker (usage)', level: 2 },
        { name: 'Azure DevOps', level: 3 },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'PostgreSQL', level: 3 },
        { name: 'MySQL', level: 3 },
        { name: 'DB2', level: 2 },
      ],
    },
  ],
}

const localizedCategories = computed(() => categories[locale.value as Language])

const MAX_LEVEL = 5
const dots = (level: number) =>
  Array.from({ length: MAX_LEVEL }, (_, i) => i < level)
</script>

<template>
  <section class="skills">
    <h2>{{ locale === 'fr' ? 'Compétences' : 'Skills' }}</h2>
    <div class="skills-grid">
      <div v-for="(category, ci) in localizedCategories" :key="ci" class="skill-category">
        <h3>{{ category.title }}</h3>
        <ul>
          <li v-for="(skill, si) in category.skills" :key="si" class="skill-row">
            <span class="skill-name">{{ skill.name }}</span>
            <span class="skill-dots">
              <span
                v-for="(filled, di) in dots(skill.level)"
                :key="di"
                class="dot"
                :class="{ filled }"
              ></span>
            </span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding: 1rem;
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-category h3 {
  color: var(--primary-color);
  font-size: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  padding-bottom: 0.3rem;
  border-bottom: 2px solid var(--primary-color);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.3rem 0;
  border-bottom: 1px solid var(--light-bg);
}

.skill-name {
  font-size: 0.9rem;
  color: var(--text-color);
}

.skill-dots {
  display: flex;
  gap: 4px;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1.5px solid var(--primary-color);
  background-color: transparent;
}

.dot.filled {
  background-color: var(--primary-color);
}

@media print {
  .skills-grid {
    gap: 0.5rem;
  }
}
</style>
