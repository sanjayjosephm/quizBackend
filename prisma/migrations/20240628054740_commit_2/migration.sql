/*
  Warnings:

  - You are about to drop the `Question` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Question";

-- CreateTable
CREATE TABLE "QuestionTwo" (
    "id" SERIAL NOT NULL,
    "question_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "QuestionTwo_pkey" PRIMARY KEY ("question_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "QuestionTwo_question_id_key" ON "QuestionTwo"("question_id");
