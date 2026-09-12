<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

type Language = 'fr' | 'en'
type ActivityContent = {
  title: string
  link: string
  description: string
  keywords?: string[]
}

type Activity = {
  [key in Language]: ActivityContent
}

type TravelList = {
  [key in Language]: string[]
}

const activities: {
  technical: Activity[]
  travel: TravelList
} = {
  technical: [
    {
      fr: {
        title: 'Membre du collectif Mongulu',
        link: 'https://www.mongulu.cm/',
        description:
          'Participation active au sein du collectif Mongulu, une communauté tech camerounaise. Mise en place des solutions digitales principale dans le domaine associatif.',
      },
      en: {
        title: 'Member of Mongulu Collective',
        link: 'https://www.mongulu.cm/',
        description:
          'Active participation in the Mongulu collective, an African tech community. Requirements analysis and stakeholder coordination for technical solution implementation.',
      },
    }
  ],
  travel: {
    fr: [
      'France',
      'Luxembourg',
      'États-Unis',
      "Côte d'Ivoire",
      'Gabon',
      'Belgique',
      'Allemagne',
      'Italie',
      'Cameroun',
      'Espagne',
    ],
    en: [
      'France',
      'Luxembourg',
      'United States',
      'Ivory Coast',
      'Gabon',
      'Belgium',
      'Germany',
      'Italy',
      'Cameroon',
      'Spain',
    ],
  },
}
</script>

<template>
  <section class="activities">
    <h2>{{ t('activities.title') }}</h2>

    <div class="activities-section">
      <h3>{{ t('activities.technical.title') }}</h3>
      <div class="technical-activities">
        <div v-for="(activity, index) in activities.technical" :key="index" class="activity-item">
          <h4>{{ activity[locale as Language].title }}</h4>
          <a :href="activity[locale as Language].link" target="_blank" rel="noopener noreferrer">
            {{ activity[locale as Language].link }}
          </a>
          <p>{{ activity[locale as Language].description }}</p>
          <div v-if="activity[locale as Language].keywords?.length" class="activity-keywords">
            <span
              v-for="(kw, ki) in activity[locale as Language].keywords"
              :key="ki"
              class="activity-keyword"
            >{{ kw }}</span>
          </div>
        </div>
      </div>
    </div>

    <div class="activities-section">
      <h3>{{ t('activities.travel.title') }}</h3>
      <div class="travel-list">
        <span
          v-for="(country, index) in activities.travel[locale as Language]"
          :key="index"
          class="country"
        >
          {{ country }}
        </span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.activities {
  padding: 1rem;
  @media print {
    padding: 0;
  }
}

.activities-section {
  margin-bottom: 2rem;
}

.activities-section h3 {
  color: var(--primary-color);
  font-size: 1.1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.technical-activities {
  display: grid;
  gap: 1.5rem;
  @media print {
    gap: 0.1rem;
  }
}

.activity-item {
  background-color: var(--light-bg);
  padding: 1rem;
  border-radius: 8px;
}

.activity-item h4 {
  color: var(--primary-color);
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.activity-item a {
  color: var(--secondary-color);
  font-size: 0.85rem;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.activity-item a:hover {
  color: var(--primary-color);
  text-decoration: underline;
}

.activity-item p {
  color: var(--text-color);
  font-size: 0.9rem;
  line-height: 1.5;
}

.activity-keywords {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}

.activity-keyword {
  background-color: var(--primary-color);
  color: white;
  padding: 0.15rem 0.6rem;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 500;
}

.travel-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.country {
  background-color: var(--light-bg);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  color: var(--text-color);
}
</style>
