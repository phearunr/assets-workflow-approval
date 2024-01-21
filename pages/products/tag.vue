<template>
  <div>
    <TermTable :group-id="TermGroupID.tag" />
  </div>
</template>

<script setup lang="ts">
import { TermGroupID } from '~/constants';

useHead({
  title: 'Tag',
});
</script>
