-- CreateTable
CREATE TABLE "Question" (
    "id" SERIAL NOT NULL,
    "question_id" TEXT NOT NULL,
    "question" TEXT NOT NULL,
    "answer" INTEGER NOT NULL,

    CONSTRAINT "Question_pkey" PRIMARY KEY ("question_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Question_question_id_key" ON "Question"("question_id");
