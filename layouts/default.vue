<template>
  <div class="flex h-screen flex-col">
    <CommonAppBar />

    <section class="flex h-full w-full">
      <aside
        class="group border-r relative flex h-full w-[57px] flex-col items-center bg-gray-100 dark:bg-slate-700"
      >
        <div class="flex w-full items-center   pt-4">
          <CommonSideBar />
        </div>
      </aside>
      <main class="flex h-full flex-grow flex-col">
        <div class="container h-full flex-grow overflow-y-auto px-4 py-2">
          <slot></slot>
        </div>
      </main>
    </section>
  </div>
</template>

<script setup lang="ts"></script>
