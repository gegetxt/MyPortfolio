import axios from 'axios'
import { toast } from 'react-toastify'
import content from '../data/content'

// reqres.in'in çalışan endpoint'i - /api/users her zaman 201 döner
const API_URL = 'https://reqres.in/api/users'

export async function postContentData() {
  try {
    const response = await axios.post(API_URL, content)
    console.log('✅ API iletişimi başarılı:', response.status)
    console.log('📦 Gönderilen veri:', content)
    console.log('📥 API yanıtı:', response.data)
    toast.success('✅ Veri başarıyla API\'ye gönderildi!')
    return response.data
  } catch (error) {
    console.error('❌ API hatası:', error.message)
    toast.error('❌ API isteği başarısız oldu!')
    throw error
  }
}

export async function fetchContent() {
  // Promise tabanlı toast - yükleniyor → başarılı/hata
  return toast.promise(
    axios.post(API_URL, content),
    {
      pending: '🔄 Veriler yükleniyor...',
      success: '✅ API bağlantısı başarılı!',
      error: '❌ API hatası, yerel veri kullanılıyor'
    }
  ).then(response => {
    console.log('✅ Veri başarıyla POST edildi')
    return response.data
  }).catch(error => {
    console.error('❌ API hatası, yerel veri kullanılıyor:', error.message)
    return content
  })
}
