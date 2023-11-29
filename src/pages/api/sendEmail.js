import { transportner, mailOption } from "@/config/nodemailer";

const handler = async (req, res) => {
  if (req.method === "POST") {
    const data = req.body.body;
    if (!data.name || !data.email || !data.describe) {
      return res.status(400).json({ message: "Bad request | missing feilds" });
    }
    try {
      await transportner.sendMail({
        ...mailOption,
        subject: `Portfolio - ${data.name || "-"}`,
        text: "dummy text<br/>",
        html: `<h1>Hi im ${data.name || "-"}</h1><h3>Im from, ${
          data.organ || "-"
        }</h3><h2>this is my email ${data.email || "-"}</h2><p>Message:${
          data.describe || "-"
        }</p>`,
      });
      return res.status(200).json({ success: true });
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  } else res.status(400).json({ message: "Bad request" });
};

export default handler;
