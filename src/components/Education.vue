<script setup lang="ts">
const education = [
  {
    title: 'Master en Ingénierie Informatique',
    school: 'Université de Technologie de Belfort-Montbéliard (UTBM)',
    specializations: ['Ingénierie des Logiciels et des Connaissances', 'Réalité Virtuelle'],
  },
  {
    title: 'Classes Préparatoires aux Grandes Écoles',
    school: 'Université Institut de la Côte, Douala, Cameroun',
    period: 'Septembre 2013 - Mars 2016',
  },
]
</script>

<template>
  <section class="education">
    <h2>Formation</h2>
    <div class="education-item" v-for="(edu, index) in education" :key="index">
      <h3>{{ edu.title }}</h3>
      <div class="school">{{ edu.school }}</div>
      <div v-if="edu.period" class="period">{{ edu.period }}</div>
      <div v-if="edu.specializations" class="specializations">
        <h4>Spécialisations :</h4>
        <ul>
          <li v-for="(spec, idx) in edu.specializations" :key="idx">
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
