import { currentUser, pb } from '$lib/pocketbase'

pb.authStore.loadFromCookie(document.cookie)
pb.authStore.onChange(() => {
  console.log("kdoskopdfs");
  
  currentUser.set(pb.authStore.model)
  document.cookie = pb.authStore.exportToCookie({ httpOnly: false })
})