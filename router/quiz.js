const quizController = require("../controllers/quizController");
const { verifyToken } = require("../middleware/authJwt");
const router = require("express").Router();

router.post("/", quizController.create);
router.get("/", [verifyToken], quizController.getAll);
router.get("/:id", quizController.findOne);
router.put("/:id", quizController.update);
router.delete("/:id", quizController.delete);
router.get("/category/:id", quizController.getByCategoryId);
router.get("/level/:id", quizController.getByLevelId);

module.exports = router;
