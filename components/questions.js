import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_QUESTION } from '../reducers/questionReducer';
import styles from '../styles/Home4.module.css';
import networkRequest from '../utils/request';

function Questions() {
  const currentQuestion = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  useEffect(() => {
    async function fetchQuestion() {
      const url = process.env.NEXTAUTH_URL+'/api/questions';
      const response = await networkRequest('GET',url,{});
      console.log(response);
      if(response.status===200){
        const {questionNo,questionURL}=response.data;
        dispatch(UPDATE_QUESTION({questionNo,questionURL}));
      }
    }
    fetchQuestion();
    
  }, [])

  return (
    <div className={styles.gAquestionsComponent}>
      <div className={styles.gAquestionsContainer} >
        {
          currentQuestion ?
            <></>
            : <></>
        }
      </div>
      <div className={styles.gAAnswersContainer}>
        <label>Your Answer</label>
        <input type='text' placeholder='Your answer' required />
      </div>
    </div>
  )
}

export default Questions;