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
    },
    {
      fr: {
        title: 'Responsable technique Tawatawa',
        link: 'https://tawadelivery.cm',
        description: 'Plateforme de livraison et suivi des commandes de la société Tawa Delivery.',
      },
      en: {
        title: 'Technical Lead at Tawa Delivery',
        link: 'https://tawadelivery.cm',
        description: 'Platform for delivery and order tracking of the Tawa Delivery company.',
      },
    },
    {
      fr: {
        title: 'Responsable technique Manage Invoice',
        link: 'https://manage-invoice.devcoorp.fr/',
        description: 'Développement et maintenance de la solution de gestion de factures.',
      },
      en: {
        title: 'Technical Lead at Manage Invoice',
        link: 'https://manage-invoice.devcoorp.fr/',
        description: 'Development and maintenance of the invoice management solution.',
      },
    },
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
  margin-top: 2rem;
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
