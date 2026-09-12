<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import LanguagesList from './LanguagesList.vue'

const { t } = useI18n()
</script>

<template>
  <section class="personal-info">
    <h2>{{ t('personal.title') }}</h2>
    <div class="info-content">
      <div class="info-item">
        <h3>{{ t('personal.phone') }}</h3>
        <p>
          <a href="tel:+33661569987" itemprop="telephone">+33 6 61 56 99 87</a>
        </p>
      </div>
      <div class="info-item">
        <h3>{{ t('personal.email') }}</h3>
        <p>
          <a href="mailto:tchepgapatrick@yahoo.fr" itemprop="email">tchepgapatrick@yahoo.fr</a>
        </p>
      </div>
      <LanguagesList />
    </div>
  </section>
</template>

<style scoped>
.personal-info {
  padding: 1rem;
}

.info-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media (min-width: 480px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.info-item h3 {
  color: var(--primary-color);
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-weight: 600;
}

.info-item p {
  font-size: 0.9rem;
  color: var(--text-color);
}

.info-item a {
  color: inherit;
  text-decoration: none;
}

.info-item a:hover {
  text-decoration: underline;
  color: var(--primary-color);
}

@media print {
  .personal-info {
    padding: 0 !important;
  }

  .info-item a {
    color: black;
    text-decoration: none;
  }
}
</style>
