import { unstable_getServerSession } from "next-auth";
import { connectToDatabase } from "../../utils/database";
import { getToken } from "next-auth/jwt";

export default questions = async (req, res) => {
  if (req.method === "GET") {
    return;
  }
  const token = await getToken({ req });
  if (token) {
    const session = await unstable_getServerSession(req, res);
    const curTime = new Date();
    const email = req.body.email;
    // const startTime = new Date()
    const client = await connnectToDatabase();
    const db = client.db();
    const user = await db.collections("users").findOne({ email });
    const teamId = user.teamId;
    if (!teamId) {
      return res.status(422).json({ message: "not in team" });
    }
    const team = await db.collections("teams").findOne({ teamId });
    const currentQuestion = team.solveCount + 1;
    const totalQuestions = process.env.TOTAL_QUESTIONS;
    if (currentQuestion > totalQuestions) {
      return res.status();
    }
    const ques = await db
      .collections("questions")
      .findOne({ questionNo: curQues });

    // const ques = await Question.findOne({ questionNo: curQues });

    const submittedAns = req.body.teamAns;
    if (submittedAns !== ques.questionAns) {
      return res
        .status(errCode.SUCCESS_WRONG_ANS)
        .json({ message: "Wrong ans" });
    }

    const TimeNow = new Date();
    await db
      .collections("teams")
      .findByIdAndUpdate(
        team._id,
        { solveCount: curQues, latestTime: TimeNow },
        { new: true }
      );

    return res
      .status(errCode.SUCCESS_CORRECT_ANS)
      .json({ message: "Correct Ans" });
  } else {
    res.status(422).json({ message: "Login again" });
  }
};
