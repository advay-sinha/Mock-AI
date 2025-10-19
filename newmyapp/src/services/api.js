export const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8000/api'

export const generateTest = async (params) => {
  const response = await fetch(`${API_BASE_URL}/generate-test`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(params),
  })

  if (!response.ok) {
    throw new Error('Failed to generate test')
  }

  return await response.json()
}

export const submitAnswers = async (data) => {
  const response = await fetch(`${API_BASE_URL}/submit-answers`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    throw new Error('Failed to submit answers')
  }

  return await response.json()
}
