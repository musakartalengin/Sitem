export async function POST(request: Request) {
  try {
    const { email } = await request.json()
    
    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Geçerli bir e-posta adresi girin' }, { status: 400 })
    }

    // Buttondown API'sine abone ekleme
    const buttondownResponse = await fetch('https://api.buttondown.email/v1/subscribers', {
      method: 'POST',
      headers: {
        'Authorization': `Token ${process.env.BUTTONDOWN_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        notes: 'Blog abone olma formu üzerinden kaydoldu'
      }),
    })

    if (!buttondownResponse.ok) {
      const errorData = await buttondownResponse.text()
      console.error('Buttondown API hatası:', errorData)
      
      if (buttondownResponse.status === 400) {
        return Response.json({ error: 'Bu e-posta adresi zaten kayıtlı' }, { status: 400 })
      }
      
      return Response.json({ error: 'Abonelik işlemi başarısız oldu' }, { status: 500 })
    }

    return Response.json({ message: 'Başarıyla abone oldunuz!' })
  } catch (error) {
    console.error('Abonelik hatası:', error)
    return Response.json({ error: 'Bir hata oluştu' }, { status: 500 })
  }
} 