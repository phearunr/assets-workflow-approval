<template>
  <ul class="flex flex-wrap gap-4">
      <li v-for="(item, index) in recentStatus" :key="index">
        <nuxt-link
          :to="item.to"
          class="group flex cursor-pointer flex-col items-center rounded-xl bg-white p-4 px-6 hover:bg-primary-50"
        >
        <h1
        class="text-2xl transition-all group-hover:text-primary-600"
        >
          {{ item.count }}
        </h1>
          <h3>{{ item.title }}</h3>
        </nuxt-link>
      </li>
    </ul>
</template>

<script setup lang="ts">
import { recentStatus } from '~/constants';
</script>


