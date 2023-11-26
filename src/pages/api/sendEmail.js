

import { transportner, mailOption } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.email || !data.organ || !data.describe) {
      return res.status(400).json({ message: "Bad request | missing feilds" });
    }
    try {
      await transportner.sendMail({
        ...mailOption,
        subject: "profolio",
        text: "dummy text<br/>",
        html: "<h1>hello</h1><p>body text</p>",
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  } else res.status(400).json({ message: "Bad request" });
};

export default handler;
