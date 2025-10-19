import { useState } from 'react'

const PurposeForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    purpose: '',
    subject: '',
    difficulty: 'medium',
    testType: 'conceptual',
    timeLimit: 30
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-semibold mb-6 text-blue-300">Test Configuration</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="purpose" className="block text-sm font-medium mb-1">
            What is your purpose for taking this test?
          </label>
          <textarea
            id="purpose"
            name="purpose"
            rows={3}
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.purpose}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            Subject/Topic
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="difficulty" className="block text-sm font-medium mb-1">
            Difficulty Level
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.difficulty}
            onChange={handleChange}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div>
          <label htmlFor="testType" className="block text-sm font-medium mb-1">
            Test Type
          </label>
          <select
            id="testType"
            name="testType"
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.testType}
            onChange={handleChange}
          >
            <option value="conceptual">Conceptual</option>
            <option value="practical">Practical/Application</option>
            <option value="mixed">Mixed</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeLimit" className="block text-sm font-medium mb-1">
            Time Limit (minutes)
          </label>
          <input
            type="number"
            id="timeLimit"
            name="timeLimit"
            min="5"
            max="120"
            className="w-full bg-gray-700 border border-gray-600 rounded-md p-2 focus:ring-blue-500 focus:border-blue-500"
            value={formData.timeLimit}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-200"
        >
          Generate Test
        </button>
      </form>
    </div>
  )
}

export default PurposeForm;