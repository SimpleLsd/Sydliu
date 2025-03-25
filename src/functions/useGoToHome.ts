import { useRouter } from 'vue-router'

export function useGoToHome() {
  const router = useRouter()

  const goToHome = () => {
    router.push('/')
  }

  return { goToHome }
}
