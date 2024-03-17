import express from "express";
import axios from "axios";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.get("/api/jobs", async (req, res) => {
  try {
    const options = {
      method: "GET",
      url: "https://jobs-api14.p.rapidapi.com/list",
      params: {
        query: "All",
        location: "India",
        distance: "2.0",
        language: "en_GB",
        remoteOnly: "false",
        datePosted: "month",
        employmentTypes: "fulltime;parttime;intern;contractor",
        index: "0",
      },
      headers: {
        "X-RapidAPI-Key": "da901a23edmsh08dfb5ccbad6fd1p159113jsnaa958f89e4bd",
        "X-RapidAPI-Host": "jobs-api14.p.rapidapi.com",
      },
    };

    const response = await axios.request(options);
    const jobs = response.data.jobs.map((job) => ({
      title: job.title,
      dateposted: job.datePosted,
      image: job.image,
      company: job.company,
      location: job.location,
    }));

    console.log(jobs);

    res.send(jobs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
