exports.handler = async (event, context) => {
  // CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
  }

  // Handle preflight request
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  try {
    console.log('Function called with body:', event.body)
    console.log('API Key exists:', !!process.env.BUTTONDOWN_API_KEY)
    
    const { email } = JSON.parse(event.body)
    
    if (!email || !email.includes('@')) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Geçerli bir e-posta adresi girin' }),
      }
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
        return {
          statusCode: 400,
          headers,
          body: JSON.stringify({ error: 'Bu e-posta adresi zaten kayıtlı' }),
        }
      }
      
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ error: 'Abonelik işlemi başarısız oldu' }),
      }
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: 'Başarıyla abone oldunuz!' }),
    }
  } catch (error) {
    console.error('Abonelik hatası:', error)
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: 'Bir hata oluştu' }),
    }
  }
} 