import { serverAddress } from '../config';

async function generateTwilioToken(user) {
  try {
    const response = await fetch(serverAddress + '/twilio/token', {
      method: 'GET', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
}

export default generateTwilioToken;