import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import { UPDATE_QUESTION } from '../reducers/questionReducer';
import styles from '../styles/Home4.module.css';
import networkRequest from '../utils/request';
import customToast from '../utils/toast';

function Questions() {
  const currentQuestion = useSelector((state) => state.questions);
  const dispatch = useDispatch();
  const ansRef = useRef();

  useEffect(() => {
    async function fetchQuestion() {
      const url = process.env.NEXTAUTH_URL + '/api/questions';
      const response = await networkRequest('GET', url, {});
      console.log(response);
      if (response.status === 200) {
        const { questionNo, questionURL } = response.data;
        dispatch(UPDATE_QUESTION({ questionNo, questionURL }));
      }
      else if(response.status ===205){
          customToast('All questions done!','success');
          dispatch(UPDATE_QUESTION({questionNo:100,questionURL:''}));
      }
    }
    fetchQuestion();
  }, []);


  async function handleKeyDown(event){
     if(event.key === 'Enter'&&ansRef && ansRef.current && ansRef.current.value){
        await handleSubmit(event);
     }
  }

  async function handleSubmit(event) {
    if (event) {
      event.preventDefault();
    }
      if(ansRef && ansRef.current && ansRef.current.value){
      const url = process.env.NEXTAUTH_URL+'/api/questions';
      const data = {
          teamAns:ansRef.current.value
      }
      const response = await networkRequest('POST',url,data);
      console.log(response);
      if(response.status===204){
        customToast(response.data.message,'success');
        const { questionNo, questionURL } = response.data;
        dispatch(UPDATE_QUESTION({ questionNo, questionURL }));
        ansRef.current.value='';
      }
      else if(response.status===205){
        customToast('All questions done!','success');
        dispatch(UPDATE_QUESTION({questionNo:100,questionURL:''}));
        ansRef.current.value='';
      }
      else{
        customToast(response.data.message,'failure');
      }
    }
  }


  return (
    <div className={styles.gAquestionsComponent}>
      <ToastContainer />
      <div className={styles.gAquestionsContainer} >
        {
          currentQuestion ?
            <img src={currentQuestion.questionURL} className={styles.gAquestion} />
            : <></>
        }
      </div>
      <div className={styles.gAAnswersContainer}>
        <form>
          <label>Your Answer</label>
          <input type='text' placeholder='Your answer' required onKeyDown={handleKeyDown} ref={ansRef}/>
        </form>
      </div>
    </div>
  )
}

export default Questions;