export const onRegistration = async (credentials) => {
  const body = JSON.stringify(credentials);
  const method = 'POST';
  
  const response = await fetch(
    'api/registrations',
    {
      method,
      body,
      headers: {
        'Content-type': 'application/json'
      }
    }
  )
  const data = await response.json()
  return data;
}

export const onLogin = async (credentials) => {
  const body = JSON.stringify(credentials);
  const method = 'POST';
  const response = await fetch(
    'api/login',
    {
      method,
      body,
      headers: {
        'Content-type': 'application/json'
      }
    }
  )
  const data = await response.json()
  return data;
}