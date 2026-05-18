<script setup lang="ts">
const { title = 'Profesionální 3D tisk na míru' } = defineProps<{
  title?: string
}>()
</script>

<template>
  <div class="h-full w-full flex flex-col justify-between bg-[#09090b] p-16 relative overflow-hidden">
    <!-- Radial orange glow top-right -->
    <div
      class="absolute rounded-full"
      style="top: -180px; right: -180px; width: 500px; height: 500px; background: radial-gradient(circle, rgba(249,115,22,0.18) 0%, transparent 70%);"
    />
    <!-- Subtle grid texture -->
    <div
      class="absolute inset-0 opacity-[0.025]"
      style="background-image: linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px); background-size: 60px 60px;"
    />
    <!-- Left accent line -->
    <div
      class="absolute left-0 top-0 bottom-0 w-0.75"
      style="background: linear-gradient(to bottom, transparent, #f97316 35%, #f97316 65%, transparent);"
    />

    <!-- Brand -->
    <div class="flex items-center gap-3 relative">
      <div
        class="flex items-center justify-center rounded-[8px]"
        style="width: 36px; height: 36px; border: 1.5px solid #f97316; background: rgba(249,115,22,0.1);"
      >
        <div style="width: 16px; height: 16px; border: 1.5px solid #f97316; border-radius: 3px; opacity: 0.8;" />
      </div>
      <span style="color: #fafafa; font-size: 22px; font-weight: 700; letter-spacing: -0.02em;">
        vytisknem<span style="color: #f97316;">.to</span>
      </span>
    </div>

    <!-- Title -->
    <div class="relative flex-1 flex items-center">
      <h1 style="color: #fafafa; font-size: 76px; font-weight: 900; line-height: 1.05; letter-spacing: -0.03em; max-width: 900px; margin: 0;">
        {{ title }}
      </h1>
    </div>

    <!-- Footer row -->
    <div class="flex items-end justify-between relative">
      <p style="color: #71717a; font-size: 20px; font-weight: 400; margin: 0;">
        Profesionální 3D tisk a modelování na míru
      </p>
      <span style="color: #f97316; opacity: 0.6; font-size: 13px; font-family: 'IBM Plex Mono', monospace; letter-spacing: 0.12em; text-transform: uppercase;">
        vytisknem.to
      </span>
    </div>
  </div>
</template>
