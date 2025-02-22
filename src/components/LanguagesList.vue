<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const languages = [
  {
    fr: {
      name: 'Français',
      level: 'Langue maternelle',
    },
    en: {
      name: 'French',
      level: 'Native',
    },
  },
  {
    fr: {
      name: 'Anglais',
      level: 'Courant',
    },
    en: {
      name: 'English',
      level: 'Fluent',
    },
  },
  {
    fr: {
      name: 'Italien',
      level: 'B1',
    },
    en: {
      name: 'Italian',
      level: 'B1',
    },
  },
]
</script>

<template>
  <section class="languages">
    <h3>{{ t('languages.title') }}</h3>
    <div class="language-list">
      <div v-for="(lang, index) in languages" :key="index" class="language-item">
        <span class="language">{{ (lang as any)[locale].name }}</span
        >&nbsp;
        <span class="level">{{ (lang as any)[locale].level }}</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.language-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.language-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.language {
  font-size: 0.9rem;
  color: var(--text-color);
}

.level {
  color: var(--secondary-color);
  font-size: 0.8rem;
  font-style: italic;
}
</style>
