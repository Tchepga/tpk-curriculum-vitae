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
        <p>+33661569987</p>
      </div>
      <div class="info-item">
        <h3>{{ t('personal.email') }}</h3>
        <p>tchepgapatrick@yahoo.fr</p>
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
  justify-content: space-between;
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
</style>
