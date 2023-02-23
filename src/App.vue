<template>
  <div class="flex items-center border-slate-300 border rounded-lg p-5 ">
    <form class="space-y-6" @submit.prevent="onSubmit">
      <div class="text-left text-2xl font-semibold">Create your Account</div>
      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 md:col-span-6">
          <label for="firstName" class="block text-sm font-medium">
            First name
          </label>
          <div class="mt-1">
            <input v-model="firstName" name="firstName" type="text" required="" class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"/>
          </div>
        </div>

        <div class="col-span-12 md:col-span-6">
          <label for="lastName" class="block text-sm font-medium">
            Last name
          </label>
          <div class="mt-1">
            <input v-model="lastName" name="lastName" type="text" required="" class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"/>
          </div>
        </div>
      </div>

      <div>
        <label for="email" class="block text-sm font-medium">
          Email address
        </label>

        <div class="mt-1">
          <input v-model="email" name="email" type="email" required="" class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"/>
        </div>
      </div>

      <div class="grid grid-cols-12 gap-3">
        <div class="col-span-12 md:col-span-6">
          <label for="newPassword" class="block text-sm font-medium">
            New password
          </label>
          <div class="mt-1">
            <input v-model="newPassword" name="newPassword" type="password" required="" minlength="6" class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"/>
          </div>
        </div>
        <div class="col-span-12 md:col-span-6">
          <label for="retypeNewPassword" class="block text-sm font-medium">
            Retype new password
          </label>
          <div class="mt-1">
            <input v-model="retypeNewPassword" name="retypeNewPassword" type="password" required="" minlength="6" class="block w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none"/>
          </div>
        </div>
      </div>

      <div class="flex">
        <button class="font-medium text-blue-500 hover:text-blue-700 hover:bg-slate-100 rounded-md py-2 px-4">
          Sign in instead
        </button>
        <div class="grow"></div>
        <button type="submit" class="rounded-md bg-blue-500 hover:bg-blue-700 hover:drop-shadow-md py-2 px-4 text-sm text-white text-justify font-medium leading-relaxed">
          Sign up
        </button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUser } from '../stores/user'

const firstName = ref("");
const lastName = ref("");
const email = ref();
const newPassword = ref("");
const retypeNewPassword = ref("");


const onSubmit = function () {

  if (newPassword.value !== retypeNewPassword.value) {
    alert( newPassword , retypeNewPassword ,"passwords do not match.");
    return;
  }
  useUser().signup()
  .then(() => alert("Sign up successful!"))
  .catch((error) => alert(error.code))
}
</script>
