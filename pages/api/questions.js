import errorCodes from '../../utils/errorCodes';
import User from '../../models/User';
import Team from '../../models/Team';
import Question from '../../models/Question';
import connectToDatabase from '../../utils/database';
import { authOptions } from './auth/[...nextauth]';
import { verifySession } from '../../utils/auth';


async function handler(req, res) {
  const isValid = await verifySession(req,res,authOptions);
  if(!isValid){
    return res.status(errorCodes.FORBIDDEN).json({ message: 'Unauthorized!' });
  }
  if (req.method == 'GET') {
     await getQuestion(req,res);
  }
  else if (req.method === 'POST') {
     await submitQuestion(req,res);
  }
}

async function getQuestion(req,res){
  try {
    await connectToDatabase();
    let currentTime = new Date();
    let startTime = new Date(process.env.startTime);
    let endTime = new Date(process.env.endTime);
    if(Date.parse(currentTime)<Date.parse(startTime) || Date.parse(currentTime)>Date.parse(endTime)){
      return res.status(errorCodes.BAD_REQUEST).json({message:'contest is from '+ process.env.START_TIME+'to '+process.env.END_TIME});
    }
    const { email } = req.body;
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
    return res.json({ questionNo, questionURL });
  } catch (err) {
    return res
      .status(errorCodes.BAD_REQUEST)
      .json({ message: "something went wrong" });
  }
}

async function submitQuestion(req,res){
  const { email } = req.userData;
    try {
      await connectToDatabase();
      let currentTime = new Date();
      let startTime = new Date(process.env.startTime);
      let endTime = new Date(process.env.endTime);
      if(Date.parse(currentTime)<Date.parse(startTime) || Date.parse(currentTime)>Date.parse(endTime)){
        return res.status(errorCodes.BAD_REQUEST).json({message:'contest is from '+ process.env.START_TIME+'to '+process.env.END_TIME});
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

      return res.status(errorCodes.SUCCESS_CORRECT_ANS).json({ message: "Correct Answer" });
    } catch (err) {
      return res
        .status(errorCodes.BAD_REQUEST)
        .json({ message: "something went wrong" });
    }
}

export default handler;
