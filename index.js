const firstName = document.getElementById('first-name')
const lastName = document.getElementById('last-name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const region = document.getElementById('region')
const erpSystem = document.getElementById('erp-system')
const company = document.getElementById('company')
const jobTitle = document.getElementById('job-title')
const feedbackText = document.getElementById('feedback-text')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  var alpha = /^[a-zA-Z]/g;
  let re = /(.)\1{4,}/ig
  let messages = []

  /* Initial firstName, lastName and jobTitle if statements */

  if (firstName.value === '' || firstName.value == null) {
    messages.push('First name is required and must be alphabet only.')
  }

  if (lastName.value === '' || lastName.value == null) {
    messages.push('Last name is required and must be alphabet only.')
  }

  if (jobTitle.value === '' || jobTitle.value == null) {
    messages.push('Job Title is required and must be alphabet only.')
  }

  // Country Codes can be added in the HTML file via adding more <option> tags
  if (phone.value.length <= 5) {
    messages.push('Phone number must be minimum of 6 digits.')
  }

  if (company.value.length <= 3) {
    messages.push('Comany name must be longer than 4 characters.')
  }

  if (re.test(company.value)) {
    messages.push('Company name must not have the same 5 consecutive characters.')
  }

  if (feedbackText.value.length <= 4) {
    messages.push('How can we help section must have at least 5 characters.')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
  }
})

/* Too advanced
  - Business Email : must be completed and exclude domains above
  - Region – can we pull the IP address location – we have the information to convert to the 4 flintfox regions
*/
