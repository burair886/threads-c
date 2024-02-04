<template>
  <div id="main" class="h-screen">
    <div class="max-w-[500px] mx-auto w-full">
      <div
        id="topMenu"
        class="my-2 h-10 px-2 flex justify-center items-center w-full"
      >
        <img class="w-[35px]" src="/threads-logo.png" />
      </div>
    </div>
    <div class="w-full max-w-[500px] h-screen flex mx-auto">
      <slot />
    </div>
    <div
      class="bg-black h-[70px] border-t border-t-gray-700 w-full flex fixed z-50 bottom-0"
      id="BtmNav"
    >
      <div
        class="max-w-[500px] flex mx-auto items-center justify-around w-full"
      >
        <button class="w-full h-full" @click="navigateTo('/')">
          <Icon name="heroicons-outline:home" color="#ffffff" size="35" />
        </button>
        <button class="w-full h-full" @click="useStore.isMenuOverlay = true">
          <Icon
            name="material-symbols:edit-square-outline-rounded"
            color="#ffffff"
            size="35"
          />
        </button>
        <button class="w-full h-full" @click="useStore.isLogoutOverlay = true">
          <Icon name="ic:sharp-logout" color="#ffffff" size="35" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>
