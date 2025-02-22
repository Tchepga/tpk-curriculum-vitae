<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

type Language = 'fr' | 'en'

interface EducationContent {
  title: string
  school: string
  period?: string
  specializations?: string[]
}

interface Education {
  fr: EducationContent
  en: EducationContent
}

const education: Education[] = [
  {
    fr: {
      title: 'Master en Ingénierie Informatique',
      school: 'Université de Technologie de Belfort-Montbéliard (UTBM)',
      specializations: ['Ingénierie des Logiciels et des Connaissances', 'Réalité Virtuelle'],
    },
    en: {
      title: 'Master in Computer Engineering',
      school: 'University of Technology of Belfort-Montbéliard (UTBM)',
      specializations: ['Software Engineering and Knowledge Engineering', 'Virtual Reality'],
    },
  },
  {
    fr: {
      title: 'Classes Préparatoires aux Grandes Écoles',
      school: 'Université Institut de la Côte, Douala, Cameroun',
      period: 'Septembre 2013 - Mars 2016',
    },
    en: {
      title: 'Preparatory Classes for Engineering Schools',
      school: 'University Institute of the Coast, Douala, Cameroon',
      period: 'September 2013 - March 2016',
    },
  },
]
</script>

<template>
  <section class="education">
    <h2>{{ t('education.title') }}</h2>
    <div class="education-item" v-for="(edu, index) in education" :key="index">
      <h3>{{ edu[locale as Language].title }}</h3>
      <div class="school">{{ edu[locale as Language].school }}</div>
      <div v-if="edu[locale as Language].period" class="period">
        {{ edu[locale as Language].period }}
      </div>
      <div v-if="edu[locale as Language].specializations" class="specializations">
        <h4>{{ t('education.specializations') }}</h4>
        <ul>
          <li v-for="(spec, idx) in edu[locale as Language].specializations" :key="idx">
            {{ spec }}
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped>
.education {
  padding: 1rem;
  margin-top: 2rem;
}

.education-item {
  margin-bottom: 2rem;
}

.education-item h3 {
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
}

.school {
  color: var(--text-color);
  font-size: 0.9rem;
  font-weight: 500;
}

.period {
  color: var(--secondary-color);
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 0.3rem;
}

h4 {
  color: var(--primary-color);
  font-size: 0.9rem;
  margin: 1rem 0 0.5rem;
  font-weight: 600;
}

.specializations ul {
  list-style-type: disc;
  padding-left: 1.2rem;
}

.specializations li {
  font-size: 0.9rem;
  color: var(--text-color);
  margin-bottom: 0.3rem;
}
</style>
