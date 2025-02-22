<template>
  <section class="languages">
    <h3>Langues</h3>
    <div class="language-list">
      <div class="language-item">
        <span class="language">Français</span>&nbsp;
        <span class="level">Langue maternelle</span>
      </div>
      <div class="language-item">
        <span class="language">Anglais</span>
        <span class="level">Courant</span>
      </div>
      <div class="language-item">
        <span class="language">Italien</span>
        <span class="level">B1</span>
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
