<script setup lang="ts">
import ListItem from './ListItem.vue'
import IconArrowRight from '@/assets/icons/IconArrowRight.vue'
</script>

<template>
  <div class="advantages-list">
    <ListItem>
      <template #icon>
        <IconArrowRight />
      </template>
      <template #heading>Documentation</template>

      Vue’s
      <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
      provides you with all information you need to get started.
    </ListItem>
    <ListItem>
      <template #icon>
        <IconArrowRight />
      </template>
      <template #heading>Documentation</template>

      Vue’s
      <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
      provides you with all information you need to get started.
    </ListItem>
    <ListItem>
      <template #icon>
        <IconArrowRight />
      </template>
      <template #heading>Documentation</template>

      Vue’s
      <a href="https://vuejs.org/" target="_blank" rel="noopener">official documentation</a>
      provides you with all information you need to get started.
    </ListItem>
  </div>
</template>

<style scoped>
.advantages-list {
  padding-left: 2rem;
}

</style>
