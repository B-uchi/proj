import cron from "node-cron";

const job = cron.schedule("* * * * *", async () => {
  console.log("Cron job running!");
  // ... Your cron job logic here
});

job.start();
