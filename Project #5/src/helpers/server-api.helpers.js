import { serverAddress } from '../config';

export async function checkNewRoomName(roomName, user) {
  try {
    const response = await fetch(serverAddress + `/teacher/new-class/${roomName}`, {
      method: 'GET',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`
      }
    });
    return await response.json();
  } catch (error) {
    throw error;
  }
}

export function createNewClassRoomRequest(userName, roomName, mediaFile) {
  let formData = new FormData();
  formData.append("user", userName);
  formData.append("room", roomName);
  formData.append("file", mediaFile);

  const xhr = new XMLHttpRequest();
  xhr.open("POST", serverAddress + '/teacher/new-class', false);
  xhr.send(formData);

  if (xhr.status !== 200) {
    alert(xhr.status + ': ' + xhr.statusText);
  } else {
    console.log(xhr.responseText);
  }
}