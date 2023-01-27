import errorCodes from '../../utils/errorCodes';
import User from '../../models/User';
import Team from '../../models/Team';
import Question from '../../models/Question';
import connectToDatabase from '../../utils/database';
import { authOptions } from './auth/[...nextauth]';
import { verifySession } from '../../utils/auth';
import runMiddleware from '../../utils/cross-site';


async function handler(req, res) {
  try{
    await runMiddleware(req,res);
  }
  catch(error){
    return res.status(500);
  }
  const {isValid,session} = await verifySession(req,res,authOptions);
  // console.log(session);
  if(!isValid){
    return res.status(errorCodes.FORBIDDEN).json({ message: 'Unauthorized!' });
  }
  if (req.method == 'GET') {
    try {
      await connectToDatabase();
      let currentTime = new Date();
      let startTime = new Date(process.env.START_TIME);
      let endTime = new Date(process.env.END_TIME);
      // console.log(startTime+" "+endTime);
      if(Date.parse(currentTime)<Date.parse(startTime) ){
        return res.status(errorCodes.SUCCESS_EVENT_NOT_START).json({message:'contest is from '+ process.env.START_TIME+'to '+process.env.END_TIME});
      }
      else if(Date.parse(currentTime)>Date.parse(endTime)){
        return res.status(errorCodes.SUCCESS_EVENT_ENDED).json({message:'contest is from '+ process.env.START_TIME+'to '+process.env.END_TIME});
      }
      const { email } = session?.user;
      let user = await User.findOne({ email });
  
      const teamId = user.teamId;
  
      if (!teamId) {
        return res.status(errorCodes.SUCCESS_NOT_IN_TEAM).json({ message: "please join team" });
      }
  
      let team = await Team.findOne({ teamId });
      const curQues = team.solveCount + 1;
      const totalQuestions = (await Question.find({})).length;
      if (curQues > totalQuestions) {
        return res.status(errorCodes.SUCCESS_ALL_DONE).json({ message: "All questions done!" });
      }
      const question = await Question.findOne({ questionNo: curQues });
      if (!question) {
        return res.status(errorCodes.NOT_FOUND).json({ message: "ques not found" });
      }
      const { questionNo, questionURL } = question;
      return res.status(errorCodes.SUCCESS).json({ questionNo, questionURL });
    } catch (err) {
      return res
        .status(errorCodes.BAD_REQUEST)
        .json({ message: "something went wrong" });
    }
  }
  else if (req.method === 'POST') {
    try {
      const { email } = session?.user;
      await connectToDatabase();
      let currentTime = new Date();
      let startTime = new Date(process.env.START_TIME);
      let endTime = new Date(process.env.END_TIME);
      if(Date.parse(currentTime)<Date.parse(startTime) ){
        return res.status(errorCodes.SUCCESS_EVENT_NOT_START).json({message:'contest is from '+ process.env.START_TIME+'to '+process.env.END_TIME});
      }
      else if(Date.parse(currentTime)>Date.parse(endTime)){
        return res.status(errorCodes.SUCCESS_EVENT_ENDED).json({message:'contest is from '+ process.env.START_TIME+'to '+process.env.END_TIME});
      }
      let user = await User.findOne({ email });
      const teamId = user.teamId;
      if (!teamId) {
        return res.status(errorCodes.SUCCESS_NOT_IN_TEAM).json({ message: "please join team" });
      }
      let team = await Team.findOne({ teamId });
      const curQues = team.solveCount + 1;
      const totalQuestions = (await Question.find({})).length;
      if (curQues > totalQuestions) {
        return res.status(errorCodes.SUCCESS_ALL_DONE).json({ message: "All questions done!" });
      }
      const isNext = curQues+2<totalQuestions;
      const ques = await Question.findOne({ questionNo: curQues });
      const submittedAns = req.body.teamAns;
      if (submittedAns !== ques.questionAns) {
        return res.status(errorCodes.SUCCESS_WRONG_ANS).json({ message: "Wrong answer" });
      }
      const TimeNow = new Date();
      await Team.findByIdAndUpdate(
        team._id,
        { solveCount: curQues, latestTime: TimeNow },
        { new: true }
      );
      if(isNext){
          const nextQuestion = await Question.findOne({questionNo:curQues+2});
          const {questionNo,questionURL} = nextQuestion;
          return res.status(errorCodes.SUCCESS_CORRECT_ANS).json({ message: "Correct Answer", questionNo,questionURL});
      }
      else{
          return res.status(errorCodes.SUCCESS_ALL_DONE).json({message:'All questions done!'});
      }
    } catch (err) {
      // console.log(err);
      return res
        .status(errorCodes.BAD_REQUEST)
        .json({ message: "something went wrong" });
    }
  }
  return res.status(errorCodes.NOT_FOUND).json({message:'Not Found'});
}


export default handler;
