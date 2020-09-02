import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import UserContext from '../UserContext';
import { SET_TWILIO_TOKEN, CLEAR_USER, SET_ROOM_NAME } from '../App';
import RoomHeader from './RoomHeader';
import generateTwilioToken from '../helpers/twilioToken';
import { checkNewRoomName, createNewClassRoomRequest } from '../helpers/server-api.helpers';

import {
  MEDIA_TYPES,
  MEDIA_SIZE_ERROR,
  MEDIA_TYPE_ERROR,
  EMPTY_CLASS_NAME,
  EXIST_CLASS_NAME,
  EMPTY_MEDIA_FILE,
  INIT_FILE_LABEL,
  DROPPED_FILE_LABEL
} from '../constants/teacher.constants';

function NewTeacherClass() {
  const history = useHistory();
  const [fileDropped, dropFile] = useState(false);
  const [mediaLabel, setMediaLabel] = useState(null);
  const [error, setError] = useState(null);
  const [mediaError, setMediaError] = useState(null);
  const [roomError, setRoomError] = useState(null);
  const [roomName, setRoomName] = useState('');

  const { user, dispatch } = useContext(UserContext);

  useEffect(() => {
    if (user.twilioToken) {
      return;
    }
    generateTwilioToken(user)
      .then(response => {
        if (response.token) {
          dispatch({ type: SET_TWILIO_TOKEN, twilioToken: response });
        } else {
          if (response.message === 'Unauthorized') {
            return logoutUser();
          }
          setError(response.message);
        }
      })
      .catch(error => {
        setError(error.message);
      });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    document.body.classList.add('Main_body');
    return () => {
      document.body.classList.remove('Main_body');
    };
  }, []);

  const handleInputFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const { type, size } = file;

    if (size >= 524288000) {
      setMediaError(MEDIA_SIZE_ERROR);
      return;
    }
    if (!MEDIA_TYPES.some((element) => element === type)) {
      setMediaError(MEDIA_TYPE_ERROR);
      return;
    }

    setMediaError(null);
    dropFile(true);

    const mediaFile = document.getElementById("mediaInput").files[0];
    setMediaLabel(`${DROPPED_FILE_LABEL} ${mediaFile.name}`);
  };

  const removeDroppedFile = () => {
    document.getElementById('mediaInput').value = null;
    dropFile(false);
    setMediaLabel('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if(!roomName) {
      setRoomError(EMPTY_CLASS_NAME);
      return;
    } else if(!fileDropped) {
      setMediaError(EMPTY_MEDIA_FILE);
      return;
    } else {
      const roomNameExists = await checkNewRoomName(roomName, user);
      if(roomNameExists.status === true) {
        setRoomError(EXIST_CLASS_NAME);
        return;
      }
    }

    const mediaFile = document.getElementById("mediaInput").files[0];
    const userName = user.name;

    createNewClassRoomRequest(userName, roomName, mediaFile);

    dispatch({ type: SET_ROOM_NAME, payload: roomName });
    history.push(`/class/teacher/${roomName}`);
  };

  const logoutUser = () => {
    window.localStorage.clear();
    dispatch({ type: CLEAR_USER });
  };

  return (
    <div>
      <RoomHeader />
      <div className="col-sm-12 opt">
        <div className="col-sm-4 offset-sm-4 card cardtransparent">
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={handleSubmit} className="align2" id="newClassForm">
            <input
              type="text"
              placeholder="Enter class name"
              name="roomName"
              id="roomName"
              value={roomName}
              className="form-control enter_class"
              onChange={e => {
                setRoomName(e.currentTarget.value);
                setRoomError(null);
              }}
            />
            {roomError && (
              <p className="new-class-form-error">
                {roomError}
              </p>
            )}
            <br />
            <div id="mediaDropContainer">
              {fileDropped && (
                <button className='mediaDropRemove' onClick={removeDroppedFile}>
                  <i className="fa fa-times" aria-hidden="true" />
                </button>
              )}
              <p id="mediaLabel">
                { mediaLabel ? mediaLabel : INIT_FILE_LABEL }
              </p>
              <input type="file" name="media" id="mediaInput" onChange={handleInputFile} />
            </div>
            {mediaError && (
              <p className="new-class-form-error">
                {mediaError}
              </p>
            )}
            <br />
            <button className="btn2" type="submit">
              {'Create Class'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NewTeacherClass;
