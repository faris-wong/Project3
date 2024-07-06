const express = require("express");
const router = express.Router();
const {
  getMessages,
  createMessages,
  updateMessages,
  deleteMessages,
  seedMessages,
} = require("../controllers/messages");

router.get("/seedmessage", seedMessages);
router.get("/message", getMessages);
router.put("/message/:id", createMessages);
router.patch("/message", updateMessages);
router.delete("/message", deleteMessages);

module.exports = router;
